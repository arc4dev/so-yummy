import styled from 'styled-components';
import ButtonIcon from '../common/ButtonIcon';
import IngredientSelect from './IngredientSelect';
import MeasureSelect from './MeasureSelect';

const StyledIngredientFormItem = styled.li`
  display: grid;
  grid-template-columns: 3.5fr auto 0.2fr;
  gap: 1rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: 3fr auto 1fr;
  }
`;

type Props = {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const IngredientFormItem = ({ onClick }: Props) => {
  return (
    <StyledIngredientFormItem>
      <IngredientSelect />

      <MeasureSelect />

      <ButtonIcon
        variant="x"
        style={{ justifySelf: 'flex-end' }}
        onClick={onClick}
      />
    </StyledIngredientFormItem>
  );
};

export default IngredientFormItem;
