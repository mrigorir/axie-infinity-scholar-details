import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --lightGrey: #eee;
    --grey: #ddd;
    --medGrey: #585656;
    --darkGrey: #1c1c1c;
    --aqua: #4dd6dc;
    --darkAqua: #1e7b8b;
    --darkMedBlue: #1b59b1;
    --darkBlue: #082d64;
    --mainContent: var(--lightBlue);
    --lightBlue: #c4d7f5;
    --medBlue: #5583df;
    --topBar: var(--darkBlue);
    --trackButton: linear-gradient(to right, var(--aqua), var(--medBlue));
    --topBarBorder: var(--aqua);
    --bodyText: var(--medGrey);
    --bodyTextTitle: var(--darkGrey);
  }

  [data-theme="dark"] {
    --topBar: var(--darkGrey);
    --trackButton: linear-gradient(to right, var(--darkAqua), var(--darkMedBlue));
    --boxShadowBody: inset 0 0 0 2000px rgba(0, 0, 0, 0.9);
    --mainContent: var(--medGrey);
    --topBarBorder: var(--lightGrey);
    --bodyText: white;
    --bodyTextTitle: var(--aqua);
  }

  .bg-topbar {
    background-color: var(--topBar);
  }

  .track-button {
    background: var(--trackButton);
  }
  
  .bg-main-content {
    background-color: var(--mainContent);
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
    transition: all ease-in-out .5s;
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
