import { useSearchParams } from 'react-router-dom';
import SearchInput from '../components/SearchInput';
import SectionHeading from '../components/SectionHeading';
import { useQuery } from '@tanstack/react-query';
import Loader from '../components/Loader';
import RecipePreviewCard from '../components/RecipePreviewCard';
import RecipesList from '../components/RecipesList';
import { getRecipeByQuery } from '../utils/recipesApi';
import styled from 'styled-components';

const NotFoundQueryImage = styled.img`
  width: 208px;
  margin-bottom: 1.8rem;

  @media screen and (min-width: 768px) {
    width: 350px;
  }
`;

const NotFoundQueryText = styled.p`
  text-align: center;
  opacity: 0.5;
  letter-spacing: -0.28px;

  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

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
          <div>
            <NotFoundQueryImage src="/searchTry.png" alt="Vegetables cart" />
            <NotFoundQueryText>
              Try looking for something else..
            </NotFoundQueryText>
          </div>
        ) : (
          recipes?.map((recipe) => (
            <RecipePreviewCard
              key={recipe.idMeal}
              title={recipe.strMeal}
              img={recipe.strMealThumb}
              mealId={recipe.idMeal}
            />
          ))
        )}
      </RecipesList>
    </StyledSearchPage>
  );
};

export default SearchPage;
