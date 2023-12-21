import OwnRecipeItem from './OwnRecipeItem';

type Props = {
  recipes: OwnRecipePreview[];
};

const OwnRecipeList = ({ recipes }: Props) => {
  // TODO - typings

  return (
    <ul>
      {recipes.map((recipe) => (
        <OwnRecipeItem key={recipe.id} recipe={recipe} />
      ))}
    </ul>
  );
};

export default OwnRecipeList;
