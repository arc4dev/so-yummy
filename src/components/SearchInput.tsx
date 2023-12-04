import styled from 'styled-components';

const InputContainer = styled.div`
  min-width: 305px;
  position: relative;
  display: flex;
  filter: drop-shadow(0px 4px 97px rgba(34, 37, 42, 0.03));
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

const StyledButton = styled.button`
  position: absolute;
  top: -3px;
  right: 0;
  padding: 1.21em 2.28em;
  border-radius: 24px 44px;
  background-color: var(--color-black);
  color: var(--color-white-2);

  @media screen and (min-width: 768px) {
    top: 0;
    font-size: 1rem;
  }

  @media screen and (min-width: 1280px) {
    font-size: 1.15rem;
  }
`;

const SearchInput = () => {
  return (
    <InputContainer>
      <StyledInput type="text" placeholder="Beef |" />
      <StyledButton>Search</StyledButton>
    </InputContainer>
  );
};

export default SearchInput;
