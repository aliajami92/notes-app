import React, { useState, Fragment, useContext, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useForm } from 'react-hook-form';
import AutoComplete from './AutoComplete';
import { useDispatch } from 'react-redux';
import { createNote, updateNote } from '../store/note/noteActions';
import Modal from './Modal';
import { NoteForm } from '../style/Note';
import { NotesContext } from '../context/Notes.Context';
import useDidMountEffect from '../hooks/useDidMountEffect';
import { AiFillFileAdd } from 'react-icons/ai';
import { CreateButton } from '../style/Layout';

const AddNote = () => {
  const dispatch = useDispatch();
  const { state, setUpdateNote, setSelectedNote } = useContext(NotesContext);

  const { handleSubmit, register, errors } = useForm({ reValidateMode: 'onSubmit' });

  const initialValue = { title: '', body: '', tags: [] };
  const [note, setNote] = useState(initialValue);
  const [tag, setTag] = useState('');

  const [showModal, setShowModal] = useState(false);

  // Show modal on edit note.
  useDidMountEffect(() => {
    if (state.updateNote) {
      setNote({
        ...state.updateNote,
        tags: state.updateNote.tags.map(tag => ({ label: tag, value: tag })),
      });
      setShowModal(true);
    }
  }, [state.updateNote]);

  const handleOnChange = e => {
    const { name, value } = e.target;
    setNote(prev => ({ ...prev, [name]: value }));
  };

  const onSubmit = () => {
    // Handle updating an existing note.
    if (state.updateNote) {
      const updatedNote = {
        id: state.updateNote.id,
        title: note.title,
        body: note.body,
        tags: note.tags.map(t => t.label),
        updated_at: new Date(),
      };
      dispatch(updateNote(updatedNote));
      setSelectedNote(updatedNote);
      setUpdateNote(null);

      // Handle creating a new note.
    } else {
      const newNote = {
        id: uuidv4(),
        updated_at: new Date(),
        title: note.title,
        body: note.body,
        tags: note.tags.map(t => t.label),
      };
      dispatch(createNote(newNote));
    }

    setNote(initialValue);
    setShowModal(false);
  };

  const handleCloseModal = useCallback(() => {
    setShowModal(false);
    // Reset note form.
    setNote(initialValue);

    // Clear update note state.
    if (state.updateNote) setUpdateNote(null);
  }, [state, initialValue, setUpdateNote]);

  return (
    <Fragment>
      <CreateButton onClick={() => setShowModal(true)}>
        <AiFillFileAdd />
        Add Note
      </CreateButton>
      <Modal
        title='Add Note'
        show={showModal}
        footer={() => (
          <Fragment>
            <button onClick={handleSubmit(onSubmit)}>Save</button>
            <button onClick={handleCloseModal}>Cancel</button>
          </Fragment>
        )}>
        <NoteForm onSubmit={e => e.preventDefault()}>
          <label htmlFor='title'>
            Title*
            {errors.title && <span>{errors.title.message}</span>}
          </label>
          <input
            type='text'
            name='title'
            id='title'
            value={note.title}
            onChange={handleOnChange}
            placeholder='Title'
            ref={register({ required: 'required' })}
          />

          <label htmlFor='body'>Note</label>
          <input
            type='text'
            name='body'
            id='body'
            value={note.body}
            onChange={handleOnChange}
            placeholder='Note..'
          />

          <label>Tags</label>
          <AutoComplete setNote={setNote} setTag={setTag} tag={tag} note={note} />
        </NoteForm>
      </Modal>
    </Fragment>
  );
};

export default AddNote;
