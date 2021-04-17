import { RouteComponentProps } from 'react-router'

export interface MessageInterface {
  chat_id: string;
  message: string;
  sender: string;
  currentUser: string | null;
}

export interface MessageBoxProps {
  messages: MessageInterface[];
  loading: boolean;
}

export interface MessageProps {
  message: MessageInterface
}

export interface InputBoxProps {
  sendMessage(message: string): void;
  setTyping: (val: boolean) => void;
  onType(status: boolean): void
}

export interface MatchParams {
  room: string;
}

export interface MatchProps extends RouteComponentProps<MatchParams> {
  isExact: boolean;
  path: string;
  url: string;
  params: MatchParams;
}

export interface TextFieldProps {
  value: string;
  onChange: (val: string) => void;
  onType(status: boolean): void;
  placeholder?: string;
  autoFocus?: boolean;
  name?: string;
  type?: "email" | "password" | "text";
}