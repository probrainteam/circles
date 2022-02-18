import styled from "@emotion/styled";
import Menu from "components/atoms/Menu";
import { HomeIcon, LogoutIcon, ManageIcon } from "components/atoms/Icons";

function Menus() {
  return (
    <MenusWrapper>
      <Menu path="/" text="HOME">
        <HomeIcon />
      </Menu>
      <Menu path="/manage" text="MANAGE">
        <ManageIcon />
      </Menu>
      <LogoutIcon />
    </MenusWrapper>
  );
}

const MenusWrapper = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  font-size: 1.8rem;
  font-weight: 100;
`;

export default Menus;
