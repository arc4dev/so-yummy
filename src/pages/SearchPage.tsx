import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getRecipeByQuery } from '../services/recipesApi';
import styled from 'styled-components';

import SectionHeading from '../components/common/SectionHeading';
import SearchInput from '../components/common/SearchInput';
import Loader from '../components/common/Loader';
import RecipePreviewCard from '../components/recipes/RecipePreviewCard';
import RecipesList from '../components/recipes/RecipesList';
import PageContainer from '../components/common/PageContainer';
import ErrorComponent from '../components/common/ErrorComponent';
import Pagination from '../components/common/Pagination';

const StyledSearchPage = styled.div`
  display: grid;
  place-items: center;
  gap: 3.5rem;
`;

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    s: 'title',
  });
  const query = searchParams.get('q');
  const searchBy = searchParams.get('s');
  const page = searchParams.get('p');

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const q = formData.get('query') as string;

    setSearchParams({
      ...Object.fromEntries(searchParams),
      q: q.toLowerCase(),
      p: '1',
    });
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ['recipes', query, searchBy, page],
    queryFn: () =>
      getRecipeByQuery(query || '', searchBy || '', Number(page) || 1),
    enabled: !!query,
  });

  return (
    <PageContainer>
      <StyledSearchPage>
        <SectionHeading style={{ justifySelf: 'start' }}>Search</SectionHeading>

        <SearchInput
          btnColor="secondary"
          type="searchWithFilter"
          defaultFilterValue={searchBy || 'title'}
          onSubmit={handleSearchSubmit}
          onChangeFilter={(e) =>
            setSearchParams({
              ...Object.fromEntries(searchParams),
              s: e.target.value.toLowerCase(),
              p: '1',
            })
          }
        />

        <RecipesList>
          {isLoading && <Loader />}
          {(!isLoading || isError) && (!data?.data || !data?.data?.length) ? (
            <ErrorComponent>Try looking for something else..</ErrorComponent>
          ) : (
            data?.data.map((recipe) => (
              <RecipePreviewCard
                key={recipe._id}
                title={recipe.strMeal}
                img={recipe.strMealThumb}
                mealId={recipe._id}
              />
            ))
          )}
        </RecipesList>

        <Pagination
          currentPage={data?.page || 1}
          totalPages={data?.totalPages || 1}
          onPageChange={(page) => {
            searchParams.set('p', String(page));
            setSearchParams(searchParams);
          }}
        />
      </StyledSearchPage>
    </PageContainer>
  );
};

export default SearchPage;
