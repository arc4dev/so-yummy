import styled from 'styled-components';
import Logo from './Logo';
import AppNav from './AppNav';
import ThemeSwitch from './ThemeSwitch';
import useBreakpoints from '../hooks/useBreakpoints';
import { useAuth } from '../contexts/authContexts';

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: space-between;
  padding: 18px 16px;

  @media screen and (min-width: 768px) {
    padding: 18px 32px 0px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 14px 100px 0 100px;
  }
`;

const UserImage = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 100%;
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

const Header = () => {
  const { isDesktop } = useBreakpoints();
  const { user } = useAuth();

  return (
    <StyledHeader>
      <Logo />

      {isDesktop ? (
        <>
          <AppNav />

          <Container>
            <UserInfo>
              <UserImage src={user?.image} alt={`Image of ${user?.image}`} />
              <span>{user?.name}</span>
            </UserInfo>

            <ThemeSwitch />
          </Container>
        </>
      ) : (
        <>
          <Container>
            <UserInfo>
              <UserImage src={user?.image} alt={`Image of ${user?.image}`} />
              <span>{user?.name}</span>
            </UserInfo>

            <button>
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
            </button>
          </Container>
        </>
      )}
    </StyledHeader>
  );
};

export default Header;
