import Button from "components/atoms/Button";
import Input from "components/atoms/Input";
import React, { useRef, useState } from "react";
import styled from "@emotion/styled";
import { CopyIcon } from "components/atoms/Icons";
import { doCopy } from "utils/copy";

function ApplicationFormCreate() {
  const [applicationFormUrl, setApplicationFormUrl] = useState("");
  const handleBtnClick = () => {
    console.log("가입신청서 만들기 button click");
    setApplicationFormUrl("http://localhost:3000/manage");
  };
  const handleCopyClick = () => {
    if (applicationFormUrl !== "") {
      doCopy(applicationFormUrl);
    }
  };
  return (
    <ApplicationFormContainer>
      <ButtonContainer>
        <Button
          onClick={handleBtnClick}
          bgColor="#e9e9e9"
          className="normal-btn "
        >
          가입신청서 만들기
        </Button>
      </ButtonContainer>
      <InputContainer>
        <Input
          className="normal-input input--recruit"
          placeholder="가입신청서 만들기 버튼을 누르면 URL이 나타납니다."
          value={applicationFormUrl}
          readOnly
        ></Input>
      </InputContainer>
      <IconContainer onClick={handleCopyClick}>
        <CopyIcon />
      </IconContainer>
    </ApplicationFormContainer>
  );
}
const ApplicationFormContainer = styled.div`
  margin: 25px 0;
  display: flex;
  gap: 10px;
  align-items: center;
`;
const IconContainer = styled.div`
  &:hover {
    cursor: pointer;
  }
`;
const ButtonContainer = styled.div``;
const InputContainer = styled.div`
  flex-grow: 1;
`;

export default ApplicationFormCreate;
