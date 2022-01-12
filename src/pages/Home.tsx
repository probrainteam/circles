import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import Nav from "../components/Nav";

const Home = () => {
  const navigation = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(true); // 이후 store로 관리

  useEffect(() => {
    isLoggedIn ? navigation("/") : navigation("/login");
  }, [isLoggedIn, navigation]);

  return (
    <Layout>
      <HomeWrapper>
        <h1>home</h1>
      </HomeWrapper>
    </Layout>
  );
};

const HomeWrapper = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export default Home;
