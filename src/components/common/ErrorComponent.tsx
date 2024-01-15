import styled from 'styled-components';

const StyledErrorComponent = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
`;

const ErrorImage = styled.img`
  width: 208px;
  margin-bottom: 1.8rem;

  @media screen and (min-width: 768px) {
    width: 350px;
  }
`;

const ErrorText = styled.p`
  text-align: center;
  opacity: 0.5;
  letter-spacing: -0.28px;

  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

type Props = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

const ErrorComponent = ({ children, style }: Props) => {
  return (
    <StyledErrorComponent style={style}>
      <ErrorImage src="/searchTry.png" alt="Vegetables cart" />
      <ErrorText>{children}</ErrorText>
    </StyledErrorComponent>
  );
};

export default ErrorComponent;
