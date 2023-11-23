import styled from 'styled-components';
import AppNav from './AppNav';
import Button from './Button';
import SocialLinks from './SocialLinks';
import LogoContainer from './LogoContainer';
import Input from './Input';

const MainFooter = styled.div`
  background-color: var(--color-black);
  padding: 2em 0px 1.6em 0px;
  gap: 2.2em;

  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto auto auto;
  grid-template-areas: 'logoContainer' 'nav' 'newsletter' 'socialLinks';

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'logoContainer nav' 'newsletter newsletter' 'socialLinks socialLinks';
  }
`;

const NewsletterForm = styled.form`
  grid-area: newsletter;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  width: max-content;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
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
        <LogoContainer />

        <AppNav orientation="vertical" />

        <NewsletterForm>
          <Input type="Newsletter" />
          <Button>Subscribe</Button>
        </NewsletterForm>

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
