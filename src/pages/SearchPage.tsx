import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getRecipeByQuery } from '../utils/recipesApi';
import styled from 'styled-components';

import SectionHeading from '../components/SectionHeading';
import SearchInput from '../components/SearchInput';
import Loader from '../components/Loader';
import RecipePreviewCard from '../components/RecipePreviewCard';
import RecipesList from '../components/RecipesList';
import PageContainer from '../components/PageContainer';
import ErrorComponent from '../components/ErrorComponent';

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

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const q = formData.get('query') as string;

    setSearchParams({
      ...Object.fromEntries(searchParams),
      q: q.toLowerCase(),
    });
  };

  const {
    data: recipes,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['recipes', query, searchBy],
    queryFn: () => getRecipeByQuery(query || '', searchBy || ''),
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
            })
          }
        />

        <RecipesList>
          {isLoading && <Loader />}
          {(!isLoading || isError) && (!recipes || !recipes?.length) ? (
            <ErrorComponent>Try looking for something else..</ErrorComponent>
          ) : (
            recipes?.map((recipe) => (
              <RecipePreviewCard
                key={recipe._id}
                title={recipe.strMeal}
                img={recipe.strMealThumb}
                mealId={recipe._id}
              />
            ))
          )}
        </RecipesList>
      </StyledSearchPage>
    </PageContainer>
  );
};

export default SearchPage;
