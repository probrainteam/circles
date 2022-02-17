import styled from "@emotion/styled";
import { ChangeEvent, FormEvent, useState } from "react";
import { useAppDispatch } from "hooks/redux-hooks";
import { add } from "features/todo/todoSlice";
import Input from "components/atoms/Input";

function TodoCreate() {
  const [todoText, setTodoText] = useState("");

  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(add(todoText));
    setTodoText("");
  };

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  return (
    <InsertForm onSubmit={handleSubmit}>
      <Input
        className="normal-input"
        placeholder="할 일을 입력 후, Enter 를 누르세요"
        onChange={handleTextChange}
        value={todoText}
      />
    </InsertForm>
  );
}

const InsertForm = styled.form`
  padding-left: 3.2rem;
  padding-top: 3.2rem;
  padding-right: 3.2rem;
  border-top: 0.1rem solid #e9ecef;
`;

export default TodoCreate;
