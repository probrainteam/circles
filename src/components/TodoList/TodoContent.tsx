import styled from "@emotion/styled";
import { useAppSelector } from "../../hooks/redux-hooks";
import TodoItem from "./TodoItem";

const TodoContent = () => {
  const todos = useAppSelector((state) => state.todos);

  console.log(todos);
  return (
    <TodoContentWrapper>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        />
      ))}
    </TodoContentWrapper>
  );
};

const TodoContentWrapper = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

export default TodoContent;
