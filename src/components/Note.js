import React, { useContext, useState, useCallback, Fragment } from 'react';
import moment from 'moment';
import { NotesContext } from '../context/Notes.Context';
import { useDispatch } from 'react-redux';
import { isEmpty } from '../helpers';
import Modal from './Modal';
import { deleteNote } from '../store/note/noteActions';
import { NoteContainer, NoteTitle, TagsList, SelectNote } from '../style/Note';
import { AppButton, Viewer } from '../style/Layout';
import Tags from './Tags';

const Note = () => {
  const dispatch = useDispatch();
  const { state, setUpdateNote, setSelectedNote } = useContext(NotesContext);

  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const handleDeleteNote = useCallback(id => {
    setDeleteId(id);
    setShowModal(true);
  }, []);

  const confirmDeleteNote = () => {
    dispatch(deleteNote(deleteId));
    setDeleteId(null);
    setShowModal(false);
    setSelectedNote(null);
  };

  if (state.selectedNote) {
    const note = state.selectedNote;
    return (
      <Viewer>
        <NoteContainer>
          <NoteTitle>
            <h2>{note.title}</h2>
            <div>
              <AppButton onClick={() => setUpdateNote(note)}>Edit</AppButton>
              <AppButton color='danger' onClick={() => handleDeleteNote(note.id)}>
                Delete
              </AppButton>
            </div>
          </NoteTitle>
          <span>Last updated on: {moment(note.updated_at).format('MMMM Do YYYY, h:mm:ss A')}</span>
          {!isEmpty(note.tags) && (
            <TagsList>
              {note.tags.map(tag => (
                <li key={tag}>{tag}</li>
              ))}
            </TagsList>
          )}
          <p>{note.body}</p>
        </NoteContainer>
        <Modal
          show={showModal}
          title='Delete Note'
          footer={() => (
            <Fragment>
              <button onClick={() => setShowModal(false)}>Cancel</button>
              <button onClick={confirmDeleteNote}>Delete</button>
            </Fragment>
          )}>
          <p>Are you sure you want to delete the selected note?</p>
        </Modal>

        <Tags />
      </Viewer>
    );
  }

  return (
    <SelectNote>
      <span>Select a note to view</span>
      <Tags />
    </SelectNote>
  );
};

export default Note;
