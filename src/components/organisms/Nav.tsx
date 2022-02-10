import { useState } from "react";
import styled from "@emotion/styled";
import Menus from "components/molecules/Menus";
import { BulbIcon, HamburgerIcon } from "components/atoms/Icons";
import Footer from "./Footer";

function Nav() {
  const [crueName, setCrueName] = useState("PROBRAIN");

  return (
    <NavContainer>
      <Icons>
        <HamburgerIcon />
        <BulbIcon />
      </Icons>

      <Today>
        <div>2022년</div>
        <div>01월 12일 수요일</div>
        <div>01 : 20 PM</div>
        <div>
          <CrueName>{crueName}</CrueName> 입니다.
        </div>
      </Today>

      <Menus />
      <Footer />
    </NavContainer>
  );
}

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

const CrueName = styled.span`
  font-size: 24px;
  font-weight: 500;
  color: white;
`;

const NavContainer = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 284px;
  min-width: 284px;
  padding: 30px 30px 30px 20px;
  position: fixed;
  background-color: #2d2d47;
`;

export default Nav;
