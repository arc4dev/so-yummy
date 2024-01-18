import { FaXmark } from 'react-icons/fa6';
import PageContainer from '../components/common/PageContainer';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import { FaAngleDown } from 'react-icons/fa';
import styled from 'styled-components';
import cameraFrame from '../assets/camera-frame.svg';

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

          <div>
            <div>
              <input type="text" placeholder="Enter item title" />
            </div>

            <div>
              <input type="text" placeholder="Enter about recipe" />
            </div>

            <div>
              <input type="text" placeholder="Category" />
              <button>
                <FaAngleDown />
              </button>
            </div>

            <div>
              <input type="text" placeholder="Cooking time" />
              <button>
                <FaAngleDown />
              </button>
            </div>
          </div>
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
                <button>
                  <FaAngleDown />
                </button>
              </div>

              <div>
                <input type="text" />
                <button>
                  <FaAngleDown />
                </button>
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
