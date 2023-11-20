import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`;

const AppLayout = () => {
  return (
    <StyledAppLayout>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </StyledAppLayout>
  );
};

export default AppLayout;
