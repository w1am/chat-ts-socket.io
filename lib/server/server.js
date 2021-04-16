require('dotenv').config({ silent: process.env.NODE_ENV === 'production' })
import express from 'express'
import path from 'path'
import cors from 'cors'
import { ApolloServer } from 'apollo-server-express'
import { fileLoader, mergeTypes, mergeResolvers } from "merge-graphql-schemas"
import socket from 'socket.io'
import http from 'http'
const pool = require("./db")

const NEW_CHAT_MESSAGE_EVENT = "newChatMessage" 

const PORT = process.env.PORT || 5120

const env = process.env.NODE_ENV || 'development'
const app = express()

const corsOptions = {
  origin: 'http://localhost:8080',
  credentials: true,
  optionsSuccessStatus: 200,
}

app.use(cors(corsOptions));
app.use(express.json());

app.use(express.static(path.resolve(__dirname + '/../client/build')));

if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../client/build/index.html'));
  })
}

const server = http.createServer(app);

const typeDefs = mergeTypes(fileLoader(path.join(__dirname, "./schema")));
const resolvers = mergeResolvers(
  fileLoader(path.join(__dirname, "./resolvers"))
);

new ApolloServer({
  typeDefs,
  resolvers,
  playground: (env == 'development') ? {
    settings: { 'request.credentials': 'include' }
  } : false
}).applyMiddleware({ app, cors: corsOptions, path: '/' });

var numClients = {}

var io = socket(server)
io.on('connection', (socket) => {
  console.log("New client connected");

  const { room } = socket.handshake.query;
  socket.join(room);
  socket.room = room;

  if (numClients[room] == undefined) {
    numClients[room] = 1;
  } else {
    numClients[room]++;
  }

  socket.on(NEW_CHAT_MESSAGE_EVENT, data => {
    io.in(room).emit(NEW_CHAT_MESSAGE_EVENT, data)
  })

  socket.on("disconnect", async () => {
    console.log("Client disconnected");
    numClients[socket.room]--;
    socket.leave(room)
    if (numClients[room] == 0)  {
      await pool.query("DELETE FROM chat WHERE roomName = $1", [room])
    }
  });
})

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})

