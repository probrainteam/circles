import styled from "@emotion/styled";
import { ReactNode } from "react";

interface ErrorMsgProps {
  children: ReactNode;
}

const ErrorMsg = ({ children }: ErrorMsgProps) => {
  // FIXME: 이후 error 메시지 toast 메시지로 수정
  return <Error>{children}</Error>;
};

const Error = styled.div`
  color: red;
`;

export default ErrorMsg;
