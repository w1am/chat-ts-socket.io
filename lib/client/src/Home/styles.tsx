import styled from 'styled-components';
import LOGO from './logo.png'
import { Link } from 'react-router-dom'

const HomeContainer = styled.div`
  background: #5464FE;
  background-position: center;
  position: relative;
  height: 100vh;
  background-repeat: no-repeat;
`

const HeaderContainer = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 100vw;
`
const Quote = styled.h1`
  color: white;
  font-family: 'Montserrat', 'Arial';
  font-weight: 800;
  @media (max-width: 610px) {
    font-size: 25px;
  };
  @media (max-width: 380px) {
    font-size: 22px;
  };
`
const Logo = styled.img.attrs({ src: LOGO })`
`
const SearchBar = styled.input`
  padding: 15px 20px;
  font-size: 20px;
  border: 8px solid #D6D6D6;
  border-radius: 100px;
  width: 500px;
  color: #4F4F4F;
  transition: all 0.5s linear;
  &:focus {
    outline: none;
  };
  &:hover {
    border: 8px solid #F2F2F2;
    transition: all 0.3s linear;
  };
  @media (max-width: 610px) {
    width: 380px;
    padding: 15px 10px;
  };
  @media (max-width: 418px) {
    width: 320px;
    padding: 15px 10px;
    font-size: 16px;
  };
  @media (max-width: 344px) {
    width: 300px;
    padding: 15px 10px;
    font-size: 16px;
  };
`
const SearchButton = styled.input.attrs({ type: "submit", value:"GO" })`
  width: 200px;
  top: 0px;
  font-size: 20px;
  font-weight: 600;
  margin-top: 10px;
  padding: 15px;
  cursor: pointer;
  border-radius: 200px;
  background: #FD8B23;
  color: white;
  border: 5px solid #ffa251;
  transition: all 0.2s linear;
  &:focus {
    outline: none;
  };
  &:hover {
    background: #ed7812;
    border: 5px solid #f4af6e;
    transition: all 0.2s linear;
  }
  @media (max-width: 610px) {
    width: 150px;
    padding: 10px;
  };
  @media (max-width: 380px) {
    width: 120px;
    padding: 10px;
    font-size: 14px;
  };
`
const MenuContainer = styled.div`
  background: #4f5fef;
  text-align: right;
  padding: 20px 40px;
`
const MenuLink = styled(Link)`
  color: #DEDEDE;
  padding: 0px;
  margin: 0px;
  font-weight: 600;
  transition: all 0.2s linear;
  &:hover {
    color: white;
    transition: all 0.2s linear;
  }
`
export const styles = {
  Home: {
    Container: HomeContainer
  },
  Menu: {
    Container: MenuContainer,
    Link: MenuLink
  },
  Header: {
    Container: HeaderContainer,
    Logo,
    Quote,
    Input: {
      SearchBar,
      SearchButton
    }
  }
}