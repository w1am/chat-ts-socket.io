import styled from 'styled-components';

type Chat = {
  isOwner?: boolean
}

const MessageContainer = styled.div`
  padding: 10px 20px;
  overflow: auto;
  background: #EAEDF2;
  margin: 63px 0px;
  height: calc(100vh - 126px);
`
const Chat = styled.div<Chat>`
  background: ${props => props.isOwner ? "#D0D3E3" : "white"};
  border: ${props => props.isOwner ? "1px solid #bcbfd1" : "1px solid #DEDEDE"};
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 14px;
  color: #444444;
  min-width: 10%;
  width: fit-content;
  width: -moz-fit-content;
  max-width: 70%;
  margin-right: ${props => !props.isOwner && "auto"};
  margin-left: ${props => props.isOwner && "auto"};
  margin-bottom: 5px;
`
const Message = styled.p`
  margin: 0px;
`
const Time = styled.p`
  margin: 0px;
  font-size: 11px;
  text-align: right;
`
const EmptyMessage = styled.p`
  text-align: center;
  vertical-align: middle;
  color: #6d6d6d;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const LoadingContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
export const styles = {
  LoadingContainer,
  EmptyMessage,
  MessageBox: {
    Container: MessageContainer
  },
  Chat,
  Time,
  Message
}