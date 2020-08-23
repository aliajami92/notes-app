import React from 'react';
import { Header } from '../style/Layout';
import Search from './Search';
import AddNote from './AddNote';

const AppHeader = () => {
  return (
    <Header>
      <Search />
      <AddNote />
    </Header>
  );
};

export default AppHeader;
