import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import Input from "components/atoms/Input";
import ErrorMsg from "components/atoms/ErrorMsg";
import Logo from "components/atoms/Logo";
import Button from "components/atoms/Button";

function Login() {
  const navigation = useNavigate();

  const [inputId, setInputId] = useState<string>();
  const [inputPw, setInputPw] = useState<string>();
  const [errorMsg, setErrorMsg] = useState<string>();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;

    if (name === "inputId") setInputId(value);
    else if (name === "inputPw") setInputPw(value);
  };

  const handleLoginClick = () => {
    console.log("click login");
    setErrorMsg("error");
  };

  return (
    <LoginWrapper className="login">
      <LoginInner>
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
          <ErrorMsg>{errorMsg}</ErrorMsg>
          <Button type="submit" className="signin auth-btn">
            LOGIN
          </Button>
        </form>
        <Button
          className="regist auth-btn"
          onClick={() => navigation("/regist")}
        >
          회원가입
        </Button>
      </LoginInner>
    </LoginWrapper>
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

const LoginWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${appear} 0.8s cubic-bezier(0.77, 0, 0.175, 1) forwards;
`;

const LoginInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 370px;
  padding-bottom: 70px;
`;

export default Login;
