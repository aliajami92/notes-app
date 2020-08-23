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
  width: ${({ width }) => (width ? `${width}px` : '60%')};
  height: ${({ height }) => (height ? `${height}px` : '70%')};
  background: white;
  margin: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  h2 {
    padding-bottom: 16px;
    border-bottom: 1px solid lightgray;
  }
  .content {
    padding: 16px 0;
  }
  .footer {
    margin-top: auto;
    text-align: right;
    button {
      padding: 8px 16px;
      color: ${({ theme }) => theme.colors.danger};
    }
    .confirm {
      color: white;
      background: ${({ theme }) => theme.colors.primary};
      margin-left: 16px;
    }
    .delete {
      color: white;
      background: ${({ theme }) => theme.colors.danger};
    }
  }
`;
