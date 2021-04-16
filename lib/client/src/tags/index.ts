import { Chat } from './chat';

export const Tags = {
  Chat: {
    Mutations: {
      chat: Chat.CHAT
    },
    Queries: {
      getChats: Chat.GET_CHATS
    }
  }
}