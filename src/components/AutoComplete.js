import React from 'react';
import CreatableSelect from 'react-select/creatable';
import { useSelector } from 'react-redux';
import { tagsSelector } from '../store/note/noteSelectors';

const AutoComplete = ({ setNote, setTag, tag, note }) => {
  const allTags = useSelector(tagsSelector);

  const handleTagsOnChange = values => {
    setNote(prev => ({ ...prev, tags: values }));
  };

  const handleInputChange = value => {
    setTag(value);
  };

  return (
    <CreatableSelect
      inputValue={tag}
      isClearable
      isMulti
      onChange={handleTagsOnChange}
      onInputChange={handleInputChange}
      value={note.tags}
      options={allTags.map(tag => ({ label: tag, value: tag }))}
    />
  );
};

export default AutoComplete;
