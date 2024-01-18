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
  variant?: OwnRecipeListVariant;
  page: 'favourites' | 'own';
};

const OwnRecipeList = ({ recipes, page, variant = 'primary' }: Props) => {
  return (
    <StyledOwnRecipesList>
      {!recipes.length ? (
        <ErrorComponent>You don't have any recipes yet!</ErrorComponent>
      ) : (
        recipes?.map((recipe) => (
          <OwnRecipeItem
            variant={variant}
            key={recipe._id}
            recipe={recipe}
            page={page}
          />
        ))
      )}
    </StyledOwnRecipesList>
  );
};

export default OwnRecipeList;
