import React, { ReactNode } from "react";
import styled from "@emotion/styled";
interface ContentBoxProps {
  children: ReactNode;
  className?: string;
}

function ContentContainer({ children }: ContentBoxProps) {
  return <ContentBoxWrapper>{children}</ContentBoxWrapper>;
}
const ContentBoxWrapper = styled.div`
  height: 100%;
  position: relative;
  background: white;
  box-shadow: 4px 12px 30px 6px rgba(0, 0, 0, 0.09);
  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;
export default ContentContainer;
