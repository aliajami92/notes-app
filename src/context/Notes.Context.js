import React, { createContext, useState, useCallback } from 'react';

export const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [state, setState] = useState({ selectedNote: null, updateNote: null, searchValue: '' });

  const setSelectedNote = useCallback(note => {
    setState(prev => ({ ...prev, selectedNote: note }));
  }, []);

  const setUpdateNote = useCallback(note => {
    setState(prev => ({ ...prev, updateNote: note }));
  }, []);

  const setSearchValue = useCallback(value => {
    setState(prev => ({ ...prev, searchValue: value }));
  }, []);

  return (
    <NotesContext.Provider value={{ state, setSelectedNote, setUpdateNote, setSearchValue }}>
      {children}
    </NotesContext.Provider>
  );
};
