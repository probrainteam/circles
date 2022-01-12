import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const Nav = () => {
  return (
    <NavContainer>
      <Info>
        <Text>2022년</Text>
        <Text>01월 12일 수요일 </Text>
        <Text>13:20PM</Text>
        <Text>PROBRAIN 입니다.</Text>
      </Info>

      <Menus>
        <Menu to="/">Home</Menu>
        <Menu to="/manage">Manage</Menu>
        <Menu to="/login">Login</Menu>
      </Menus>
      <div></div>
    </NavContainer>
  );
};

const Text = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Info = styled.div`
  margin-top: 50px;
`;

const NavContainer = styled.div`
  box-shadow: 4px 12px 30px 6px rgba(0, 0, 0, 0.09);
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-width: 300px;
  padding: 30px;
  justify-content: space-between;
`;

const Menus = styled.div`
  display: flex;
  flex-direction: column;
`;

const Menu = styled(Link)`
  margin-bottom: 30px;
`;

export default Nav;
