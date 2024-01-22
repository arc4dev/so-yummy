import styled from 'styled-components';

import useShoppingCart from '../../hooks/useShoppingCart';
import { useState } from 'react';
import ButtonIcon from '../common/ButtonIcon';

const StyledIngredientItem = styled.li<{ $type: IngredientTableVariant }>`
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  padding: 0.85rem 1rem;
  padding-right: 2rem;
  border-radius: 8px;

  background-color: ${({ $type }) =>
    $type === 'recipe' ? 'var(--color-action-light)' : 'var(--color-white-2)'};
  border-bottom: ${({ $type }) =>
    $type === 'shopping-list' && '1px solid var(--color-line)'};

  @media screen and (min-width: 768px) {
    padding: 1rem 3rem;
    padding-right: 5rem;
  }
`;

const IngredientNameWrapper = styled.div`
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
    column-gap: 1rem;
  }
`;

const IngredientImage = styled.img`
  width: 57px;

  @media screen and (min-width: 768px) {
    width: 112px;
  }

  @media screen and (min-width: 1440px) {
    width: 128px;
  }
`;

const IngredientName = styled.p`
  color: var(--color-gray-3);
  font-size: 0.85rem;
  font-weight: 500;
  line-height: 1.16;
  letter-spacing: -0.24px;
  padding-left: 0.8rem;

  @media screen and (min-width: 768px) {
    font-size: 1.71rem;
    line-height: 1;
    padding-left: 2rem;
  }
`;

const IngredientMeasure = styled.p`
  color: var(--color-white-2);
  text-align: center;
  min-width: 2.2rem;
  background-color: var(--color-action);
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 500;
  line-height: 1.16;
  letter-spacing: -0.24px;
  padding: 0.4rem;
  margin-right: 1.5rem;

  @media screen and (min-width: 768px) {
    margin-right: 4.6rem;

    font-size: 1.28rem;
    line-height: 1;
  }

  @media screen and (min-width: 1440px) {
    margin-right: 8.5rem;
  }
`;

const StyledCheckbox = styled.input`
  appearance: none;
  -webkit-appearance: none;
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 0.35rem;
  border: 1px solid var(--color-secondary);
  border-radius: 6px;
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &:hover {
    border-color: var(--color-action);
  }

  &:checked {
    border-color: var(--color-action);

    &::before {
      transform: scale(1);
      opacity: 1;
    }
  }

  &::before {
    transition: all 100ms ease-in-out;
    --size: 1rem;

    content: '';
    width: var(--size);
    height: var(--size);
    transform: scale(0);
    clip-path: polygon(28% 38%, 41% 53%, 75% 24%, 86% 38%, 40% 78%, 15% 50%);
    transform: scale(0);
    opacity: 0;
    background-color: var(--color-action);

    @media screen and (min-width: 768px) {
      --size: 1.4rem;
    }
  }
`;

type Props = {
  name: string;
  measure: string;
  id: string;
  type: IngredientTableVariant;
};

function IngredientItem({ name, measure, id, type }: Props) {
  const { addIngredientMutate, removeIngredientMutate, isPending } =
    useShoppingCart();
  const [isChecked, setIsChecked] = useState(false);

  const handleRemoveIngredient = async (id: string) =>
    await removeIngredientMutate(id);

  const handleCheckboxChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string,
    ingredientMeasure: string
  ) => {
    try {
      if (e.currentTarget.checked) {
        setIsChecked(true);
        await addIngredientMutate({
          ingredientId: id,
          ingredientMeasure,
        });
      } else {
        setIsChecked(false);
        await removeIngredientMutate(id);
      }
    } catch (err) {
      setIsChecked((prev) => !prev);
    }
  };

  return (
    <StyledIngredientItem $type={type}>
      <IngredientNameWrapper>
        <IngredientImage
          src={`https://www.themealdb.com/images/ingredients/${name}.png`}
          alt={name}
        />
        <IngredientName>{name}</IngredientName>
      </IngredientNameWrapper>

      <IngredientMeasure>{measure}</IngredientMeasure>
      {type === 'recipe' ? (
        <StyledCheckbox
          onChange={(e) => handleCheckboxChange(e, id, measure)}
          checked={isChecked}
          disabled={isPending}
          type="checkbox"
        />
      ) : (
        <ButtonIcon
          variant="x"
          onClick={() => handleRemoveIngredient(id)}
          disabled={isPending}
        />
      )}
    </StyledIngredientItem>
  );
}

export default IngredientItem;
