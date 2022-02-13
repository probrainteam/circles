import styled from "@emotion/styled";
import { ReactNode } from "react";

interface ButtonProps {
  type?: "button" | "reset" | "submit" | undefined;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  bgColor?: string;
  width?: string;
  fontSize?: string;
}
interface ButtonType {
  bgColor?: string;
  width?: string;
  fontSize?: string;
}

function Button({
  type,
  className,
  onClick,
  children,
  bgColor,
  width,
  fontSize,
}: ButtonProps) {
  const commonProps = {
    bgColor,
    width,
    fontSize,
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
  width: ${({ width }) => (width ? width : "100%")};
  height: 60px;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "14px")};
  border: none;
  border-radius: 5px;
  margin: 8px 0;

  &.btn--recruit {
    height: 100%;
    margin: 0;
    padding: 0 40px;
    border-radius: 30px;
  }
`;

export default Button;
