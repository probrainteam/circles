import styled from "@emotion/styled";
import { ReactNode } from "react";

interface ContentHeaderProps {
  children: ReactNode;
}

const ContentHeader = ({ children }: ContentHeaderProps) => {
  return <ContentHeaderWrapper>{children}</ContentHeaderWrapper>;
};

const ContentHeaderWrapper = styled.div`
  padding-top: 32px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 32px;
  border-bottom: 1px solid #e9ecef;
  background-color: #2d2d47;
  color: #ffffff;
`;

export default ContentHeader;
