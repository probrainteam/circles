import React from "react";
import SectionTitle from "../atoms/SectionTitle";
import ApplicationFormCreate from "./ApplicationFormCreate";
import ContentContainer from "components/atoms/ContentContainer";
import NewRecruit from "./NewRecruit";
import Button from "components/atoms/Button";
import styled from "@emotion/styled";
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
        <ButtonContainer>
          <Button bgColor="#e9e9e9" className="recruit-btn">
            승인
          </Button>
          <Button bgColor="#e9e9e9" className="recruit-btn">
            거절
          </Button>
        </ButtonContainer>
      </ContentContainer>
    </div>
  );
}
const ButtonContainer = styled.div`
  padding-bottom: 20px;
  padding-left: 20px;
`;

export default Recruit;
