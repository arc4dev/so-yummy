import PageContainer from '../components/common/PageContainer';
import SectionHeading from '../components/common/SectionHeading';
import styled from 'styled-components';
import PopularRecipes from '../components/common/PopularRecipes';
import SocialLinks from '../components/common/SocialLinks';
import useBreakpoints from '../hooks/useBreakpoints';
import AddRecipeForm from '../components/recipes/AddRecipeForm';

const StyledAddRecipePage = styled.div`
  display: grid;
  gap: 4.5rem;

  @media screen and (min-width: 1440px) {
    grid-template-columns: 2fr 1fr;
    gap: 7rem;
  }
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

const FollowUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start !important;
`;

const Aside = styled.section`
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
        <section>
          <SectionHeading>Add recipe</SectionHeading>

          <AddRecipeForm />
        </section>

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
