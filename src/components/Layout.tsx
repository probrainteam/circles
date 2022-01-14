import styled from "@emotion/styled";
import { ReactNode } from "react";
import Nav from "./Nav";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutWrapper>
      <Nav />
      <BodyContent>{children}</BodyContent>
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
  display: flex;
`;

const BodyContent = styled.main`
  width: 100%;
  padding: 50px;
`;

export default Layout;
