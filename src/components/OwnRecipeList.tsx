import OwnRecipeItem from './OwnRecipeItem';

type Props = {
  recipes: OwnRecipePreview[];
};

const OwnRecipeList = ({ recipes }: Props) => {
  return (
    <ul>
      {recipes?.map((recipe) => (
        <OwnRecipeItem key={recipe._id} recipe={recipe} />
      ))}
    </ul>
  );
};

export default OwnRecipeList;
