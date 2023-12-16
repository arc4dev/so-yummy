import styled from 'styled-components';
import HeroSection from '../components/HeroSection';
import CategoriesSection from '../components/HomePageCategoriesSection';
import PageContainer from '../components/PageContainer';

const StyledHomePage = styled.div``;

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
