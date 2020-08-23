import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: none;
  ${({ show }) =>
    show &&
    css`
      display: flex;
    `}
`;

export const ModalBody = styled.section`
  width: 60%;
  height: 70%;
  background: white;
  margin: auto;
  padding: 16px;
  h2 {
    padding-bottom: 16px;
    border-bottom: 1px solid lightgray;
  }
  div.content {
    padding: 16px 0;
  }
`;
