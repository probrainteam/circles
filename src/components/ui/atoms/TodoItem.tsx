import styled from "@emotion/styled";
import { MdDone, MdDelete } from "react-icons/md";
import { useAppDispatch } from "hooks/redux-hooks";
import { remove, toggle } from "features/todoSlice";

interface TodoItemProps extends DoneType {
  id: number;
  text: string;
}

interface DoneType {
  done: boolean;
}

function TodoItem({ id, done, text }: TodoItemProps) {
  const dispatch = useAppDispatch();

  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={() => dispatch(toggle(id))}>
        {done && <MdDone />}
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove className="icon-remove" onClick={() => dispatch(remove(id))}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 22px;
  display: none;
  cursor: pointer;

  &:hover {
    color: #ff6b6b;
  }
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;

  &:hover {
    .icon-remove {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div<DoneType>`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  border: 1px solid ${({ done }) => (done ? `#2d2d47` : `#ced4da`)};
  color: ${({ done }) => (done ? `#2d2d47` : `#ced4da`)};
`;

const Text = styled.div<DoneType>`
  flex: 1;
  font-size: 21px;
  color: ${({ done }) => (done ? `#ced4da` : `#2d2d47`)};
`;

export default TodoItem;
