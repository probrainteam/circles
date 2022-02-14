import styled from "@emotion/styled";
import React from "react";
import SectionTitle from "../atoms/SectionTitle";
import ContentContainer from "components/atoms/ContentContainer";
import MemberManagementList from "./MemberManagementList";

function MemberManagement() {
  return (
    <ManagementContainer>
      <SectionTitle
        mainTitle={"회원관리"}
        subTitle={"회원 관리를 위한 강력한 기능들을 제공합니다. 🔥"}
      />
      <ContentContainer title="회원관리">
        <MemberManagementList></MemberManagementList>
      </ContentContainer>
    </ManagementContainer>
  );
}
const ManagementContainer = styled.div`
  margin-top: 50px;
`;
export default MemberManagement;
