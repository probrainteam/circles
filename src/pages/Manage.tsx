import axios from "axios";
import MemberManagement from "components/organisms/MemberManagement";
import Recruit from "components/organisms/Recruit";
import Layout from "components/templates/Layout";
import { useEffect, useState } from "react";

function Manage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    _getList();
    return () => {};
  }, []);
  const _getList = () => {
    const dummyUrl = "dummy/memberList.json";
    axios
      .get(dummyUrl)
      .then((result) => {
        setData(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Layout>
      <Recruit memberList={data} setMemberList={setData} />
      <MemberManagement memberList={data} setMemberList={setData} />
    </Layout>
  );
}

export default Manage;
