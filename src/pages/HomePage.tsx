import styled from 'styled-components';
import HeroSection from '../components/ui/HeroSection';
import CategoriesSection from '../components/ui/HomePageCategoriesSection';
import PageContainer from '../components/common/PageContainer';
import spinach from '../assets/images/spinach-hero.png';
import spinachDesktop from '../assets/images/spinach-hero-desktop.png';

const StyledHomePage = styled.div`
  display: grid;
  justify-content: center;

  &::before {
    --bg: url(${spinach});

    position: absolute;
    content: '';
    top: 0;
    right: 0;
    width: 100vw;
    height: 100%;
    background: var(--bg) no-repeat;
    background-position: center right;

    @media screen and (min-width: 768px) {
      background-position: right -150px;
    }

    @media screen and (min-width: 1440px) {
      --bg: url(${spinachDesktop});

      background-position: right 10px;
    }
  }
`;

const HomePage = () => {
  return (
    <PageContainer>
      <StyledHomePage>
        <HeroSection />
        <CategoriesSection />
      </StyledHomePage>
    </PageContainer>
  );
};

export default HomePage;
