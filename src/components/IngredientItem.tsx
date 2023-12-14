import styled from 'styled-components';

const StyledIngredientItem = styled.li`
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  background-color: var(--color-action-light);
  padding: 0.85rem 1rem;
  padding-right: 2rem;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    padding: 1rem 3rem;
    padding-right: 5.5rem;
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

const StyledCheckbox = styled.input``;

type Props = {
  name: string;
  measure: string;
};

function IngredientItem({ name, measure }: Props) {
  return (
    <StyledIngredientItem>
      <IngredientNameWrapper>
        <IngredientImage
          src={`https://www.themealdb.com/images/ingredients/${name}.png`}
          alt={name}
        />
        <IngredientName>{name}</IngredientName>
      </IngredientNameWrapper>

      <IngredientMeasure>{measure}</IngredientMeasure>
      <StyledCheckbox type="checkbox" />
    </StyledIngredientItem>
  );
}

export default IngredientItem;
