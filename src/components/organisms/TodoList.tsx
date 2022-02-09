import TodoBox from "components/atoms/TodoBox";
import TodoContent from "components/molecules/TodoContent";
import TodoCreate from "components/atoms/TodoCreate";
import TodoHeader from "components/molecules/ContentHeader";

function TodoList() {
  return (
    <TodoBox>
      <TodoHeader>TODOLIST</TodoHeader>
      <TodoCreate />
      <TodoContent />
    </TodoBox>
  );
}

export default TodoList;
