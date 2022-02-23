import styled from "@emotion/styled";
import axios from "axios";
import MemberManagement from "components/organisms/MemberManagement";
import Recruit from "components/organisms/Recruit";
import Layout from "components/templates/Layout";
import { useEffect, useState } from "react";

function Manage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    // console.log("컴포넌트가 화면에 나타남");
    _getList();
    return () => {};
  }, []);
  const _getList = () => {
    const dummyUrl = "dummy/memberList.json";
    axios
      .get(dummyUrl)
      .then((result) => {
        //가지고 온 리스트를 state에 저장합니다.
        // console.log(result.data);
        // const newList = result.data.filter(
        //   (item: { approval: boolean }) => !item.approval
        // );
        setData(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Layout>
      <Recruit memberList={data} />
      <MemberManagement memberList={data} />
    </Layout>
  );
}

const ManageWrapper = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export default Manage;
