import Input from './Input';
import { styles as s } from './styles'

const Header = () => {
  return (
    <s.Header.Container>
      <s.Header.Logo />
      <s.Header.Quote>Meet the right people,<br/> at the right time</s.Header.Quote>
      <Input />
    </s.Header.Container>
  )
}

export default Header