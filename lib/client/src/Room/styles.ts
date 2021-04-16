import styled from 'styled-components'
import { Link } from 'react-router-dom'

const RoomContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
`
const HeaderContainer = styled.div`
  display: flex;
  background: white;
  padding: 0vh 20px;
  flex-basis: 10vh;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #DEDEDE;
`
const HeaderTitle = styled.p`
  font-weight: 800;
  color: #3a3a3a
  margin: 0px;
`
const HeaderButton = styled(Link)`
  padding: 12px 30px;
  text-decoration: none;
  cursor: pointer;
  background: #E1432E;
  border: 0px;
  color: white;
  font-weight: 800;
  border-radius: 4px;
  transition: all 0.2s linear;
  &:hover {
    background: #e84833;
    transition: all 0.2s linear;
  };
  &:focus {
    outline: none;
  };
`
const Form = styled.form`
  // background: #F0F0F0;
  background: white;
  flex-basis: 12vh;
  padding: 2vh 20px;
  border-top: 1px solid #DEDEDE;
`
const InputBoxTextArea = styled.input`
  padding: 15px;
  border: 1px solid #c6c6c6;
  border-radius: 100px;
  float: left;
  width: 89%;
  &:focus {
    outline: none;
  };
  &:hover {
    border: 1px solid #DEDEDE;
  }
`
const InputBoxButton = styled.button`
  padding: 15px;
  border: 1px solid;
  cursor: pointer;
  background: #E6F3FF;
  color: #0081FF;
  font-weight: 600;
  border-radius: 100px;
  transition: all 0.2s linear;
  float: right;
  width: 10%;
  &:hover {
    background: #d1e8fc;
    transition: all 0.2s linear;
  };
  &:focus {
    outline: none;
  };
`
const MessageContainer = styled.div`
  padding: 10px 20px;
  overflow: auto;
  flex-basis: 78vh;
`
export const styles = {
  Container: RoomContainer,
  MessageContainer,
  Header: {
    Container: HeaderContainer,
    Title: HeaderTitle,
    Button: HeaderButton
  },
  Form,
  Input: {
    TextArea: InputBoxTextArea,
    Button: InputBoxButton
  }
}