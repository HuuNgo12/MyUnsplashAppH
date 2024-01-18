import React from 'react';
import { useGlobalContext } from './context';

const SearchFrom = () => {
  const { setSearchTerm } = useGlobalContext();
  const handleSubmit = e => {
    e.preventDefault();
    // console.log(e.target.elements);
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    setSearchTerm(searchValue);
  };
  return (
    <section>
      <h1 className="title">Unsflash images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          // value={searchValue}
          className="form-input search-input"
          placeholder="cat"
          name="search"
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchFrom;
