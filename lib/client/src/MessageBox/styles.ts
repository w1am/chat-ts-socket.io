import styled from 'styled-components';
import ReactLoading from 'react-loading';

type Chat = {
  isOwner?: boolean
}

const MessageContainer = styled.div`
  padding: 10px 20px;
  overflow: auto;
  flex-basis: 78vh;
  background: #EAEDF2;
`
const Chat = styled.p<Chat>`
  background: ${props => props.isOwner ? "#D0D3E3" : "white"};
  border: ${props => props.isOwner ? "1px solid #bcbfd1" : "1px solid #DEDEDE"};
  padding: 10px 15px;
  border-radius: 6px;
  font-size: 14px;
  color: #444444;
  width: fit-content;
  width: -moz-fit-content;
  max-width: 70%;
  margin-right: ${props => !props.isOwner && "auto"};
  margin-left: ${props => props.isOwner && "auto"};
`
const EmptyMessage = styled.p`
  text-align: center;
  vertical-align: middle;
  line-height: 70vh; 
  color: #6d6d6d;
`
const LoadingContainer = styled(ReactLoading)`
  text-align: center;
  vertical-align: middle;
  line-height: 78vh;
`
const LoadingParent = styled.div`
  padding: 10px 20px;
  overflow: auto;
  flex-basis: 78vh;
  background: #EAEDF2;
`
export const styles = {
  LoadingContainer,
  LoadingParent,
  EmptyMessage,
  MessageBox: {
    Container: MessageContainer
  },
  Chat
}