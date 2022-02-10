import styled from "@emotion/styled";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface MenuProps {
  path: string;
  text: string;
  children: ReactNode;
}

function Menu({ path, text, children }: MenuProps) {
  return (
    <MenuWrapper to={path}>
      {children}
      <MenuText>{text}</MenuText>
    </MenuWrapper>
  );
}

const MenuWrapper = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 3rem;
`;

const MenuText = styled.span`
  margin: 0 1.2rem;
`;

export default Menu;
