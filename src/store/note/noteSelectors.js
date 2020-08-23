import { createSelector } from 'reselect';

// Selectors
const notes = state => state.notes;

// Get all notes.
export const notesSelector = createSelector(notes, allNotes => {
  return allNotes;
});

// Get filtered notes.
export const filteredNotes = searchValue => {
  return createSelector(notes, allNotes => {
    if (!searchValue) return allNotes;

    return allNotes.filter(
      note =>
        note.title.includes(searchValue) ||
        note.body.includes(searchValue) ||
        note.tags.includes(searchValue),
    );
  });
};

// Get a list of all unique tags.
export const tagsSelector = createSelector(notes, allNotes => {
  const allTags = [];
  allNotes.forEach(note => {
    let tags = note.tags;
    allTags.push(...tags);
  });
  // Return unique values only.
  return [...new Set(allTags)];
});
