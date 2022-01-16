import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

import Calendar from "@toast-ui/react-calendar";
import "tui-calendar/dist/tui-calendar.css";
import "tui-date-picker/dist/tui-date-picker.css";
import "tui-time-picker/dist/tui-time-picker.css";

import TodoList from "../components/TodoList";

const Home = () => {
  const navigation = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(true); // 이후 store로 관리

  useEffect(() => {
    isLoggedIn ? navigation("/") : navigation("/login");
  }, [isLoggedIn, navigation]);

  return (
    <Layout>
      <Title>
        <Text>환영합니다.</Text>
        <Text>
          오늘의 <CrueName>PROBRAIN</CrueName> 소식입니다. 😁
        </Text>
      </Title>

      {/* // TODO : 이후 Week단위 task 캘린더 직접 구현 -- 날짜 개념이 추가된 투두리스트 */}
      <Calendar height="600px" defaultView="week" scheduleView />

      <TodoList />
    </Layout>
  );
};

const Title = styled.div`
  margin-bottom: 40px;
`;

const Text = styled.div`
  font-size: 40px;
  font-weight: 100;
`;

const CrueName = styled.span`
  font-weight: 500;
`;

export default Home;
