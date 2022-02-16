import styled from "@emotion/styled";
import { ReactNode } from "react";
interface TitleProps {
  // children: ReactNode;
  className?: string;
  mainTitle : string;
  subTitle : string;
}
function SectionTitle({mainTitle,subTitle}:TitleProps) {
  return <div>
    <MainTitle>{mainTitle}</MainTitle>
    <SubTitle>{subTitle}</SubTitle>
  </div>;
}
const MainTitle = styled.div`
  font-size : 40px;
`;
const SubTitle = styled.div`
font-size : 24px;
 
`;
export default SectionTitle;
