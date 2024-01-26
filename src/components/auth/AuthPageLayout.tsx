import styled from 'styled-components';
import { Link } from 'react-router-dom';
import authFrame from '../../assets/svg/auth-frame.svg';

const StyledAuthPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100dvh;
  width: 100%;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 450px;
    background-color: #1e1f28;
    z-index: -1;

    @media screen and (min-width: 768px) {
      height: 420px;
    }

    @media screen and (min-width: 1440px) {
    }
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 115px;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const FormImage = styled.img`
  width: 285px;

  @media screen and (min-width: 768px) {
    width: 409px;
  }

  @media screen and (min-width: 768px) {
    width: 409px;
  }
`;

const StyledLink = styled(Link)`
  color: var(--color-white-2);
  font-size: 1rem;
  font-weight: 300;
  text-decoration-line: underline;

  @media screen and (min-width: 768px) {
    font-size: 1.14rem;
  }
`;

type Props = {
  children: React.ReactNode;
  type: 'login' | 'register';
};

const AuthPageLayout = ({ children, type }: Props) => {
  return (
    <StyledAuthPage>
      <FormImage src={authFrame} alt="frame" />
      <FormContainer>
        {children}
        <StyledLink to={type === 'login' ? '/register' : '/login'}>
          {type === 'login' ? 'Register' : 'Sign in'}
        </StyledLink>
      </FormContainer>
    </StyledAuthPage>
  );
};

export default AuthPageLayout;
