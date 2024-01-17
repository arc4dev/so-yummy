import styled from 'styled-components';
import PageContainer from '../components/common/PageContainer';
import errorFrame from '../assets/error-frame.svg';

const ErrorImage = styled.img``;

const NotFoundPage = () => {
  return (
    <PageContainer>
      <ErrorImage src={errorFrame} alt="Error image" />
    </PageContainer>
  );
};

export default NotFoundPage;
