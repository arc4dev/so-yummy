import styled from 'styled-components';
import Button from '../components/common/Button';
import Logo from '../components/common/Logo';
import startBg from '../assets/images/start-bg.png';

const StyledStartPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100dvh;
  width: 100%;
  padding: 35px;
  gap: 28px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${startBg}) no-repeat;
    background-size: cover;
    z-index: -1;
  }
`;

const StartHeader = styled.h1`
  color: var(--color-white-2);
  font-size: 1.71rem;
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.48px;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const StartDescription = styled.p`
  text-align: center;
  color: var(--color-white-2);
  font-weight: 300;
  line-height: 1.28;
  letter-spacing: -0.28px;

  @media (min-width: 768px) {
    font-size: 1.17rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

const StartPage = () => {
  return (
    <StyledStartPage>
      <Logo />
      <StartHeader>Welcome to the app!</StartHeader>
      <StartDescription>
        This app offers more than just a collection of recipes - it is designed
        to be your very own digital cookbook. You can easily save and retrieve
        your own recipes at any time.
      </StartDescription>
      <ButtonWrapper>
        <Button to="/register" size="primary">
          Register
        </Button>
        <Button to="/login" size="primary">
          Sign in
        </Button>
      </ButtonWrapper>
    </StyledStartPage>
  );
};

export default StartPage;
