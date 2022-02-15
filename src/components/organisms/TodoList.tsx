import TodoContent from "components/molecules/TodoContent";
import TodoCreate from "components/molecules/TodoCreate";
import styled from "@emotion/styled";
import ContentContainer from "components/atoms/ContentContainer";

function TodoList() {
  return (
    <TodoBoxWrapper>
      <ContentContainer title="TODOLIST">
        <TodoCreate />
        <TodoContent />
      </ContentContainer>
    </TodoBoxWrapper>
  );
}

const TodoBoxWrapper = styled.div`
  width: 512px;
  height: 768px;
  margin-top: 96px;
  margin-bottom: 32px;
`;

export default TodoList;
