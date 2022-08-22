import Router from './Router';
import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  html {
    width: 100%;
    height: 100%;
    font-size: 16px;
    margin: 0;
  }

  body {
    margin: 0;
    width: 100%;
    height: 100%;
    font-family: 'Pretendard' !important;
    box-sizing: border-box;

    #root {
      width: 100%;
      height: 100%;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;

    &:focus {
      outline: none;
    }
  }

  button, input, textarea {
    font: inherit;
  }

  * {
    box-sizing: inherit;
  }

  *:not(input, textarea) {
    /* 드래그 방지 css */
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
  }

  /* 포커스 시 placeholder 숨기기 in <input>, <textarea> */
  input:focus::-webkit-input-placeholder,
  textarea:focus::-webkit-input-placeholder { /* WebKit browsers */
    color: transparent;
  } 
  input:focus:-moz-placeholder,
  textarea:focus:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color:transparent;
  }
  input:focus::-moz-placeholder,
  textarea:focus::-moz-placeholder { /* Mozilla Firefox 19+ */
    color:transparent;
  }
  input:focus:-ms-input-placeholder,
  textarea:focus:-ms-input-placeholder { /* Internet Explorer 10+ */
    color:transparent;
  }
`;

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Router />
    </div>
  );
}

export default App;
