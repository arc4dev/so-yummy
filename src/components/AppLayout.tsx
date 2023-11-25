import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';
import PageContainer from './PageContainer';

const Main = styled.main`
  background: url('/spinach.png');
  background-repeat: no-repeat;
`;

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`;

const AppLayout = () => {
  return (
    <StyledAppLayout>
      <Header />

      <Main>
        <PageContainer>
          <Outlet />
        </PageContainer>
      </Main>

      <Footer />
    </StyledAppLayout>
  );
};

export default AppLayout;
