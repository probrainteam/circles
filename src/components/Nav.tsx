import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import Clock from "react-live-clock";

import {
  IoReorderFourOutline,
  IoHomeOutline,
  IoAlbumsOutline,
  IoEnterOutline,
  IoPeopleOutline,
  IoLogOutOutline,
  IoBulb,
  IoLogoGithub,
  IoAtCircleSharp,
} from "react-icons/io5";

const Nav = () => {
  const [crueName, setCrueName] = useState("PROBRAIN");
  return (
    <NavContainer>
      <Icons>
        <IoReorderFourOutline size={20} color="#fff" />
        <IoBulb size={20} color="#fff" />
      </Icons>

      <Today>
        {/* <Clock format={"YYYY년"} interval={1000} ticking={true} />
        <Clock format={"MM월 DD일 dddd"} interval={1000} ticking={true} />
        <Clock format={"h : mm A"} interval={1000} ticking={true} /> */}
        <div>
          <CrueName>{crueName}</CrueName> 입니다.
        </div>
      </Today>

      <Menus>
        <Menu to="/">
          <IoHomeOutline size={20} color="#fff" />
          <MenuText>HOME</MenuText>
        </Menu>
        <Menu to="/manage">
          <IoPeopleOutline size={20} color="#fff" />
          <MenuText>MANAGE</MenuText>
        </Menu>
        <Menu to="/account">
          <IoAlbumsOutline size={20} color="#fff" />
          <MenuText>ACCOUNT</MenuText>
        </Menu>
        <Menu to="/login">
          <IoEnterOutline size={20} color="#fff" />
          <MenuText>Login</MenuText>
        </Menu>
        <IoLogOutOutline size={20} color="#fff" />
      </Menus>
      <Footer>
        <Logo>Circles.</Logo>
        <FooterItem>
          <div>&copy; {new Date().getFullYear()} PROBRAIN</div>
          <SocialIcons>
            <IoLogoGithub size={20} color="#fff" />
            <IoAtCircleSharp size={20} color="#fff" />
          </SocialIcons>
        </FooterItem>
      </Footer>
    </NavContainer>
  );
};

const Icons = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 40px;
`;

const Today = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  font-weight: 100;
  color: white;
  margin: 50px 0;
`;

const Footer = styled.footer`
  bottom: 30px;
  position: absolute;
  color: white;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: 100;
`;

const FooterItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 100;
`;

const SocialIcons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  margin-left: 30px;
`;

const CrueName = styled.span`
  font-size: 24px;
  font-weight: 500;
  color: white;
`;

const NavContainer = styled.div`
  /* box-shadow: 4px 12px 30px 6px rgba(0, 0, 0, 0.09); */
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 284px;
  min-width: 284px;
  padding: 30px 30px 30px 20px;
  position: relative;
  background-color: #2d2d47;
`;

const Menus = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;

  font-size: 18px;
  font-weight: 100;
`;

const Menu = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;
`;

const MenuText = styled.span`
  margin: 0 12px;
`;

export default Nav;
