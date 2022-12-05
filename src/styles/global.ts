import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --background: #070B14;

        --dark-300: #1457D2;
        --dark-400: #18418C;
        --dark-500: #142D59;
        --dark-600: #101D35;

        --glass: rgba(24, 65, 140, 0.25);
        --glass-bd: rgba(24, 65, 140, 0.86);

        --fonte: 'Inter', sans-serif;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: var(--background);
        color: #FFF;
        -webkit-font-smoothing: antialiased;
        font-family: var(--fonte);
    }
`;

export default GlobalStyle;