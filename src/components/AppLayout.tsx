import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';

const Main = styled.main`
  z-index: 1;
  background: url('./spinach.png') bottom -550px left no-repeat;
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
        <Outlet />
      </Main>

      <Footer />
    </StyledAppLayout>
  );
};

export default AppLayout;
