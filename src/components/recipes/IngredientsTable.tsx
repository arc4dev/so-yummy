import styled from 'styled-components';

import IngredientItem from './IngredientItem';
import ErrorComponent from '../common/ErrorComponent';

const IngredientTable = styled.div`
  background-color: var(--color-action);
  padding: 0.85rem 1rem;
  border-radius: 8px;
  margin-bottom: 1.6rem;
  display: grid;
  grid-template-columns: 1fr auto auto;

  @media screen and (min-width: 768px) {
    padding: 1rem 3rem;
  }
  & > span {
    color: var(--color-white-2);
    font-size: 0.71rem;

    &:nth-child(2) {
      padding-right: 1.2rem;

      @media screen and (min-width: 768px) {
        padding-right: 2.7rem;
      }

      @media screen and (min-width: 1440px) {
        padding-right: 6.8rem;
      }
    }

    &:nth-child(2),
    &:nth-child(3) {
      justify-self: end;
    }

    @media screen and (min-width: 768px) {
      font-size: 1.28rem;
    }
  }
`;

const IngredientsList = styled.ul`
  display: grid;
  gap: 1rem;

  @media screen and (min-width: 768px) {
    gap: 1.7rem;
  }
`;

type Props = {
  ingredients: IngredientItem[];
  type: IngredientTableVariant;
};

const IngredientsTable = ({ ingredients, type }: Props) => {
  return (
    <div>
      <IngredientTable>
        <span>{type === 'recipe' ? 'Ingredients' : 'Product'}</span>
        <span>Number</span>
        <span>{type === 'recipe' ? 'Add to list' : 'Remove'}</span>
      </IngredientTable>

      {!ingredients.length ? (
        <ErrorComponent style={{ paddingTop: '1rem' }}>
          You don't have any products yet!
        </ErrorComponent>
      ) : (
        <IngredientsList>
          {ingredients.map((item, i) => (
            <IngredientItem
              key={`Ingredient ${i}-${item.ingredient._id}`}
              id={item.ingredient._id}
              name={item.ingredient.name}
              measure={item.ingredientMeasure}
              type={type}
            />
          ))}
        </IngredientsList>
      )}
    </div>
  );
};

export default IngredientsTable;
