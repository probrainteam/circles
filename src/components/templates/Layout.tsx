import { ReactNode } from "react";
import styled from "@emotion/styled";
import Nav from "components/organisms/Nav";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <LayoutWrapper>
      <Nav />
      <BodyContent>{children}</BodyContent>
    </LayoutWrapper>
  );
}

const LayoutWrapper = styled.div`
  display: flex;
`;

const BodyContent = styled.main`
  width: 100%;
  padding: 50px;
  padding-left: 320px;
`;

export default Layout;
