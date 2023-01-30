import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        background: ${({ theme }) => theme.bg};
        color: ${({ theme }) => theme.text};
        font-family: 'Montserrat', sans-serif;
        letter-spacing: .6px;
    }
    a {
        text-decoration: none;
        color: inherit;
        user-select: none;
    }
`;
