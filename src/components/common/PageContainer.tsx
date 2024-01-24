import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

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
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <StyledPageContainer>{children}</StyledPageContainer>;
};

export default PageContainer;
