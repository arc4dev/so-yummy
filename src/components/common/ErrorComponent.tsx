import styled from 'styled-components';
import errorImage from '../../assets/images/error-image.png';
import errorImageTablet from '../../assets/images/error-image-tablet.png';

const StyledErrorComponent = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 6rem;
`;

const ErrorImage = styled.div`
  --bg: url(${errorImage});

  width: 208px;
  height: 133px;
  margin-bottom: 1.8rem;
  background: var(--bg) center/contain no-repeat;

  @media screen and (min-width: 768px) {
    --bg: url(${errorImageTablet});
    width: 350px;
    height: 225px;
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
      <ErrorImage />
      <ErrorText>{children}</ErrorText>
    </StyledErrorComponent>
  );
};

export default ErrorComponent;
