import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import Input from "components/atoms/Input";
import ErrorMsg from "components/atoms/ErrorMsg";
import Logo from "components/atoms/Logo";
import Button from "components/atoms/Button";
import { useAppDispatch, useAppSelector } from "hooks/redux-hooks";
import { userActions } from "features/user/userSlice";

function Login() {
  const navigation = useNavigate();
  const user = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;

    if (name === "email") setEmail(value);
    else if (name === "pw") setPw(value);
  };

  const handleLoginClick = (e: FormEvent) => {
    e.preventDefault();
    dispatch(userActions.login({ email, pw }));
  };

  return (
    <LoginWrapper className="login">
      <LoginInner>
        <Logo className="auth">Circles</Logo>

        <form onSubmit={handleLoginClick}>
          <Input
            placeholder="이메일을 입력해주세요"
            className="auth-input"
            name="email"
            value={email}
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
