import SectionHeading from '../components/common/SectionHeading';
import PageContainer from '../components/common/PageContainer';
import OwnRecipeList from '../components/recipes/OwnRecipeList';
import { useQuery } from '@tanstack/react-query';
import { getFavouriteRecipes } from '../services/recipesApi';
import Loader from '../components/common/Loader';
import Pagination from '../components/common/Pagination';
import { useSearchParams } from 'react-router-dom';

const FavouritesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    p: '1',
  });
  const page = searchParams.get('p');

  const { data, isLoading } = useQuery({
    queryKey: ['favourite-recipes', page],
    queryFn: () => getFavouriteRecipes(Number(page)),
  });

  if (data?.results === 0) {
    searchParams.set('p', String(Number(page) - 1 || 1));
    setSearchParams(searchParams);
  }

  if (isLoading) return <Loader />;

  return (
    <PageContainer>
      <SectionHeading>Favourites</SectionHeading>
      <OwnRecipeList
        recipes={data?.data || []}
        variant="secondary"
        page="favourites"
      />
      <Pagination
        currentPage={data?.page || 1}
        totalPages={data?.totalPages || 1}
        onPageChange={(page) => {
          searchParams.set('p', String(page));
          setSearchParams(searchParams);
        }}
      />
    </PageContainer>
  );
};

export default FavouritesPage;
