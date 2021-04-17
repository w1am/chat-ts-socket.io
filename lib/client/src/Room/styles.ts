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
  padding: 5px 20px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #DEDEDE;
`
const HeaderTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
`
const HeaderTitle = styled.p`
  font-weight: 800;
  color: #3a3a3a;
  margin: 0px;
`
const HeaderCount = styled.p`
  font-weight: 500;
  color: #a0a0a0;
  margin: 0px;
  margin-left: 10px;
`
const HeaderButton = styled(Link)`
  padding: 8px 30px;
  text-decoration: none;
  cursor: pointer;
  background: #FBF1F1;
  font-size: 14px;
  font-family: arial;
  color: red;
  border-radius: 4px;
  border: 1px solid red;
  transition: all 0.2s linear;
  &:hover {
    background: #f7e6e6;
    transition: all 0.1s linear;
  };
  &:focus {
    outline: none;
  };
`
const Form = styled.form`
  background: white;
  padding: 15px 20px;
  border-top: 1px solid #DEDEDE;
`
const InputBoxTextArea = styled.input`
  padding: 15px;
  border: 1px solid #a8a8a8;
  border-radius: 100px;
  float: left;
  width: 89%;
  font-size: 16px;
  &:focus {
    outline: none;
  };
`
const InputBoxButton = styled.button`
  padding: 15px;
  border: 1px solid;
  cursor: pointer;
  background: #E6F3FF;
  color: #0081FF;
  font-weight: 600;
  border-radius: 100px;
  transition: all 0.1s linear;
  float: right;
  width: 10%;
  &:hover {
    background: #d1e8fc;
    transition: all 0.2s linear;
  };
  &:focus  
    outline: none;
  };
`
const TypingContainer = styled.div`
  margin: 0px;
  margin-left: 10px;
`
export const styles = {
  TypingContainer,
  Container: RoomContainer,
  Header: {
    Container: HeaderContainer,
    Title: {
      Container: HeaderTitleContainer,
      Room: HeaderTitle,
      Count: HeaderCount
    },
    Button: HeaderButton
  },
  Form,
  Input: {
    TextArea: InputBoxTextArea,
    Button: InputBoxButton
  }
}