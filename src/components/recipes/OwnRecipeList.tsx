import ErrorComponent from '../common/ErrorComponent';
import OwnRecipeItem from './OwnRecipeItem';

type Props = {
  recipes: OwnRecipePreview[];
};

const OwnRecipeList = ({ recipes }: Props) => {
  return (
    <ul>
      {!recipes.length ? (
        <ErrorComponent>You don't have any recipes yet!</ErrorComponent>
      ) : (
        recipes?.map((recipe) => (
          <OwnRecipeItem key={recipe._id} recipe={recipe} />
        ))
      )}
    </ul>
  );
};

export default OwnRecipeList;
