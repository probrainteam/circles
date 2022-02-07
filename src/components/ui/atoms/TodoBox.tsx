import styled from "@emotion/styled";
import { ReactNode } from "react";

interface TodoBoxProps {
  children: ReactNode;
}

const TodoBox = ({ children }: TodoBoxProps) => {
  return <TodoBoxWrapper>{children}</TodoBoxWrapper>;
};

const TodoBoxWrapper = styled.div`
  width: 512px;
  height: 768px;
  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  background: white;
  box-shadow: 4px 12px 30px 6px rgba(0, 0, 0, 0.09);
  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

export default TodoBox;
