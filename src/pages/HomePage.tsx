import styled from 'styled-components';
import HeroSection from '../components/ui/HeroSection';
import CategoriesSection from '../components/ui/HomePageCategoriesSection';
import PageContainer from '../components/common/PageContainer';

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
