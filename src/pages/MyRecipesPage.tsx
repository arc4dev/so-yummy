import { useQuery } from '@tanstack/react-query';

import OwnRecipeList from '../components/recipes/OwnRecipeList';
import PageContainer from '../components/common/PageContainer';
import Loader from '../components/common/Loader';
import { getOwnRecipes } from '../utils/recipesApi';
import SectionHeading from '../components/common/SectionHeading';

const MyRecipesPage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['recipes', 'my-recipes'],
    queryFn: () => getOwnRecipes(),
  });

  if (isLoading) return <Loader />;

  return (
    <PageContainer>
      <SectionHeading>My recipes</SectionHeading>
      <OwnRecipeList recipes={data?.data || []} />
    </PageContainer>
  );
};

export default MyRecipesPage;
