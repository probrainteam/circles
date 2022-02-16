import React from "react";
import styled from "@emotion/styled";
interface RatioChartProps {
  thisNumber: number;
  totalNumber: number;
}
function RatioChart({ thisNumber, totalNumber }: RatioChartProps) {
  return (
    <RatioChartContainer>
      <Title>회비 납부</Title>
      <div>
        <ThisNumberContainer>{thisNumber}</ThisNumberContainer>
        <TotalNumberContainer>{totalNumber}</TotalNumberContainer>
      </div>
    </RatioChartContainer>
  );
}
const RatioChartContainer = styled.div`
  width: 24%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const Title = styled.div`
  text-align: center;
  position: absolute;
  top: 0;
  font-size: 14px;
`;
const ThisNumberContainer = styled.div`
  display: inline-block;
  font-size: 60px;
`;
const TotalNumberContainer = styled.div`
  font-size: 24px;
  display: inline-block;
  &::before {
    content: "/";
    position: relative;
    bottom: 2px;
  }
`;

export default RatioChart;
