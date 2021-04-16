import { gql } from 'apollo-server-express';

export default gql`
  type Data {
    chat_id: Int
    sender: String
    message: String
  }

  type SenderResponse {
    success: Boolean
    message: String
    data: Data
  }

  type ChatResponse {
    success: Boolean
    message: String
    data: [Data]
  }

  type Query {
    getChats(roomName: String): ChatResponse
  }

  type Mutation {
    chat(sender: String!, message: String, roomName: String): SenderResponse
  }
`