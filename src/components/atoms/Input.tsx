import styled from "@emotion/styled";
import { LegacyRef } from "react";

interface InputProps {
  type?: string;
  placeholder?: string;
  className?: string;
  name?: string;
  value: string | undefined;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean | undefined;
}

function Input({
  type,
  placeholder,
  className,
  name,
  value,
  onChange,
  readOnly,
}: InputProps) {
  return (
    <TextField
      type={type}
      placeholder={placeholder}
      className={className}
      name={name}
      // value={value}
      defaultValue={value}
      onChange={onChange}
      readOnly={readOnly}
    />
  );
}

const TextField = styled.input`
  &.auth-input {
    font-size: 1.4rem;
    padding: 2rem 2.4rem;
    border: 0.1rem solid lightgray;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    width: 100%;

    &:focus {
      outline: none;
      border: 0.1rem solid black;
    }
  }

  &.normal-input {
    font-size: 1.8rem;
    padding: 1rem 4rem;
    border-radius: 1rem;
    border: none;
    background-color: #f5f5f5;
    width: 100%;
    outline: none;
  }
  &.input--recruit {
    border-radius: 3rem;
  }
  &.member-manage-input {
    border-radius: 3rem;
  }
`;

export default Input;
