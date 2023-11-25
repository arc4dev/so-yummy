import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaArrowRight } from 'react-icons/fa6';

const Home = styled.div`
  margin: 0 auto;
`;

const HeroSection = styled.section`
  padding: 0 26px;
`;

const HomeImage = styled.img`
  width: 320px;
  margin-bottom: 24px;
`;

const HomeHeader = styled.h1`
  text-align: center;
  font-size: 4.3rem;
  margin-bottom: 14px;
  font-weight: 400;
  line-height: 60px;
  letter-spacing: -0.3px;
`;

const HomeDescription = styled.p`
  text-align: center;
  margin-bottom: 44px;
  line-height: 1.28;
  letter-spacing: -0.28px;
`;

const HomePage = () => {
  return (
    <Home>
      <HeroSection>
        <HomeHeader>
          <span style={{ color: 'var(--color-action)' }}>So</span>Yummy
        </HomeHeader>

        <HomeDescription>
          "What to cook?" is not only a recipe app, it is, in fact, your
          cookbook. You can add your own recipes to save them for the future.
        </HomeDescription>

        <HomeImage src="../../public/heroImage.png" alt="" />

        {/* <div>
          <input type="text" />
          <button>Search</button>
        </div> */}

        {/* <div>
          <p>
            <span>Delicious and healthy</span> way to enjoy a variety of fresh
            ingredients in one satisfying meal
          </p>
          <Link to="recipes/all">
            See recipes <FaArrowRight />
          </Link>
        </div> */}
      </HeroSection>

      <section></section>
    </Home>
  );
};

export default HomePage;
