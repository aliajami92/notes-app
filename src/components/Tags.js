import React from 'react';
import { useSelector } from 'react-redux';
import { tagsSelector } from '../store/note/noteSelectors';
import { isEmpty } from '../helpers';
import { TagsContainer } from '../style/Note';

const Tags = () => {
  const allTags = useSelector(tagsSelector);

  return !isEmpty(allTags) ? (
    <TagsContainer>
      <h4>All Tags ({allTags.length}):</h4>
      <ul>
        {allTags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </TagsContainer>
  ) : null;
};

export default Tags;
