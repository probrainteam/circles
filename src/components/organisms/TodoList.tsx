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
  // position: relative;
  // background: white;
  // box-shadow: 4px 12px 30px 6px rgba(0, 0, 0, 0.09);
  // margin-top: 96px;
  // margin-bottom: 32px;
  // display: flex;
  // flex-direction: column;
`;

export default TodoList;
