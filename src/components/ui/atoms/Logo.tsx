import styled from "@emotion/styled";
import { ReactNode } from "react";

interface LogoProps {
  children: ReactNode;
}

function Logo({ children }: LogoProps) {
  return <LogoWrapper>{children}</LogoWrapper>;
}

const LogoWrapper = styled.div`
  font-size: 70px;
  font-weight: 200;
  width: 100%;
  padding: 30px 0;
  text-align: center;
`;

export default Logo;
