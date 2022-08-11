import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

    body {
        margin: 0;
        font-family: system-ui;
        background: #24262b;
        background-image: url(/images/background.jpg);
        background-position: 100%;
        display: flex;
        color: #e7e7e7;
        overflow: hidden;
        overflow-y: auto;
    }

    * {
        scrollbar-width: 6px;
        scrollbar-color: #8f54a0 #ffffff;
    }

    *::-webkit-scrollbar {
        width: 4px;
    }

    *::-webkit-scrollbar-track {
        background: transparent;
    }

    *::-webkit-scrollbar-thumb {
        background-color: #ffffff20;
        border-radius: 10px;
    }

`

export default GlobalStyle