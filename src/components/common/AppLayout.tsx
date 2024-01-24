import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import spinach from '../../assets/images/spinach-left-bottom.png';
import spinachTablet from '../../assets/images/spinach-left-bottom-tablet.png';
import spinachDesktop from '../../assets/images/spinach-left-bottom-desktop.png';

import Header from '../ui/Header';
import Footer from '../ui/Footer';

const Main = styled.main`
  --bg: url(${spinach});

  z-index: 1;
  min-height: 100dvh;
  background: var(--bg) no-repeat;
  background-position: bottom -230px left;

  @media screen and (min-width: 768px) {
    --bg: url(${spinachTablet});
    background-position: bottom -370px left;
  }

  @media screen and (min-width: 1440px) {
    --bg: url(${spinachDesktop});
    background-position: bottom -490px left;
  }
`;

const StyledAppLayout = styled.div`
  /* display: grid; */
  /* grid-template-rows: auto 1fr auto; */
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
