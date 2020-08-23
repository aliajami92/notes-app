import { NOTE_SET_ALL, NOTE_CREATE, NOTE_UPDATE, NOTE_DELETE } from './noteActions';

const noteReducer = (state = [], action) => {
  switch (action.type) {
    case NOTE_SET_ALL:
      localStorage.setItem('notes', JSON.stringify(action.payload));
      return [...action.payload];

    case NOTE_CREATE:
      const newState = [...state, action.payload];
      localStorage.setItem('notes', JSON.stringify(newState));
      return newState;

    case NOTE_UPDATE:
      // Filter and update note by ID.
      const updatedState = state.map(note =>
        note.id === action.payload.id ? action.payload : note,
      );
      return updatedState;

    case NOTE_DELETE:
      // Filter out deleted note.
      return state.filter(note => note.id !== action.payload);

    default:
      return state;
  }
};

export default noteReducer;
