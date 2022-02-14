import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import Input from "components/atoms/Input";
import ErrorMsg from "components/atoms/ErrorMsg";
import Logo from "components/atoms/Logo";
import Button from "components/atoms/Button";
import { onLogin } from "api/auth";

function Login() {
  const navigation = useNavigate();

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;

    if (name === "id") setId(value);
    else if (name === "pw") setPw(value);
  };

  const handleLoginClick = (e: FormEvent) => {
    e.preventDefault();

    onLogin(id, pw);
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
            value={id}
            onChange={handleInputChange}
          />
          <Input
            type="password"
            placeholder={"비밀번호를 입력해주세요"}
            className="auth-input"
            name="pw"
            value={pw}
            onChange={handleInputChange}
          />
          <ErrorMsg>{error}</ErrorMsg>
          <Button type="submit" className="signin">
            LOGIN
          </Button>
        </form>
        <Button className="regist" onClick={() => navigation("/regist")}>
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
