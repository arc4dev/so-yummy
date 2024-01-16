import SectionHeading from '../components/common/SectionHeading';
import PageContainer from '../components/common/PageContainer';
import OwnRecipeList from '../components/recipes/OwnRecipeList';
import { useQuery } from '@tanstack/react-query';
import { getFavouriteRecipes } from '../utils/recipesApi';
import Loader from '../components/common/Loader';

const FavouritesPage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['favourite-recipes'],
    queryFn: () => getFavouriteRecipes(),
  });

  if (isLoading) return <Loader />;

  return (
    <PageContainer>
      <SectionHeading>Favourites</SectionHeading>
      <OwnRecipeList recipes={data?.data || []} variant="secondary" />
    </PageContainer>
  );
};

export default FavouritesPage;
