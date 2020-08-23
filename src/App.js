import React, { Fragment, useEffect } from 'react';
import NotesList from './components/NotesList';
import Note from './components/Note';
import GlobalStyle from './style/Global';
import { Content, AppTitle } from './style/Layout';
import { useSelector, useDispatch } from 'react-redux';
import { notesSelector } from './store/note/noteSelectors';
import { setAllNotes } from './store/note/noteActions';
import useDidMountEffect from './hooks/useDidMountEffect';

const App = () => {
  const dispatch = useDispatch();
  const allNotes = useSelector(notesSelector);

  // Load localStorage notes into state if any on app mount.
  useEffect(() => {
    const currentNotes = localStorage.getItem('notes');
    if (currentNotes) {
      dispatch(setAllNotes(JSON.parse(currentNotes)));
    }
  }, [dispatch]);

  // Update notes state in localStorage.
  useDidMountEffect(() => {
    localStorage.setItem('notes', JSON.stringify(allNotes));
  }, [allNotes]);

  return (
    <Fragment>
      <GlobalStyle />
      <AppTitle>Notes App</AppTitle>
      <Content>
        <NotesList />
        <Note />
      </Content>
    </Fragment>
  );
};

export default App;
