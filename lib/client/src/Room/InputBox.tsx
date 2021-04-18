import React, { useState } from 'react'
import { styles as s } from './styles'
import TextField from './TextField'
import { InputBoxProps } from '../interfaces'
import { AiOutlineSend as Send } from 'react-icons/ai'

const InputBox = ({ sendMessage, onType }: InputBoxProps) => {
  const [ message, setMessage ] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | React.FormEvent<HTMLButtonElement>) : void => {
    e.preventDefault()
    const trimmed = message.trim()
    if (trimmed.length > 0) {
      sendMessage(trimmed)
      setMessage("")
    }
  }

  return (
    <s.Form onSubmit={handleSubmit}>
      <TextField onType={onType} value={message} onChange={setMessage} />
      <s.Input.Button type="submit" onClick={handleSubmit}>
        <Send />
      </s.Input.Button>
    </s.Form>
  )
}

export default InputBox