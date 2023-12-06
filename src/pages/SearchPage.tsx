import SearchInput from '../components/SearchInput';
import SectionHeading from '../components/SectionHeading';

// TODO - Implement search functionality

const SearchPage = () => {
  return (
    <div>
      <SectionHeading>Search</SectionHeading>

      <SearchInput />

      <div>
        <label htmlFor="searchBy">Search by:</label>
        <select name="searchBy" id="searchBy">
          <option value="title">Title</option>
          <option value="Ingredients">Ingredients</option>
        </select>
      </div>

      <ul></ul>
    </div>
  );
};

export default SearchPage;
