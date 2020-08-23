import React, { useContext } from 'react';
import { List, ListItem, ListContainer } from '../style/Note';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { filteredNotes } from '../store/note/noteSelectors';
import { NotesContext } from '../context/Notes.Context';
import { isEmpty } from '../helpers';
import Search from './Search';
import AddNote from './AddNote';

const NotesList = () => {
  const { state, setSelectedNote } = useContext(NotesContext);

  const allNotes = useSelector(filteredNotes(state.searchValue)).sort((a, b) => {
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(b.updated_at) - new Date(a.updated_at);
  });

  const handleOnClick = note => {
    setSelectedNote(note);
  };

  return (
    <ListContainer>
      <Search />
      <AddNote />
      <div className='scroll custom-scroll'>
        <List>
          {!isEmpty(allNotes) ? (
            allNotes.map(note => (
              <ListItem
                key={note.id}
                onClick={() => handleOnClick(note)}
                active={state.selectedNote && note.id === state.selectedNote.id}>
                <h3>{note.title.length < 24 ? note.title : `${note.title.substring(0, 24)}...`}</h3>
                <span>{moment(note.updated_at).fromNow()}</span>
              </ListItem>
            ))
          ) : (
            <ListItem>No notes found</ListItem>
          )}
        </List>
      </div>
    </ListContainer>
  );
};

export default NotesList;
