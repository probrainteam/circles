import { ChangeEvent, useEffect, useState } from "react";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import Input from "components/atoms/Input";
import ErrorMsg from "components/atoms/ErrorMsg";
import Logo from "components/atoms/Logo";
import Button from "components/atoms/Button";

function Regist() {
  const [inputId, setInputId] = useState<string>();
  const [inputPw, setInputPw] = useState<string>();
  const [errorMsg, setErrorMsg] = useState<string>();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;

    console.log(name, value);

    if (name === "inputId") setInputId(value);
    else if (name === "inputPw") setInputPw(value);
  };

  const handleLoginClick = () => {
    console.log("click login");
    setErrorMsg("error");
  };

  useEffect(() => {
    console.log("regist page mount");
    return () => {
      console.log("regist page unmount");
    };
  }, []);

  return (
    <RegistWrapper className="regist">
      <RegistInner>
        <Logo className="auth">Circles</Logo>

        <form onSubmit={handleLoginClick}>
          <Input
            placeholder="아이디를 입력해주세요"
            className="auth-input"
            name="id"
            value={inputId}
            onChange={handleInputChange}
          />
          <Input
            type="password"
            placeholder={"비밀번호를 입력해주세요"}
            className="auth-input"
            name="pw"
            value={inputPw}
            onChange={handleInputChange}
          />
          <Input
            type="password"
            placeholder={"다시 한번 비밀번호를 입력해주세요"}
            className="auth-input"
            name="pw"
            value={inputPw}
            onChange={handleInputChange}
          />
          <Input
            type="password"
            placeholder={"공개 키를 입력해주세요"}
            className="auth-input"
            name="pw"
            value={inputPw}
            onChange={handleInputChange}
          />
          <ErrorMsg>{errorMsg}</ErrorMsg>
          <Button type="submit" className="regist auth-btn">
            회원가입
          </Button>
        </form>
      </RegistInner>
    </RegistWrapper>
  );
}

const appear = keyframes`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
`;

const RegistWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${appear} 0.8s cubic-bezier(0.77, 0, 0.175, 1) forwards;
`;

const RegistInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 370px;
  padding-bottom: 70px;
`;

export default Regist;
