import React, { useState } from "react";
import SectionTitle from "../atoms/SectionTitle";
import ApplicationFormCreate from "./ApplicationFormCreate";
import ContentContainer from "components/atoms/ContentContainer";
import NewRecruit from "./NewRecruit";
import Button from "components/atoms/Button";
import styled from "@emotion/styled";
import { GridSelectionModel } from "@mui/x-data-grid";
function Recruit() {
  const [selectionModel, setSelectionModel] = useState<GridSelectionModel>([]);

  // 승인 버튼 클릭
  const handleApproveBtnClick = () => {
    console.log("승인버튼 클릭", selectionModel);
    // setSelectionModel([]); //초기화
  };
  // 거절 버튼 클릭
  const handleRejectBtnClick = () => {
    console.log("거절버튼 클릭", selectionModel);
  };
  return (
    <div>
      <SectionTitle
        mainTitle={"회원 모집"}
        subTitle={"새로운 회원을 모집해보세요. 😆"}
      />
      <ApplicationFormCreate></ApplicationFormCreate>
      <ContentContainer title="새로 들어온 가입 신청">
        <NewRecruit
          selectionModel={selectionModel}
          setSelectionModel={setSelectionModel}
        ></NewRecruit>
        <ButtonContainer>
          <Button
            bgColor="#e9e9e9"
            className="normal-btn"
            onClick={handleApproveBtnClick}
          >
            승인
          </Button>
          <Button
            bgColor="#e9e9e9"
            className="normal-btn"
            onClick={handleRejectBtnClick}
          >
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
  display: flex;
  gap: 10px;
`;

export default Recruit;
