const pool = require('../db');

export default {
  Query: {
    getChats: async (_, { roomName }) => {
      try {
        const chats = await pool.query(
          "SELECT * FROM chat WHERE roomname = ($1)",
          [roomName]
        );
        const rows = chats.rows;
        return {
          success: true,
          message: "success",
          data: rows,
        }
      } catch (err) {
        console.error(err.message);
        return {
          success: false,
          message: "Something went wrong",
          data: null
        }
      }
    }
  },
  Mutation: {
    chat: async (_, { sender, message, roomName }) => {
      console.log(sender, message)
      try {
        const newChat = await pool.query(
          "INSERT INTO chat (sender, message, roomName) VALUES ($1, $2, $3) RETURNING *",
          [sender, message, roomName]
        );
        const rows = newChat.rows;
        return {
          success: true,
          message: "success",
          data: rows[0],
        }
      } catch (err) {
        console.error(err.message);
        return {
          success: false,
          message: "Something went wrong",
          data: null
        }
      }
    }
  }
}
