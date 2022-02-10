import styled from "@emotion/styled";
import Logo from "components/atoms/Logo";
import SocialIcons from "components/molecules/SocialIcons";

function Footer() {
  return (
    <FooterWrapper>
      <Logo className="footer">Circles.</Logo>
      <FooterItem>
        <div>&copy; {new Date().getFullYear()} PROBRAIN</div>
        <SocialIcons />
      </FooterItem>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  bottom: 30px;
  position: absolute;
  color: white;
`;

const FooterItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 100;
`;

export default Footer;
