import styled from 'styled-components';
import Logo from './Logo';
import { useMediaQuery } from 'react-responsive';
import AppNav from './AppNav';
import ThemeSwitch from './ThemeSwitch';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 18px 16px 0px 16px;

  @media screen and (min-width: 768px) {
    padding: 18px 32px 0px 32px;
  }

  @media screen and (min-width: 1280px) {
    padding: 14px 100px 0 100px;
  }
`;

const UserImage = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 100%;
  background: url('/avatar.jpeg'), lightgray 50%; // TODO: replace with real image
  background-position: center;
  background-size: cover;

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4em;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8em;
  font-weight: 500;
`;

const UserName = styled.span``;

const Header = () => {
  const isMobileAndHigher = useMediaQuery({ query: '(max-width: 1279px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

  return (
    <StyledHeader>
      <Logo />

      {isMobileAndHigher && (
        <>
          <Container>
            <UserInfo>
              <UserImage />
              <UserName>Olena</UserName>
            </UserInfo>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none">
              <path
                d="M3.5 14H24.5M3.5 7H24.5M3.5 21H17.5"
                stroke="#22252A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Container>
        </>
      )}

      {isDesktop && (
        <>
          <AppNav />

          <Container>
            <UserInfo>
              <UserImage />
              <UserName>Olena</UserName>
            </UserInfo>

            <ThemeSwitch />
          </Container>
        </>
      )}
    </StyledHeader>
  );
};

export default Header;
