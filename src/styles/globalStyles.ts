import { createGlobalStyle } from 'styled-components';
import oc from 'open-color';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}
    * {
      box-sizing: border-box;
    }
    body {
      background-color: ${oc.gray[7]};
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
