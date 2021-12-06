import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --maxWidth: 1280px; 
    --white: #fff;
    --lightGrey: #eee;
    --grey: #ddd;
    --medGrey: #353535; 
    --darkGrey: #1c1c1c;
    --lightPurple: #cfb3f7;
    --medPurple: #aa94d7;
    --darkPurple: #7739f5;
    --highDarkPurple: #3a2f56;
    --lightBlue: #dce6f9;
    --medBlue: #5583df;
    --fontSuperBig: 2.5rem;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;
  }

  * {
    box-sizing: border-box;
    font-family: 'Abel', sans-serif;  
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

    .bg-grey {
      background-color: var(--lightGrey);
    }

    .bg-darkerGrey {
      background-color: var(--grey);
    }

    .border-grey {
      border: solid 2px #ccc;
    }

    .bg-lightPurple {
      background-color: var(--lightPurple);
    }

    .bg-darkPurple {
      background-color: var(--darkPurple)!important;
    }

    .bg-highDarkPurple {
      background-color: var(--highDarkPurple);
    }

    .bg-blue {
      background-color: var(--medBlue);
    }
  }

  input[type="text"] {
    border-radius: 20px;
    width: 300px;
    color: var(--darkPurple);
  }

  input[type="text"]:focus {
    outline: none;
    box-shadow: none;
    border-color: var(--darkPurple);
    border-width: 2px;
  }

  input[type="text"]::placeholder {
    font-size: 16px;
    color: var(--medPurple);
    font-weight: bold;
  }
`;

export default GlobalStyle;
