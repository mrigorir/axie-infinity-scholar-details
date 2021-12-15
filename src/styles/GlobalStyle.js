import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --white: #fff;
    --lightGrey: #eee;
    --grey: #ddd;
    --medGrey: #353535; 
    --darkGrey: #1c1c1c;
    --lightPurple: #cfb3f7;
    --medPurple: #aa94d7;
    --darkPurple: #7739f5;
    --highDarkPurple: #3a2f56;
    --lightBlue: #dbe1ed;
    --medBlue: #5583df;
    --darkBlue: #082d64;
    --aqua: #4bb3b2;
  }

  * {
    box-sizing: border-box;
    font-family: 'Abel', sans-serif;
    -ms-word-break: break-all;
    word-break: break-all;
    word-break: break-word;
    -webkit-hyphens: auto;
    -moz-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto; 
  }

  .half-circled {
    border-radius: 30px;
  }

  .half-circled:hover {
    transform: scale(1.1, 1.1);
    transition: all ease .3s;
  }

  body {  
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    h1 {
      font-size: 2rem;
      font-weight: 600;
    }

    h3 {
      font-size: 1.1rem;
      font-weight: 600;
    }

    p {
      font-size: 1rem;
    }

    .bg-dark-blue {
      background-color: var(--darkBlue);
    }
  
    .bg-med-blue {
      background-color: var(--medBlue);
    }
  
    .bg-light-blue {
      background-color: var(--lightBlue);
    }
  
    .track-button {
      background: linear-gradient(to right, var(--aqua) , var(--medBlue));
    }
    
    input[type="text"] {
      border-radius: 20px;
      width: 300px;
      color: var(--darkBlue);
    }

    input[type="text"]:focus {
      outline: none;
      box-shadow: none;
      border-color: var(--darkBlue);
      border-width: 2px;
    }

    input[type="text"]::placeholder {
      font-size: 16px;
      color: var(--medBlue);
      font-weight: bold;
    }
  }
`;

export default GlobalStyle;
