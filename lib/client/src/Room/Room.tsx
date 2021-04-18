import { styles as s } from './styles'
import InputBox from './InputBox'
import MessageBox from '../MessageBox/MessageBox'
import useMessage from './useMessage';
import { MatchProps } from '../interfaces';
import { PulseLoader as Loader } from 'react-spinners';
import { FaUserAlt } from 'react-icons/fa'
const { Header, Container } = s

const Room = ({ match }: MatchProps) => {
  const room = match.params.room
  const { messages, sendMessage, loading, noClients, typing, setTyping, onType } = useMessage(room)
  return (
    <Container>
      <Header.Container>
        <Header.Title.Container>
          <Header.Title.Room>{room}</Header.Title.Room>
          <Header.Title.Count>
            <span style={{ marginRight: 10 }}>/</span>
            <span style={{ fontSize: 13, marginRight: 5 }}><FaUserAlt /></span>
           {noClients} 
          </Header.Title.Count>
          <s.TypingContainer>
            <Loader loading={typing} color="#A0A0A0" size={6} />
          </s.TypingContainer>
        </Header.Title.Container>
        <Header.Button to="/">Leave</Header.Button>
      </Header.Container>
      <MessageBox messages={messages} loading={loading} />
      <InputBox
        onType={onType}
        setTyping={setTyping}
        sendMessage={sendMessage}
      />
    </Container>
  )
}

export default Room