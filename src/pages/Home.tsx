import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Calendar from "@toast-ui/react-calendar";
import "tui-calendar/dist/tui-calendar.css";
import "tui-date-picker/dist/tui-date-picker.css";
import "tui-time-picker/dist/tui-time-picker.css";

import Layout from "components/Layout";
import TodoList from "components/ui/organisms/TodoList";
import Welcome from "components/ui/atoms/Welcome";

function Home() {
  const navigation = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(true); // 이후 store로 관리

  useEffect(() => {
    isLoggedIn ? navigation("/") : navigation("/login");
  }, [isLoggedIn, navigation]);

  return (
    <Layout>
      <Welcome />

      {/* // TODO : 이후 Week단위 task 캘린더 직접 구현 -- 날짜 개념이 추가된 투두리스트 */}
      <Calendar height="600px" defaultView="week" scheduleView />

      <TodoList />
    </Layout>
  );
}

export default Home;
