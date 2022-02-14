import styled from "@emotion/styled";
import { ReactNode } from "react";

interface ButtonProps {
  type?: "button" | "reset" | "submit" | undefined;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  bgColor?: string;
}
interface ButtonType {
  bgColor?: string;
}

function Button({ type, className, onClick, children, bgColor }: ButtonProps) {
  const commonProps = {
    bgColor,
  };
  return (
    <ButtonWrapper
      type={type}
      className={className}
      onClick={onClick}
      {...commonProps}
    >
      {children}
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.button<ButtonType>`
  background-color: ${({ bgColor }) => bgColor};
  font-size: 14px;
  border: none;
  &.auth-btn {
    width: 100%;
    height: 60px;
    border-radius: 5px;
    margin: 8px 0;
  }
  &.recruit-btn {
    font-size: 16px;
    height: fit-content;
    margin: 0;
    padding: 1rem 4rem;
    border-radius: 30px;
    & + & {
      margin-left: 20px;
    }
  }
`;

export default Button;
