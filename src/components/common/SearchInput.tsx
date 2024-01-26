import styled from 'styled-components';

const InputContainer = styled.form`
  width: 295px;
  position: relative;
  display: flex;
  filter: drop-shadow(0px 4px 97px rgba(34, 37, 42, 0.03));

  @media screen and (min-width: 768px) {
    width: 362px;
  }

  @media screen and (min-width: 1440px) {
    width: 510px;
  }
`;

const StyledInput = styled.input`
  width: 75%;
  font-size: 0.86rem;
  padding: 1.21em 2.28em;
  border-top-left-radius: 24px;
  border-bottom-left-radius: 44px;
  outline: none;
  border: 1px solid #f0f0f0;
  transition: all 200ms ease-in-out;

  &:focus {
    border-color: rgba(35, 38, 42, 0.2);
  }

  &::placeholder {
    color: #bdbdbd;
  }

  @media screen and (min-width: 768px) {
    font-size: 1rem;
    width: 85%;
  }

  @media screen and (min-width: 1280px) {
    font-size: 1.15rem;
  }
`;

type ButtonBgColorTypes = 'primary' | 'secondary';

const StyledButton = styled.button<{ $bgcolor: ButtonBgColorTypes }>`
  position: absolute;
  top: -2px;
  right: 0;
  padding: 1.1rem 2.28rem;
  border-radius: 24px 44px;
  color: var(--color-white-2);
  transition: all 150ms ease-in-out;

  background-color: ${({ $bgcolor }) =>
    $bgcolor === 'secondary' ? 'var(--color-action)' : 'var(--color-black)'};

  &:hover {
    background-color: ${({ $bgcolor }) =>
      $bgcolor === 'secondary'
        ? 'var(--color-primary)'
        : 'var(--color-action)'};
  }

  @media screen and (min-width: 768px) {
    padding: 1.38rem 2.28rem;
    font-size: 1rem;
  }

  @media screen and (min-width: 1280px) {
    padding: 1.55rem 2.28rem;
    font-size: 1.15rem;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  margin-top: 1.8rem;
`;

const StyledLabel = styled.label`
  color: var(--color-black-2);
  font-size: 0.9rem;
  line-height: 1.33;

  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }

  @media screen and (min-width: 1280px) {
    font-size: 1.28rem;
  }
`;

const StyledSelect = styled.select`
  opacity: 0.4;
  width: 146px;
  background-color: var(--color-gray-4);
  border: none;
  outline: none;
  padding: 6px;
`;

type Props = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  type: 'search' | 'searchWithFilter';
  onChangeFilter?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  defaultFilterValue?: string;
  btnColor: ButtonBgColorTypes;
};

const SearchInput = ({
  onSubmit,
  type,
  onChangeFilter,
  defaultFilterValue,
  btnColor,
}: Props) => {
  return (
    <div>
      <InputContainer onSubmit={onSubmit}>
        <StyledInput name="query" type="text" placeholder="Beef |" />
        <StyledButton $bgcolor={btnColor}>Search</StyledButton>
      </InputContainer>

      {type === 'searchWithFilter' && (
        <FilterContainer>
          <StyledLabel htmlFor="searchBy">Search by: </StyledLabel>
          <StyledSelect
            onChange={onChangeFilter}
            defaultValue={defaultFilterValue}
            name="searchBy"
            id="searchBy">
            <option value="title">Title</option>
            <option value="ingredient">Ingredient</option>
          </StyledSelect>
        </FilterContainer>
      )}
    </div>
  );
};

export default SearchInput;
