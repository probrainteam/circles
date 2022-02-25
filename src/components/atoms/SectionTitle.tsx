import styled from "@emotion/styled";

interface TitleProps {
  className?: string;
  mainTitle: string;
  subTitle: string;
}
function SectionTitle({ mainTitle, subTitle }: TitleProps) {
  return (
    <div>
      <MainTitle>{mainTitle}</MainTitle>
      <SubTitle>{subTitle}</SubTitle>
    </div>
  );
}

const MainTitle = styled.div`
  font-size: 40px;
  font-weight: 500;
`;

const SubTitle = styled.div`
  font-size: 24px;
  font-weight: 200;
`;

export default SectionTitle;
