import React, { useEffect, useRef } from "react";
import { TextFieldProps } from "../interfaces";
import { styles } from './styles';
const { Input } = styles;

const TextField = ({ onChange, onType, ...rest }: TextFieldProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const typer = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onChange(e.target.value)
    onType(true)
    setTimeout(() => {
      onType(false)
    }, 2000)
  }

  return (
    <Input.TextArea
      ref={inputRef}
      placeholder="Say something"
      onChange={(e) => typer(e)}
      {...rest}
    />
  );
};

export default TextField;
