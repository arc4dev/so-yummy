import styled from 'styled-components';

const RecipesList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 32px;

  @media screen and (min-width: 1440px) {
    gap: 14px;
  }
`;

export default RecipesList;
