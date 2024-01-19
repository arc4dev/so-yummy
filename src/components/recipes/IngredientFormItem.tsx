import styled from 'styled-components';
import ButtonIcon from '../common/ButtonIcon';
import {
  FormInputOption,
  FormInputOptionText,
  FormInputWrapper,
} from '../../pages/AddRecipePage';
import IngredientSelect from './IngredientSelect';

const FormInput = styled.input`
  background-color: inherit;
  border: transparent;
  border-bottom: 1px solid var(--color-line);
  font-size: 1rem;
  letter-spacing: -0.28px;
  line-height: 1.5;
  outline: transparent;
  padding-bottom: 1.3rem;
  font-weight: 300;
  width: 100%;

  &::placeholder {
    color: #878787;
  }
`;

const StyledIngredientFormItem = styled.li`
  display: grid;
  grid-template-columns: 3.5fr auto 0.2fr;
  gap: 1rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: 3fr auto 1fr;
  }
`;

const IngredientSelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

type Props = {
  ingredient: { ingredient: string; ingredientMeasure: string };
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const IngredientFormItem = ({ ingredient, onClick }: Props) => {
  return (
    <StyledIngredientFormItem>
      <IngredientSelect />

      <FormInputWrapper style={{ width: '110px' }}>
        {/* <IngredientFormInput type="number" placeholder="0" /> */}

        <FormInputOption $type="addon">
          <FormInputOptionText>tbs</FormInputOptionText>
          <ButtonIcon variant="expand" />
        </FormInputOption>
      </FormInputWrapper>

      <ButtonIcon
        variant="x"
        style={{ justifySelf: 'flex-end' }}
        onClick={onClick}
      />
    </StyledIngredientFormItem>
  );
};

export default IngredientFormItem;
