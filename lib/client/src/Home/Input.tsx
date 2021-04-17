import { useEffect, useRef, useState } from 'react'
import { useHistory } from "react-router-dom"
import { styles as s } from './styles'

const Input = () => {
  const [ room, setRoom ] = useState("")
  const history = useHistory()
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) : void => {
    e.preventDefault()
    setRoom("")
    history.push(`${room.toLowerCase()}`)
  }

  return (
    <form onSubmit={onSubmit}>
      <s.Header.Input.SearchBar
        placeholder="Enter room name"
        ref={inputRef}
        value={room}
        onChange={(e) => setRoom(e.target.value)}
      />
      <br />
      <s.Header.Input.SearchButton />
    </form>
  )
}

export default Input