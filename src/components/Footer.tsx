import styled from 'styled-components';
import AppNav from './AppNav';
import Button from './Button';
import SocialLinks from './SocialLinks';
import LogoContainer from './LogoContainer';
import Input from './Input';

const StyledFooter = styled.footer`
  background-color: var(--color-black);
`;

const MainFooter = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 28px 16px 20px 16px;

  display: grid;
  grid-auto-columns: 1fr;
  grid-template-areas: 'logoContainer' 'nav' 'newsletter' 'socialLinks';
  justify-items: center;
  grid-gap: 2.2em;

  @media screen and (min-width: 768px) {
    grid-template-areas: 'logoContainer nav' 'newsletter newsletter' 'socialLinks socialLinks';

    padding: 50px 32px 26px 32px;
  }

  @media screen and (min-width: 1280px) {
    grid-template-areas: 'logoContainer nav newsletter' 'socialLinks socialLinks socialLinks';

    padding: 64px 100px 52px 100px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;

  @media screen and (min-width: 768px) {
    justify-self: start;
  }
`;

const StyledFooterList = styled.ul`
  grid-area: 'list';
  font-weight: 300;
  color: var(--color-white);
  list-style: unset;
  padding-left: 2em;
  display: none;
  justify-self: start;
  line-height: 1.66;
  letter-spacing: -0.36px;

  @media screen and (min-width: 768px) {
    display: block;
  }

  @media screen and (min-width: 1280px) {
    font-size: 1.1rem;
  }
`;

const NewsletterForm = styled.form`
  grid-area: newsletter;
  display: flex;
  flex-direction: column;
  gap: 14px;

  color: var(--color-white);

  @media screen and (min-width: 1280px) {
    justify-self: end;
    flex-direction: column;
    width: 338px;
  }
`;

const NewsletterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;
  gap: 0.5em;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: column;
    width: 338px;
    gap: 0.8em;
  }
`;

const NewsletterHeader = styled.h4`
  font-weight: 600;
  display: none;
  font-size: 1.28rem;

  @media screen and (min-width: 1280px) {
    display: block;
  }
`;

const NewsletterDescription = styled.p`
  display: none;
  line-height: 1.28;
  font-weight: 300;
  letter-spacing: -0.28px;
  margin-bottom: 0.4em;

  @media screen and (min-width: 1280px) {
    display: block;
  }
`;

const LowFooter = styled.div`
  background-color: var(--color-white);

  padding: 28px 0px;
  display: flex;
  justify-content: center;
  gap: 1em;

  @media screen and (min-width: 768px) {
    padding: 32px 0px;
  }

  @media screen and (min-width: 1280px) {
    padding: 50px 0px;
  }
`;

const LowFooterSpan = styled.span`
  font-size: 0.71rem;
  font-weight: 500;
  color: var(--color-black);
  opacity: 0.5;

  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
`;

const LowFooterSpanTerms = styled(LowFooterSpan)`
  font-weight: 400;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <MainFooter>
        <Container>
          <LogoContainer />

          <StyledFooterList>
            <li>
              <p>Database of recipes that can be replenished</p>
            </li>
            <li>
              <p>Flexible search for desired and unwanted ingredients</p>
            </li>
            <li>
              <p>Ability to add your own recipes with photos</p>
            </li>
            <li>
              <p>Convenient and easy to use</p>
            </li>
          </StyledFooterList>
        </Container>

        <AppNav orientation="vertical" />

        <NewsletterForm>
          <NewsletterHeader>Subscribe to out Newsletter</NewsletterHeader>
          <NewsletterDescription>
            Subscribe up to our newsletter. Be in touch with latest news and
            special offers, etc.
          </NewsletterDescription>

          <NewsletterContainer>
            <Input type="Newsletter" />
            <Button>Subscribe</Button>
          </NewsletterContainer>
        </NewsletterForm>

        <SocialLinks />
      </MainFooter>

      <LowFooter>
        <LowFooterSpan>&copy; All Rights Reserved</LowFooterSpan>
        <LowFooterSpanTerms>Terms of service</LowFooterSpanTerms>
      </LowFooter>
    </StyledFooter>
  );
};

export default Footer;
