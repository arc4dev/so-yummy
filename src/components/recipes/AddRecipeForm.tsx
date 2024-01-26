import styled from 'styled-components';
import Button from '../common/Button';
import SectionHeading from '../common/SectionHeading';
import ButtonIcon from '../common/ButtonIcon';
import SmallSelect from './SmallSelect';
import { useFieldArray, useForm } from 'react-hook-form';
import IngredientSelect from './IngredientSelect';
import MeasureSelect from './MeasureSelect';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FileInput from './FileInput';
import { transformErrorMessage } from '../../utils/transformErrorMessage';
import useOwnRecipes from '../../hooks/useOwnRecipes';
import { useNavigate } from 'react-router-dom';
import LoaderAction from '../common/LoaderAction';

export const ErrorMessage = styled.span`
  position: absolute;
  left: 0px;
  bottom: -20px;

  color: var(--color-wrong);
  font-size: 0.85rem;
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

  @media screen and (min-width: 768px) {
    font-size: 1.1rem;
  }
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

const RecipeInfoContainer = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  gap: 2.1rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: auto 1fr;
  }
`;

const StyledAddRecipeForm = styled.form`
  margin-top: 4.5rem;
  display: grid;
  gap: 4.5rem;
`;

const IngredientFormItem = styled.li`
  position: relative;
  display: grid;
  grid-template-columns: 3.5fr auto 0.2fr;
  gap: 1rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: 3fr auto 1fr;
  }
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

  @media screen and (min-width: 768px) {
    font-size: 1.1rem;
  }

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

const InputWrapper = styled.div`
  position: relative;
`;

const schema = yup.object({
  strMealThumb: yup.mixed().required(),
  strMeal: yup.string().min(3).max(30).required(),
  strDescription: yup.string().min(10).max(250).required(),
  category: yup.string().required(),
  cookingTime: yup.number().required(),
  ingredients: yup
    .array()
    .of(
      yup.object().shape({
        ingredient: yup.string().required(),
        ingredientMeasure: yup
          .string()
          .required()
          .test(
            'isValidIngredientMeasure',
            'Invalid ingredient measure format',
            (value) => {
              const regex = /^\d+\s*(g|kg|tbs|tsp|pcs|ml)$/;
              return regex.test(value);
            }
          ),
      })
    )
    .required(),
  strInstructions: yup.string().min(10).required(),
});

const AddRecipeForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<yup.InferType<typeof schema>>({
    mode: 'all',
    resolver: yupResolver(schema),
    defaultValues: {
      strMealThumb: undefined,
      strMeal: '',
      strDescription: '',
      category: '',
      cookingTime: undefined,
      ingredients: [],
      strInstructions: '',
    },
  });

  const navigate = useNavigate();
  const { addOwnRecipeMutate, isPending } = useOwnRecipes();

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'ingredients',
  });

  const onAddRecipe = async (data: yup.InferType<typeof schema>) => {
    try {
      const formData = new FormData();
      formData.append('image', data.strMealThumb as File);
      formData.append('strMeal', data.strMeal);
      formData.append('strDescription', data.strDescription);
      formData.append('strInstructions', data.strInstructions);
      formData.append('category', data.category);
      formData.append('cookingTime', String(data.cookingTime));

      data.ingredients.forEach((ingredient, index) => {
        formData.append(
          `ingredients[${index}][ingredient]`,
          ingredient.ingredient
        );
        formData.append(
          `ingredients[${index}][ingredientMeasure]`,
          ingredient.ingredientMeasure
        );
      });

      await addOwnRecipeMutate(formData);

      navigate('/recipes/all');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledAddRecipeForm onSubmit={handleSubmit(onAddRecipe)}>
      <RecipeInfoContainer>
        <FileInput name="strMealThumb" control={control} />

        <InputContainer>
          <InputWrapper>
            <FormInput
              type="text"
              placeholder="Enter item title"
              autoComplete="off"
              {...register('strMeal')}
            />
            {errors.strMeal && (
              <ErrorMessage>
                {transformErrorMessage(errors.strMeal.message)}
              </ErrorMessage>
            )}
          </InputWrapper>

          <InputWrapper>
            <FormInput
              type="text"
              placeholder="Enter about recipe"
              autoComplete="off"
              {...register('strDescription')}
            />
            {errors.strDescription && (
              <ErrorMessage>
                {transformErrorMessage(errors.strDescription.message)}
              </ErrorMessage>
            )}
          </InputWrapper>

          <TextLabel>
            Category
            <SelectContainer>
              <SmallSelect control={control} type="category" name="category" />
            </SelectContainer>
            {errors.category && (
              <ErrorMessage>
                {transformErrorMessage(errors.category.message)}
              </ErrorMessage>
            )}
          </TextLabel>

          <TextLabel>
            Cooking time
            <SelectContainer>
              <SmallSelect
                control={control}
                type="cookingTime"
                name="cookingTime"
              />
            </SelectContainer>
            {errors.cookingTime && (
              <ErrorMessage>
                {transformErrorMessage(errors.cookingTime.message)}
              </ErrorMessage>
            )}
          </TextLabel>
        </InputContainer>
      </RecipeInfoContainer>

      <IngredientsAddingContainer>
        <IngredientsHeadingWrapper>
          <SectionHeading type="secondary">Ingredients</SectionHeading>

          <IngredientsButtonGroup>
            <ButtonIcon
              variant="minus"
              type="button"
              onClick={() => remove(fields.length - 1)}
            />
            <span>{fields.length}</span>
            <ButtonIcon
              variant="plus"
              type="button"
              onClick={() => append({ ingredient: '', ingredientMeasure: '' })}
            />
          </IngredientsButtonGroup>
        </IngredientsHeadingWrapper>

        <IngredientsFormList>
          {fields.length === 0 && <p>No ingredients added!</p>}
          {fields.map((_, i) => (
            <IngredientFormItem key={i}>
              <IngredientSelect
                control={control}
                name={`ingredients.${i}.ingredient`}
              />

              <MeasureSelect
                control={control}
                name={`ingredients.${i}.ingredientMeasure`}
              />

              <ButtonIcon
                variant="x"
                type="button"
                style={{ justifySelf: 'flex-end' }}
                onClick={() => remove(i)}
              />
              {errors.ingredients && (
                <ErrorMessage>Fill out ingredient info</ErrorMessage>
              )}
            </IngredientFormItem>
          ))}
        </IngredientsFormList>
      </IngredientsAddingContainer>

      <RecipePreparationContainer>
        <SectionHeading type="secondary">Recipe preparation</SectionHeading>

        <InputWrapper>
          <FormTextarea
            cols={50}
            rows={7}
            {...register('strInstructions')}
            placeholder="Enter recipe preparation..."
          />
          {errors.strInstructions && (
            <ErrorMessage>
              {transformErrorMessage(errors.strInstructions.message)}
            </ErrorMessage>
          )}
        </InputWrapper>

        <Button
          variant="skew"
          btnColor="black"
          type="submit"
          disabled={!isValid || isPending}>
          {isPending ? <LoaderAction /> : 'Add recipe'}
        </Button>
      </RecipePreparationContainer>
    </StyledAddRecipeForm>
  );
};

export default AddRecipeForm;
