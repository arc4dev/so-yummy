import ErrorComponent from '../common/ErrorComponent';
import OwnRecipeItem from './OwnRecipeItem';
import styled from 'styled-components';

const StyledOwnRecipesList = styled.ul`
  display: grid;
  gap: 1.28rem;
  margin-top: 2rem;

  @media screen and (min-width: 768px) {
    gap: 2.8rem;
  }

  @media screen and (min-width: 1440px) {
    gap: 3.5rem;
  }
`;

type Props = {
  recipes: OwnRecipePreview[];
};

const OwnRecipeList = ({ recipes }: Props) => {
  return (
    <StyledOwnRecipesList>
      {!recipes.length ? (
        <ErrorComponent>You don't have any recipes yet!</ErrorComponent>
      ) : (
        recipes?.map((recipe) => (
          <OwnRecipeItem key={recipe._id} recipe={recipe} />
        ))
      )}
    </StyledOwnRecipesList>
  );
};

export default OwnRecipeList;
