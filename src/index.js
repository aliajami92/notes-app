import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store';

import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import Theme from './theme';
import { NotesProvider } from './context/Notes.Context';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={Theme}>
      <NotesProvider>
        <App />
      </NotesProvider>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
