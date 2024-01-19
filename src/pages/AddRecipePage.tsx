import PageContainer from '../components/common/PageContainer';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import styled from 'styled-components';
import cameraFrame from '../assets/camera-frame.svg';
import ButtonIcon from '../components/common/ButtonIcon';
import PopularRecipes from '../components/common/PopularRecipes';
import SocialLinks from '../components/common/SocialLinks';
import useBreakpoints from '../hooks/useBreakpoints';

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

const InputContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 1.71rem;
`;

const FormInputWrapper = styled.div`
  position: relative;
`;

const FormInputOption = styled.div<{ $type: 'select' | 'addon' }>`
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

const FormInputOptionText = styled.span`
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

const IngredientFormItem = styled.li`
  display: grid;
  grid-template-columns: 3.5fr auto 0.2fr;
  gap: 1rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: 3fr auto 1fr;
  }
`;

const IngredientsFormList = styled.ul``;

const IngredientFormInput = styled(FormInput)`
  background-color: hsla(0, 0%, 85%, 0.2);
  padding: 1.14rem 1.28rem;
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

const AddRecipePage = () => {
  const { isDesktop } = useBreakpoints();

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

                <FormInputWrapper>
                  <FormInput type="text" placeholder="Category" />

                  <FormInputOption $type="select">
                    <FormInputOptionText>Breakfast</FormInputOptionText>
                    <ButtonIcon variant="expand" />
                  </FormInputOption>
                </FormInputWrapper>

                <FormInputWrapper>
                  <FormInput type="text" placeholder="Cooking time" />

                  <FormInputOption $type="select">
                    <FormInputOptionText>15 min</FormInputOptionText>
                    <ButtonIcon variant="expand" />
                  </FormInputOption>
                </FormInputWrapper>
              </InputContainer>
            </RecipeInfoContainer>

            <IngredientsAddingContainer>
              <IngredientsHeadingWrapper>
                <SectionHeading type="secondary">Ingredients</SectionHeading>

                <IngredientsButtonGroup>
                  <ButtonIcon variant="minus" />
                  <span>3</span>
                  <ButtonIcon variant="plus" />
                </IngredientsButtonGroup>
              </IngredientsHeadingWrapper>

              <IngredientsFormList>
                <IngredientFormItem>
                  <FormInputWrapper>
                    <IngredientFormInput type="text" placeholder="Salt" />

                    <FormInputOption $type="addon">
                      <ButtonIcon variant="expand" />
                    </FormInputOption>
                  </FormInputWrapper>

                  <FormInputWrapper style={{ width: '110px' }}>
                    <IngredientFormInput type="number" placeholder="0" />

                    <FormInputOption $type="addon">
                      <FormInputOptionText>tbs</FormInputOptionText>
                      <ButtonIcon variant="expand" />
                    </FormInputOption>
                  </FormInputWrapper>

                  <ButtonIcon variant="x" style={{ justifySelf: 'flex-end' }} />
                </IngredientFormItem>
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
