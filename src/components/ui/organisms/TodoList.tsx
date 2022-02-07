import TodoBox from "components/ui/atoms/TodoBox";
import TodoContent from "components/ui/molecules/TodoContent";
import TodoCreate from "components/ui/atoms/TodoCreate";
import TodoHeader from "components/ui/molecules/ContentHeader";

const TodoList = () => {
  return (
    <TodoBox>
      <TodoHeader>TODOLIST</TodoHeader>
      <TodoCreate />
      <TodoContent />
    </TodoBox>
  );
};

export default TodoList;
