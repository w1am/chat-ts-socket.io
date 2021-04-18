import { styles as s } from './styles'
import { MessageInterface, MessageProps } from '../interfaces'

const Message = (props: MessageProps) => {
  const message : MessageInterface = props.message
  const condition: boolean = message.sender == message.currentUser
  return (
    <s.Chat isOwner={condition}>
      <s.Message>{message.message}</s.Message>
      <s.Time>{message.time}</s.Time>
    </s.Chat>
  )
}

export default Message;