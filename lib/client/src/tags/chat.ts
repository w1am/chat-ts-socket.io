import { gql } from '@apollo/client'

const GET_CHATS = gql`
  query getChats($roomName: String) {
    getChats(roomName: $roomName) {
      success
      message
      data {
        chat_id
        sender
        message
        time
      }
    }
  }
`

const CHAT = gql`
  mutation chat($sender: String!, $message: String, $roomName: String) {
    chat(sender: $sender, message: $message, roomName: $roomName) {
      success
      message
      data {
        chat_id
        sender
        message
        time
      }
    }
  }
`
export const Chat = {
  CHAT,
  GET_CHATS
}