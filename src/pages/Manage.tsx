import styled from "@emotion/styled";
import Layout from "components/Layout";

const Manage = () => {
  return (
    <Layout>
      <ManageWrapper>
        <h1>manage</h1>
      </ManageWrapper>
    </Layout>
  );
};

const ManageWrapper = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export default Manage;
