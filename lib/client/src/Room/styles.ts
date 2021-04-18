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
  padding: 12px 20px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #DEDEDE;
  position: fixed;
  top: 0px;
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
  padding: 10px 30px;
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
  padding: 10px 20px;
  border-top: 1px solid #DEDEDE;
  display: flex;
  flex-direction: row;
  position: fixed;
  bottom: 0px;
  width: 100%;
`
const InputBoxTextArea = styled.input`
  border: 1px solid #a8a8a8;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 200px 0px 0px 200px;
  width: 100%;
  border-right: 0px;
  &:focus {
    outline: none;
  };
`
const InputBoxButton = styled.button`
  border: 1px solid;
  cursor: pointer;
  right: 2px;
  top: 2px;
  background: #E6F3FF;
  border-radius: 0px 200px 200px 0px;
  color: #0081FF;
  transition: all 0.1s linear;
  font-size: 24px;
  padding: 0px 30px;
  display: inline-flex;
  align-items: center;
  &:hover {
    background: #d1e8fc;
    transition: all 0.2s linear;
  };
  &:focus  
    outline: none;
  };
  @media (max-width: 490px) {
    padding: 0px 20px;
  };
  @media (max-width: 470px) {
    padding: 0px 12px;
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