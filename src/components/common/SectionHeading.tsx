import styled from 'styled-components';

const SectionHeading = styled.h2`
  color: var(--color-black-2);
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: -0.56px;

  @media screen and (min-width: 768px) {
    font-size: 2.28rem;
    letter-spacing: -0.64px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 3.14rem;
    letter-spacing: -0.88px;
  }
`;

export default SectionHeading;
