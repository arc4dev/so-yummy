import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import spinach from '../../assets/images/spinach.png';

import Header from '../ui/Header';
import Footer from '../ui/Footer';

const Main = styled.main`
  z-index: 1;
  background: url(${spinach}) bottom -550px left no-repeat;
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
