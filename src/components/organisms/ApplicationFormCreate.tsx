import Button from "components/atoms/Button";
import Input from "components/atoms/Input";
import React, { useState } from "react";
import styled from "@emotion/styled";

function ApplicationFormCreate() {
  const [applicationFormUrl, setApplicationFormUrl] = useState("");
  const handleBtnClick = () => {
    console.log("가입신청서 만들기 button click");
    setApplicationFormUrl("");
  };
  return (
    <ApplicationFormContainer>
      <ButtonContainer>
        <Button
          onClick={handleBtnClick}
          bgColor="#e9e9e9"
          className="btn--recruit"
          fontSize="16px"
        >
          가입신청서 만들기
        </Button>
      </ButtonContainer>
      <InputContainer>
        <Input
          className="normal-input"
          placeholder="가입신청서 만들기 버튼을 누르면 URL이 나타납니다."
          value={applicationFormUrl}
        ></Input>
      </InputContainer>
    </ApplicationFormContainer>
  );
}
const ApplicationFormContainer = styled.div`
  margin: 25px 0;
  display: flex;
  gap: 10px;
`;
const ButtonContainer = styled.div``;
const InputContainer = styled.div`
  flex-grow: 1;
`;

export default ApplicationFormCreate;
