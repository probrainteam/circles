import TodoBox from "./TodoBox";
import TodoContent from "./TodoContent";
import TodoCreate from "./TodoCreate";
import TodoHeader from "./TodoHeader";

const TodoList = () => {
  return (
    <TodoBox>
      <TodoHeader />
      <TodoCreate />
      <TodoContent />
    </TodoBox>
  );
};

export default TodoList;
