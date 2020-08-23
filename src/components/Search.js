import React, { useContext } from 'react';
import { NotesContext } from '../context/Notes.Context';
import { BsSearch } from 'react-icons/bs';
import { SearchContainer } from '../style/Layout';

const Search = () => {
  const { setSearchValue } = useContext(NotesContext);

  const handleOnChange = e => {
    const { value } = e.target;
    setSearchValue(value);
  };

  return (
    <SearchContainer>
      <label htmlFor='search'>
        <BsSearch />
        <input id='search' type='text' placeholder='Search notes..' onChange={handleOnChange} />
      </label>
    </SearchContainer>
  );
};

export default Search;
