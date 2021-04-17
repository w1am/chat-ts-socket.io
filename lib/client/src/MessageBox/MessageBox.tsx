import Message from './Message'
import { styles as s } from './styles'
import { MessageInterface, MessageBoxProps } from "../interfaces"
import { useEffect, useRef } from 'react'
import { PulseLoader as Loader } from "react-spinners";

const MessageBox = ({ messages, loading }: MessageBoxProps) => {
  const messagesEndRef = useRef<HTMLObjectElement>(null)

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages]);

  if (loading) {
    return (
      <s.MessageBox.Container>
        <s.LoadingContainer>
          <Loader loading={loading} color="#444444" />
        </s.LoadingContainer>
      </s.MessageBox.Container>
    )
  } else {
    return (
      <s.MessageBox.Container>
        {messages.length == 0 ? (
          <s.EmptyMessage>No messages yet</s.EmptyMessage>
        ) : (
          messages.map((res: MessageInterface) => (
            <Message key={res.chat_id} message={res} />
          ))
        )}
        <div ref={messagesEndRef}></div>
      </s.MessageBox.Container>
    )
  }
}

export default MessageBox
