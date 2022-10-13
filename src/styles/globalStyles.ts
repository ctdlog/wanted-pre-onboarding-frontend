import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}
    * {
      box-sizing: border-box;
    }
    body {
      display: flex;
      justify-content: center;
      max-width: 1280px;
      margin: 100px auto;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    button {
      border: none;
      background: none;
      padding: 0;
      cursor: pointer;
    }
    input:focus {
      outline: none;
    }
`;

export default GlobalStyles;
