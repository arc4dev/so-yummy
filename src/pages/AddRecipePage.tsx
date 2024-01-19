import PageContainer from '../components/common/PageContainer';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import styled from 'styled-components';
import cameraFrame from '../assets/camera-frame.svg';
import ButtonIcon from '../components/common/ButtonIcon';
import PopularRecipes from '../components/common/PopularRecipes';
import SocialLinks from '../components/common/SocialLinks';
import useBreakpoints from '../hooks/useBreakpoints';
import { useState } from 'react';
import IngredientFormItem from '../components/recipes/IngredientFormItem';
import SmallSelect from '../components/recipes/CategorySelect';

const StyledAddRecipePage = styled.div`
  display: grid;
  gap: 4.5rem;

  @media screen and (min-width: 1440px) {
    grid-template-columns: 2fr 1fr;
    gap: 7rem;
  }
`;

const RecipeInfoContainer = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  gap: 2.1rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: auto 1fr;
  }
`;

const AddRecipeForm = styled.form`
  margin-top: 4.5rem;
  display: grid;
  gap: 4.5rem;
`;

const FileInputWrapper = styled.div`
  width: 279px;
  height: 268px;
  background-color: var(--color-action);
  position: relative;
  border-radius: 8px;
`;

const FileInput = styled.input`
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const CameraImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

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

const IngredientsFormList = styled.ul`
  display: grid;
  gap: 1.5rem;
`;

const InputContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 1.71rem;
`;

export const FormInputWrapper = styled.div`
  position: relative;
`;

export const FormInputOption = styled.div<{ $type: 'select' | 'addon' }>`
  display: flex;
  font-size: 0.86rem;
  gap: 0.9rem;
  height: 100%;
  justify-content: right;
  align-items: center;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;

  ${({ $type }) => $type === 'addon' && 'padding-right: 1.28rem;'}
  ${({ $type }) => $type === 'select' && 'width: 100%;'}
`;

export const FormInputOptionText = styled.span`
  font-size: 0.85rem;
`;

const IngredientsAddingContainer = styled.div`
  display: grid;
  gap: 1.8rem;
`;

const IngredientsHeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IngredientsButtonGroup = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.9rem;
  border: 1px solid var(--color-gray-4);
  border-radius: 1rem;
  padding: 0.15rem 0.7rem;
`;

const RecipePreparationContainer = styled.div`
  display: grid;
  gap: 1.8rem;
`;

const FormTextarea = styled.textarea`
  background-color: hsla(0, 0%, 85%, 0.2);
  border-radius: 0.5rem;
  padding: 1.14rem 1.28rem;
  line-height: 1.5;
  letter-spacing: -0.28px;
  font-weight: 300;
  outline: transparent;
  border: transparent;
  width: 100%;
  height: 100%;
  max-width: 500px;
`;

const FollowUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start !important;
`;

const Aside = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.5rem;

  @media screen and (min-width: 1440px) {
    margin-top: 8.9rem;
  }
`;

const SelectContainer = styled.div`
  position: absolute;
  top: 0;
  right: 5px;
  width: 120px;
`;
const TextLabel = styled.label`
  position: relative;
  display: block;
  width: 343px;
  color: #878787;
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
`;

const AddRecipePage = () => {
  const { isDesktop } = useBreakpoints();

  const [ingredients, setIngredients] = useState<
    { ingredient: string; ingredientMeasure: string }[]
  >([]);

  const handleRemoveIngredient = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    i: number
  ) => {
    e.preventDefault();

    setIngredients(ingredients.filter((_, index) => index !== i));
  };

  return (
    <PageContainer>
      <StyledAddRecipePage>
        <div>
          <SectionHeading>Add recipe</SectionHeading>

          <AddRecipeForm>
            <RecipeInfoContainer>
              <FileInputWrapper>
                <FileInput type="file" />
                <CameraImage src={cameraFrame} alt="Camera frame" />
              </FileInputWrapper>

              <InputContainer>
                <FormInputWrapper>
                  <FormInput type="text" placeholder="Enter item title" />
                </FormInputWrapper>

                <FormInputWrapper>
                  <FormInput type="text" placeholder="Enter about recipe" />
                </FormInputWrapper>

                <TextLabel>
                  Category
                  <SelectContainer>
                    <SmallSelect type="category" />
                  </SelectContainer>
                </TextLabel>

                <TextLabel>
                  Cooking time
                  <SelectContainer>
                    <SmallSelect type="cookingTime" />
                  </SelectContainer>
                </TextLabel>
              </InputContainer>
            </RecipeInfoContainer>

            <IngredientsAddingContainer>
              <IngredientsHeadingWrapper>
                <SectionHeading type="secondary">Ingredients</SectionHeading>

                <IngredientsButtonGroup>
                  <ButtonIcon
                    variant="minus"
                    onClick={(e) =>
                      handleRemoveIngredient(e, ingredients.length - 1)
                    }
                  />
                  <span>{ingredients.length}</span>
                  <ButtonIcon
                    variant="plus"
                    onClick={(e) => {
                      e.preventDefault();

                      setIngredients([
                        ...ingredients,
                        { ingredient: '', ingredientMeasure: '' },
                      ]);
                    }}
                  />
                </IngredientsButtonGroup>
              </IngredientsHeadingWrapper>

              <IngredientsFormList>
                {ingredients.length === 0 && <p>No ingredients added!</p>}
                {ingredients.map((ingredient, i) => (
                  <IngredientFormItem
                    key={i}
                    ingredient={ingredient}
                    onClick={(e) => handleRemoveIngredient(e, i)}
                  />
                ))}
              </IngredientsFormList>
            </IngredientsAddingContainer>

            <RecipePreparationContainer>
              <SectionHeading type="secondary">
                Recipe preparation
              </SectionHeading>

              <FormTextarea name="instructions" cols={50} rows={7} />

              <Button variant="skew" btnColor="black">
                Add
              </Button>
            </RecipePreparationContainer>
          </AddRecipeForm>
        </div>

        <Aside>
          {isDesktop && (
            <FollowUsContainer>
              <SectionHeading type="secondary">Follow us</SectionHeading>
              <SocialLinks />
            </FollowUsContainer>
          )}

          <PopularRecipes />
        </Aside>
      </StyledAddRecipePage>
    </PageContainer>
  );
};

export default AddRecipePage;
