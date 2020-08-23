// Actions
export const NOTE_SET_ALL = 'NOTE_SET_ALL';
export const NOTE_CREATE = 'NOTE_CREATE';
export const NOTE_UPDATE = 'NOTE_UPDATE';
export const NOTE_DELETE = 'NOTE_DELETE';

// Action creators
export const setAllNotes = data => {
  return dispatch => {
    dispatch({ type: NOTE_SET_ALL, payload: data });
  };
};

export const createNote = data => {
  return dispatch => {
    dispatch({ type: NOTE_CREATE, payload: data });
  };
};

export const updateNote = data => {
  return dispatch => {
    dispatch({ type: NOTE_UPDATE, payload: data });
  };
};

export const deleteNote = id => {
  return dispatch => {
    dispatch({ type: NOTE_DELETE, payload: id });
  };
};
