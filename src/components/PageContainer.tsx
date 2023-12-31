import styled from 'styled-components';

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 50px 16px;

  @media screen and (min-width: 768px) {
    padding: 72px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 100px 100px;
  }
`;

export default Container;
