import { useEffect, useRef, useState } from "react"
import socketIOClient from "socket.io-client"
import { MessageInterface } from "../interfaces"
import { useQuery, useMutation } from "@apollo/client"
import { Tags } from '../tags';
const { Chat } = Tags

const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";
const CLIENTS_CONNECTED_EVENT = "clientsConnectedEvent";
const CLIENT_TYPING_EVENT = "clientTypingEvent";
const SOCKET_SERVER_URL = process.env.host ? process.env.host : ""

const useChat = (room: string) => {
  const [messages, setMessages] = useState<MessageInterface[]>([]);
  const [noClients, setNoClients] = useState<number>(0);
  const [typing, setTyping] = useState<boolean>(false);
  const socketRef = useRef<SocketIOClient.Socket>();

  const [ chat ] = useMutation(Chat.Mutations.chat)

  const { loading, data } = useQuery(Chat.Queries.getChats, {
    variables: { roomName: room }
  })

  useEffect(() => {
    if (!loading) {
      setMessages(data.getChats.data)
    }

    socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
      query: { room },
    });

    socketRef.current.on(CLIENTS_CONNECTED_EVENT, (noOfClients: number) => {
      setNoClients(noOfClients)
    });

    socketRef.current.on(CLIENT_TYPING_EVENT, (status: boolean) => {
      setTyping(status)
    });

    socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (message: MessageInterface) => {
      const messageObj = {
        ...message,
        currentUser: socketRef.current ? socketRef.current.id : null
      }
      setMessages((messages) => [...messages, messageObj]);
    });

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    };
  }, [data, loading, room]);

  const onType = (status: boolean) : void => {
    if (socketRef.current) {
      socketRef.current.emit(CLIENT_TYPING_EVENT, status)
    }
  }

  const sendMessage = (message: string) : void => {
    if (socketRef.current) {
      chat({
        variables: {
          sender: socketRef.current.id ? socketRef.current.id : null,
          message: message,
          roomName: room.toLowerCase(),
        },
      }).then((res) => {
        if (res.data.chat.success) {
          if (socketRef.current) {
            socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
              chat_id: res.data.chat.data.chat_id,
              message,
              sender: socketRef.current.id ? socketRef.current.id : null,
            })
          }
        }
      })
    }
  };

  return { messages, sendMessage, onType, loading, noClients, typing, setTyping };
};

export default useChat;