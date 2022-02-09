import styled from "@emotion/styled";
import { ReactNode } from "react";

interface ButtonProps {
  type?: "button" | "reset" | "submit" | undefined;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

function Button({ type, className, onClick, children }: ButtonProps) {
  return (
    <ButtonWrapper type={type} className={className} onClick={onClick}>
      {children}
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.button`
  background-color: ${({ color }) => color};
  margin: 8px 0;
  width: 100%;
  height: 60px;
  border: none;
  border-radius: 5px;
  font-size: 14px;
`;

export default Button;
