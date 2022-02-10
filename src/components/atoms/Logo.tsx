import styled from "@emotion/styled";
import { ReactNode } from "react";

interface LogoProps {
  children: ReactNode;
  className: string;
}

function Logo({ children, className }: LogoProps) {
  return <LogoWrapper className={className}>{children}</LogoWrapper>;
}

const LogoWrapper = styled.div`
  &.auth {
    font-size: 70px;
    font-weight: 200;
    width: 100%;
    padding: 30px 0;
    text-align: center;
  }

  &.footer {
    font-size: 24px;
    font-weight: 100;
  }
`;

export default Logo;
