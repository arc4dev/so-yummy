import styled from 'styled-components';
import useScrollToTheTop from '../../hooks/useScrollToTheTop';

const StyledPageContainer = styled.div`
  height: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 50px 16px;

  @media screen and (min-width: 768px) {
    padding: 72px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 100px 100px;
  }
`;

type Props = {
  children: React.ReactNode;
};

const PageContainer = ({ children }: Props) => {
  useScrollToTheTop();

  return <StyledPageContainer>{children}</StyledPageContainer>;
};

export default PageContainer;
