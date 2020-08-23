import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html {
        font-size: 14px;
    }
    body {
        display: flex;
        height: 100vh;
        font-family: 'Quicksand', 'Helvetica', 'Arial', sans-serif;
        font-weight: 400;
        background: ${({ theme }) => theme.backgrounds.body};
        &::after {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 120px;
            background: ${({ theme }) => theme.backgrounds.header};
            z-index: -1;
        }
    }
    #root {
        width: 100%;
    }
    ul {
        list-style: none;
    }
    button {
        border: none;
        outline: none;
        background: none;
        color: inherit;
        font: inherit;
        cursor: pointer;
    }
    .custom-scroll {
        &::-webkit-scrollbar {
            width: 6px;
            height: 6px;
            background: transparent;
        }
        &::-webkit-scrollbar-track {
            background: transparent;
            border-radius: 5px;
        }
        &::-webkit-scrollbar-thumb {
            background: lightgray;
            border-radius: 5px;
        }
    }
`;
