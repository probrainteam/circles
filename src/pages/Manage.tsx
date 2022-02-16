import styled from "@emotion/styled";
import MemberManagement from "components/organisms/MemberManagement";
import Recruit from "components/organisms/Recruit";
import Layout from "components/templates/Layout";

function Manage() {
  return (
    <Layout>
      <Recruit />
      <MemberManagement />
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
