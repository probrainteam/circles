import { useEffect, useState } from "react";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import Nav from "../components/Nav";
import TextInput from "../components/TextInput";
import ErrorMsg from "../components/ErrorMsg";
import Logo from "../components/Logo";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigation = useNavigate();
  const [inputId, setInputId] = useState<string>();
  const [inputPw, setInputPw] = useState<string>();
  const [errorMsg, setErrorMsg] = useState<string>();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  // TODO : Auth useEffect
  useEffect(() => {
    console.log("login page mount");
    return () => {
      console.log("login page unmount");
    };
  }, []);

  return (
    <LoginWrapper className="login">
      <LoginInner>
        <Logo>Circles</Logo>

        <form onSubmit={handleLoginClick}>
          <TextInput
            placeholder="아이디를 입력해주세요"
            className="text-field--id"
            name="id"
            value={inputId}
            onChange={handleInputChange}
          />
          <TextInput
            type="password"
            placeholder={"비밀번호를 입력해주세요"}
            className="text-field--pw"
            name="pw"
            value={inputPw}
            onChange={handleInputChange}
          />
          <ErrorMsg>{errorMsg}</ErrorMsg>
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
};

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
