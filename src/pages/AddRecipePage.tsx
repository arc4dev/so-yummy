import { FaXmark } from 'react-icons/fa6';
import PageContainer from '../components/common/PageContainer';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import { FaAngleDown } from 'react-icons/fa6';
import styled from 'styled-components';
import cameraFrame from '../assets/camera-frame.svg';
import ButtonExpand from '../components/common/ButtonExpand';

const RecipeInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;

const AddRecipeForm = styled.form`
  margin-top: 4.5rem;
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

const FormInputOption = styled.div`
  display: flex;
  font-size: 12px;
  gap: 13px;
  height: 100%;
  justify-content: right;
  padding-top: 3px;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  cursor: pointer;
`;

const FormInputOptionText = styled.span`
  font-size: 0.85rem;
`;

const AddRecipePage = () => {
  return (
    <PageContainer>
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

              <FormInputOption>
                <FormInputOptionText>Breakfast</FormInputOptionText>
                <ButtonExpand />
              </FormInputOption>
            </FormInputWrapper>

            <FormInputWrapper>
              <FormInput type="text" placeholder="Cooking time" />

              <FormInputOption>
                <FormInputOptionText>15 min</FormInputOptionText>
                <ButtonExpand />
              </FormInputOption>
            </FormInputWrapper>
          </InputContainer>
        </RecipeInfoContainer>
        <div>
          <div>
            <SectionHeading type="secondary">Ingredients</SectionHeading>

            <div>
              <button>-</button>
              <span>3</span>
              <button>+</button>
            </div>
          </div>

          <ul>
            <li>
              <div>
                <input type="text" />
                <ButtonExpand />
              </div>

              <div>
                <input type="text" />
                <ButtonExpand />
              </div>

              <button>
                <FaXmark />
              </button>
            </li>
          </ul>
        </div>
        <div>
          <SectionHeading type="secondary">Recipe preparation</SectionHeading>

          <textarea name="instructions" cols={50} rows={7} />

          <Button variant="skew" btnColor="black">
            Add
          </Button>
        </div>
      </AddRecipeForm>
    </PageContainer>
  );
};

export default AddRecipePage;
