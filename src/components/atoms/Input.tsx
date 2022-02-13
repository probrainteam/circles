import styled from "@emotion/styled";

interface InputProps {
  type?: string;
  placeholder?: string;
  className?: string;
  name?: string;
  value: string | undefined;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({
  type,
  placeholder,
  className,
  name,
  value,
  onChange,
}: InputProps) {
  return (
    <TextField
      type={type}
      placeholder={placeholder}
      className={className}
      name={name}
      value={value}
      onChange={onChange}
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
    padding: 1.4rem;
    border-radius: 1rem;
    border: none;
    background-color: #f5f5f5;
    width: 100%;
    outline: none;
  }
`;

export default Input;
