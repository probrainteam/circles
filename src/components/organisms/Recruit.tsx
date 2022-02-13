import React from "react";
import SectionTitle from "../atoms/SectionTitle";
import ApplicationFormCreate from "./ApplicationFormCreate";
import ContentContainer from "components/atoms/ContentContainer";
import DataTable from "components/molecules/DataTable";
import NewRecruit from "./NewRecruit";

function Recruit() {
  return (
    <div>
      <SectionTitle
        mainTitle={"회원 모집"}
        subTitle={"새로운 회원을 모집해보세요. 😆"}
      />
      <ApplicationFormCreate></ApplicationFormCreate>
      <ContentContainer title="새로 들어온 가입 신청">
        <NewRecruit></NewRecruit>
      </ContentContainer>
    </div>
  );
}

export default Recruit;
