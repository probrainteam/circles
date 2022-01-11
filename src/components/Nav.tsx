import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Nav = () => {
  return (
    <NavContainer>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/manage">Manage</Link>
    </NavContainer>
  );
};

export default Nav;
