import styled from "@emotion/styled";
import { EmailIcon, GithubIcon } from "components/atoms/Icons";
import React from "react";

function SocialIcons() {
  return (
    <SocialIconsWrapper>
      <a
        href="https://github.com/probrainteam"
        target="_blank"
        aria-label="github"
        rel="noopener noreferrer"
      >
        <GithubIcon />
      </a>
      <a href="mailto:prob.dev.2022@gmail.com" aria-label="mail">
        <EmailIcon />
      </a>
    </SocialIconsWrapper>
  );
}

const SocialIconsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  margin-left: 30px;
`;

export default SocialIcons;
