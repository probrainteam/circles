import styled from "@emotion/styled";
import { ReactNode } from "react";

interface ContentHeaderProps {
  children: ReactNode;
}

function ContentHeader({ children }: ContentHeaderProps) {
  return <ContentHeaderWrapper>{children}</ContentHeaderWrapper>;
}

const ContentHeaderWrapper = styled.div`
  font-size: 1.6rem;
  color: #ffffff;
  background-color: #2d2d47;
  padding: 3.2rem;
`;

export default ContentHeader;
