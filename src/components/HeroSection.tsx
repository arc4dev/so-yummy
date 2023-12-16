import { FaArrowRight } from 'react-icons/fa6';
import SearchInput from '../components/SearchInput';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import useBreakpoints from '../hooks/useBreakpoints';

const StyledRecipesLink = styled(Link)`
  justify-self: end;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  font-size: 0.7rem;
  font-weight: 300;
  line-height: 1.2;
  letter-spacing: 0.2px;
`;

const StyledHeroSection = styled.section`
  position: relative;
  padding: 0 26px;
  padding-bottom: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-bottom: 140px;

  @media screen and (min-width: 768px) {
    margin-bottom: 170px;
    flex-direction: row;
    padding: 0;
    justify-content: space-between;
  }
`;

const HomeImageContainer = styled.div`
  position: relative;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: flex-end;
    flex: 1;
  }
`;

const HomeImage = styled.img`
  width: 320px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    width: 378px;
  }

  @media screen and (min-width: 1440px) {
    width: 578px;
  }
`;

const HomeImageDescriptionBox = styled.div`
  display: grid;
  grid-gap: 8px;
  position: absolute;
  top: 32%;
  right: -0.5%;
  width: 225px;
  padding: 8px;
  border-radius: 8px;
  background-color: var(--color-white-2);

  color: var(--color-gray-3);
  font-size: 0.86rem;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.24px;

  @media screen and (min-width: 768px) {
    font-size: 1rem;
    padding: 12px;
    line-height: 1.28;
    width: 260px;
    top: 57%;
    right: 10%;
  }

  @media screen and (min-width: 1440px) {
    padding: 16px;
    line-height: 1.42;
    width: 290px;
    top: 57%;
    right: -10%;
  }
`;

const HeroHeader = styled.h1`
  font-size: 4.3rem;
  margin-bottom: 14px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: -0.3px;

  @media screen and (min-width: 768px) {
    font-size: 5.15rem;
  }

  @media screen and (min-width: 1440px) {
    font-size: 7.2rem;
  }
`;

const HeroDescription = styled.p`
  text-align: center;
  width: 248px;
  margin-bottom: 44px;
  line-height: 1.28;
  font-weight: 300;
  letter-spacing: -0.28px;

  @media screen and (min-width: 768px) {
    width: 100%;
    text-align: start;
  }

  @media screen and (min-width: 1440px) {
    font-size: 1.3rem;
    line-height: 1.33;
  }
`;

const HeroSection = () => {
  const navigate = useNavigate();

  const { isMobile, isTablet } = useBreakpoints();

  return (
    <StyledHeroSection>
      {isMobile && (
        <>
          <HeroHeader>
            <span style={{ color: 'var(--color-action)' }}>So</span>Yummy
          </HeroHeader>

          <HeroDescription>
            "What to cook?" is not only a recipe app, it is, in fact, your
            cookbook. You can add your own recipes to save them for the future.
          </HeroDescription>

          <HomeImageContainer>
            <HomeImage src="../../public/heroImage.png" alt="" />
            <HomeImageDescriptionBox>
              <p>
                <span style={{ color: 'var(--color-action)' }}>
                  Delicious and healthy
                </span>{' '}
                way to enjoy a variety of fresh ingredients in one satisfying
                meal
              </p>
              <StyledRecipesLink to="/recipes/all">
                See recipes <FaArrowRight />
              </StyledRecipesLink>
            </HomeImageDescriptionBox>
          </HomeImageContainer>

          <SearchInput
            btnColor="primary"
            type="search"
            onSubmit={(e) => {
              e.preventDefault();

              const formData = new FormData(e.currentTarget);
              const q = formData.get('query') as string;

              navigate(`/search?q=${q}`);
            }}
          />
        </>
      )}

      {isTablet && (
        <>
          <div style={{ flex: '1' }}>
            <HeroHeader>
              <span style={{ color: 'var(--color-action)' }}>So</span>Yummy
            </HeroHeader>

            <HeroDescription>
              "What to cook?" is not only a recipe app, it is, in fact, your
              cookbook. You can add your own recipes to save them for the
              future.
            </HeroDescription>

            <SearchInput
              type="search"
              btnColor="primary"
              onSubmit={(e) => {
                e.preventDefault();

                const formData = new FormData(e.currentTarget);
                const q = formData.get('query') as string;

                navigate(`/search?q=${q}`);
              }}
            />
          </div>

          <HomeImageContainer>
            <HomeImage src="../../public/heroImage.png" alt="" />
            <HomeImageDescriptionBox>
              <p>
                <span style={{ color: 'var(--color-action)' }}>
                  Delicious and healthy
                </span>{' '}
                way to enjoy a variety of fresh ingredients in one satisfying
                meal
              </p>
              <StyledRecipesLink to="/recipes/all">
                See recipes <FaArrowRight />
              </StyledRecipesLink>
            </HomeImageDescriptionBox>
          </HomeImageContainer>
        </>
      )}
    </StyledHeroSection>
  );
};

export default HeroSection;
