import styled from 'styled-components';

const SectionHeading = styled.h2<{ type?: 'primary' | 'secondary' }>`
  color: var(--color-black-2);
  color: ${({ type }) =>
    type === 'primary' ? 'var(--color-black-2)' : 'var(--color-gray-3)'};
  font-size: ${({ type }) => (type === 'primary' ? '2rem' : '1.71rem')};
  font-weight: ${({ type }) => (type === 'primary' ? 600 : 500)};
  letter-spacing: -0.56px;

  @media screen and (min-width: 768px) {
    font-size: ${({ type }) => (type === 'primary' ? '2.28rem' : '1.71rem')};
    letter-spacing: -0.64px;
  }

  @media screen and (min-width: 1440px) {
    font-size: ${({ type }) => (type === 'primary' ? '3.14rem' : '1.71rem')};
    letter-spacing: -0.88px;
  }
`;

SectionHeading.defaultProps = {
  type: 'primary',
};

export default SectionHeading;
