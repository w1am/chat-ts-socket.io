import React, { useEffect, useRef } from "react";
import { TextFieldProps } from "../interfaces";
import { styles } from './styles';
const { Input } = styles;

const TextField = ({ onChange, ...rest }: TextFieldProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  return (
    <Input.TextArea
      ref={inputRef}
      placeholder="Say something"
      onChange={({ target: { value } }) => onChange(value)}
      {...rest}
    />
  );
};

export default TextField;
