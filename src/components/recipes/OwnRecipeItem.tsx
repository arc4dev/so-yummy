import { FaTrash } from 'react-icons/fa';
import styled from 'styled-components';
import Button from '../common/Button';

const StyledOwnRecipeItem = styled.li``;

type Props = {
  recipe: OwnRecipePreview;
};

const OwnRecipeItem = ({ recipe }: Props) => {
  const { _id, strMeal, strDescription, strMealThumb, cookingTime } = recipe;

  return (
    <StyledOwnRecipeItem>
      <img src={strMealThumb} alt={`Image of ${strMeal}`} />
      <h3>{strMeal}</h3>
      <button>
        <FaTrash />
      </button>
      <p>{strDescription}</p>
      <span>{cookingTime}</span>
      <Button size="primary" to={`/recipes/${_id}?p=true`}>
        See recipe
      </Button>
    </StyledOwnRecipeItem>
  );
};

export default OwnRecipeItem;
