import styled from "@emotion/styled";

interface TextInputProps {
  type?: string;
  placeholder?: string;
  className?: string;
  name?: string;
  value: string | undefined;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function TextInput({
  type,
  placeholder,
  className,
  name,
  value,
  onChange,
}: TextInputProps) {
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
  margin-bottom: 10px;
  border: 1px solid lightgray;
  border-radius: 5px;
  font-size: 14px;
  padding: 20px 24px;
  width: 100%;

  &:focus {
    outline: none;
    border: 1px solid black;
  }
`;

export default TextInput;
