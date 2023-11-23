import styled from 'styled-components';
import Logo from './Logo';

const StyledLogoContainer = styled.div`
  grid-area: logoContainer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  gap: 0.5em;
`;

const LogoHeader = styled.h3`
  font-weight: 600;
  font-size: 1.28rem;
  letter-spacing: 0.27px;
`;

const LogoContainer = () => {
  return (
    <StyledLogoContainer>
      <Logo />
      <LogoHeader>So Yummy</LogoHeader>
    </StyledLogoContainer>
  );
};

export default LogoContainer;
