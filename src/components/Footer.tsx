import styled from 'styled-components';
import Logo from './Logo';
import AppNav from './AppNav';
import Button from './Button';
import SocialLinks from './SocialLinks';

const MainFooter = styled.div`
  background-color: var(--color-black);
  padding: 2em 0px 1.6em 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.2em;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  color: var(--color-white);
  gap: 0.5em;
`;

const LogoHeader = styled.h3`
  font-weight: 600;
  font-size: 1.28rem;
  letter-spacing: 0.27px;
`;

const LowFooter = styled.div`
  padding: 28px 0px;
  display: flex;
  justify-content: center;
  gap: 1em;
`;

const LowFooterSpan = styled.span`
  font-size: 0.71rem;
  font-weight: 500;
  color: var(--color-black);
  opacity: 0.5;
`;

const LowFooterSpanTerms = styled(LowFooterSpan)`
  font-weight: 400;
`;

const Footer = () => {
  return (
    <footer>
      <MainFooter>
        <LogoContainer>
          <Logo />
          <LogoHeader>So Yummy</LogoHeader>
        </LogoContainer>

        <AppNav orientation="vertical" />

        <div>
          <input type="email" />
          <Button>Subscribe</Button>
        </div>

        <SocialLinks />
      </MainFooter>

      <LowFooter>
        <LowFooterSpan>&copy; All Rights Reserved</LowFooterSpan>
        <LowFooterSpanTerms>Terms of service</LowFooterSpanTerms>
      </LowFooter>
    </footer>
  );
};

export default Footer;
