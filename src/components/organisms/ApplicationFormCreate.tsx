import Button from "components/atoms/Button";
import Input from "components/atoms/Input";
import React, { useRef, useState } from "react";
import styled from "@emotion/styled";
import { CopyIcon } from "components/atoms/Icons";
const doCopy = (text: string) => {
  // 출처 : https://kyounghwan01.github.io/blog/React/clipboard-copy/#%E1%84%89%E1%85%A5%E1%84%85%E1%85%A9%E1%86%AB
  // 흐름 1.
  if (!document.queryCommandSupported("copy")) {
    return alert("복사하기가 지원되지 않는 브라우저입니다.");
  }

  // 흐름 2.
  const textarea: HTMLTextAreaElement = document.createElement("textarea");
  textarea.value = text;
  // textarea.style.top = 0;
  // textarea.style.left = 0;
  // textarea.style.position = "fixed";

  // 흐름 3.
  document.body.appendChild(textarea);
  // focus() -> 사파리 브라우저 서포팅
  textarea.focus();
  // select() -> 사용자가 입력한 내용을 영역을 설정할 때 필요
  textarea.select();
  // 흐름 4.
  document.execCommand("copy");
  // 흐름 5.
  document.body.removeChild(textarea);
  alert("클립보드에 복사되었습니다.");
};

function ApplicationFormCreate() {
  const [applicationFormUrl, setApplicationFormUrl] = useState("");
  const handleBtnClick = () => {
    console.log("가입신청서 만들기 button click");
    setApplicationFormUrl("http://localhost:3000/manage");
  };
  const handleCopyClick = () => {
    // const el = urlInputRef.current;
    // if (el) {
    //   el.select();
    //   document.execCommand("copy");
    //   alert("복사되었습니다. ");
    // }
    doCopy(applicationFormUrl);
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
