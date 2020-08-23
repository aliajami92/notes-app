import styled from 'styled-components';

export const Content = styled.section`
  display: flex;
  max-width: 1440px;
  margin: 60px auto;
  height: calc(100vh - 120px);
  background: white;
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.2);
`;

export const AppTitle = styled.h2`
  position: fixed;
  height: 60px;
  display: flex;
  align-items: center;
  left: 50%;
  color: white;
  transform: translateX(-50%);
`;

export const Header = styled.header`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  display: flex;
  align-items: center;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 16px;
  label {
    display: flex;
    align-items: center;
    padding: 0 6px;
    height: 30px;
    width: 100%;
    background: white;
    border-radius: 6px;
  }
  input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    padding-left: 6px;
    background: transparent;
  }
`;

export const CreateButton = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  height: 42px;
  padding: 0 22px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  svg {
    margin-right: 6px;
  }
  &:hover {
    outline: 2px solid rgba(255, 255, 255, 0.4);
    outline-offset: -6px;
  }
`;

export const AppButton = styled.button`
  color: ${({ color, theme }) => (color ? theme.colors[color] : theme.colors.secondary)};
  font-size: 16px;
  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;

export const Viewer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  .tags-list {
    margin: 0;
    margin-top: auto;
  }
`;
