import { styles as s } from './styles'
import InputBox from './InputBox'
import MessageBox from '../MessageBox/MessageBox'
import useMessage from './useMessage';
import { MatchProps } from '../interfaces';
const { Header, Container } = s

const Room = ({ match }: MatchProps) => {
  const room = match.params.room
  const { messages, sendMessage, loading } = useMessage(room)
  return (
    <Container>
      <Header.Container>
        <Header.Title>{room}</Header.Title>
        <Header.Button to="/">Leave</Header.Button>
      </Header.Container>
      <MessageBox messages={messages} loading={loading} />
      <InputBox sendMessage={sendMessage} />
    </Container>
  )
}

export default Room