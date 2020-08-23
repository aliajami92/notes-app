import styled, { css } from 'styled-components';

export const ListContainer = styled.div`
  width: 300px;
  min-width: 300px;
  height: 100%;
  border-right: 1px solid lightgray;
  background: #f1f4f4;
  .scroll {
    max-height: calc(100% - 102px);
    overflow: auto;
  }
`;

export const NoteForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  label {
    font-size: 16px;
    margin-bottom: 8px;
    &:not(:first-child) {
      margin-top: 24px;
    }
  }

  input {
    height: 40px;
    border: 1px solid lightgray;
    outline: none;
    padding: 8px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 16px;
  cursor: pointer;
  span {
    align-self: flex-end;
  }
  &:not(:last-child) {
    border-bottom: 1px solid lightgray;
  }
  ${({ active }) =>
    active &&
    css`
      background: white;
    `}
`;

export const TagsList = styled.ul`
  display: flex;
  margin: 12px 0;
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px 8px;
    border-radius: 16px;
    border: 1px solid lightgray;
    &:not(:last-child) {
      margin-right: 8px;
    }
  }
`;

export const NoteContainer = styled.section`
  padding: 16px;
  width: 100%;
  p {
    margin-top: 24px;
  }
`;

export const NoteTitle = styled.div`
  display: flex;
  align-items: center;
  div {
    margin-left: auto;
  }
  button {
    padding: 8px 16px;
    &:not(:last-child) {
      margin-right: 16px;
    }
  }
`;

export const SelectNote = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  span {
    margin: auto;
  }
`;

export const TagsContainer = styled.section`
  margin-top: auto;
  display: flex;
  align-items: center;
  padding: 8px 16px;
  background: #02403d;
  color: white;
  ul {
    display: flex;
  }
  li {
    padding: 2px 6px;
    background: lightgray;
    color: black;
    border-radius: 16px;
    &:not(:last-child) {
      margin-right: 12px;
    }
    &:first-child {
      margin-left: 12px;
    }
  }
`;
