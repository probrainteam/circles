import React from "react";
import styled from "@emotion/styled";

interface WelcomeProps {
  circleName?: string;
}

function Welcome({ circleName }: WelcomeProps) {
  return (
    <Title>
      <Text>환영합니다.</Text>
      <Text>
        오늘의 <CircleName>{circleName}</CircleName> 소식입니다. 😁
      </Text>
    </Title>
  );
}

const Title = styled.div`
  margin-bottom: 40px;
`;

const Text = styled.div`
  font-size: 40px;
  font-weight: 100;
`;

const CircleName = styled.span`
  font-weight: 500;
`;

export default Welcome;
