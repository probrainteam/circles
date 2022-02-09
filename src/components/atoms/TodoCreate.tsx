import styled from "@emotion/styled";
import { useState } from "react";
import { useAppDispatch } from "hooks/redux-hooks";
import { add } from "features/todoSlice";

function TodoCreate() {
  const [todoText, setTodoText] = useState("");

  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(add(todoText));
    setTodoText("");
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  return (
    <InsertForm onSubmit={handleSubmit}>
      <Input
        autoFocus
        placeholder="할 일을 입력 후, Enter 를 누르세요"
        onChange={handleTextChange}
        value={todoText}
      />
    </InsertForm>
  );
}

const InsertForm = styled.form`
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;

  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 14px;
  border-radius: 10px;
  border: none;
  background-color: #f5f5f5;
  width: 100%;
  outline: none;
  font-size: 18px;
`;

export default TodoCreate;
