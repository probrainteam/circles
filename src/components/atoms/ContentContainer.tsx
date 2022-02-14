import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import ContentHeader from "components/atoms/ContentHeader";

interface ContentBoxProps {
  children: ReactNode;
  title: string;
  className?: string;
}

function ContentContainer({ children, title }: ContentBoxProps) {
  return (
    <ContentBoxWrapper>
      <ContentHeader>{title}</ContentHeader>
      {children}
    </ContentBoxWrapper>
  );
}
const ContentBoxWrapper = styled.div`
  height: 100%;
  position: relative;
  background: white;
  box-shadow: 4px 12px 30px 6px rgba(0, 0, 0, 0.09);
  display: flex;
  flex-direction: column;
`;
export default ContentContainer;
