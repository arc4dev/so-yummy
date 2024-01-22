import styled from 'styled-components';
import PageContainer from '../components/common/PageContainer';
import errorFrame from '../assets/error-frame.svg';

const ErrorImage = styled.img`
  width: 259px;
  height: 170px;

  @media screen and (min-width: 768px) {
    width: 498px;
    height: 327px;
  }
`;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;

const ErrorHeader = styled.h3`
  font-size: 1.28rem;
  letter-spacing: -0.36px;
  line-height: 1.11;

  @media screen and (min-width: 768px) {
    font-size: 1.71rem;
  }
`;

const ErrorDescription = styled.p`
  letter-spacing: -0.28px;
  line-height: 1.28;
  text-align: center;
  opacity: 0.5;
  font-weight: 300;

  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const NotFoundPage = () => {
  return (
    <PageContainer>
      <ErrorContainer>
        <ErrorImage src={errorFrame} alt="Error image" />
        <ErrorHeader>We are sorry,</ErrorHeader>
        <ErrorDescription>
          but the page you were looking for can't be found...
        </ErrorDescription>
      </ErrorContainer>
    </PageContainer>
  );
};

export default NotFoundPage;
