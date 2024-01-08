import { useQuery } from '@tanstack/react-query';

import OwnRecipeList from '../components/OwnRecipeList';
import PageContainer from '../components/PageContainer';
import Loader from '../components/Loader';
import { getOwnRecipes } from '../utils/recipesApi';

const MyRecipesPage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['recipes', 'my-recipes'],
    queryFn: () => getOwnRecipes(),
  });

  if (isLoading) return <Loader />;

  return (
    <PageContainer>
      <OwnRecipeList recipes={data?.data || []} />
    </PageContainer>
  );
};

export default MyRecipesPage;
