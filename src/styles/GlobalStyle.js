import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --lightGrey: #eee;
    --blue: #84a2d3;
    --grey: #ddd;
    --medGrey: #585656;
    --darkGrey: #1c1c1c;
    --aqua: #3feaf1;
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
    --bodyTextTitle: var(--medGrey);
    --textForm: white;
    --trackButtonModal: var(--medGrey);
    --bgOuterModal: var(--blue);
    --bgInnerModal: var(--grey);
    --labelTextModal: var(--medGrey);
    --disabled: #bdb6b6;
    --bg-slider: white;
    --color-spinner: var(--medBlue);
  }

  [data-theme="dark"] {
    --topBar: var(--darkGrey);
    --boxShadowBody: inset 0 0 0 2000px rgba(0, 0, 0, 0.9);
    --mainContent: var(--medGrey);
    --topBarBorder: var(--lightGrey);
    --bodyText: white;
    --bodyTextTitle: var(--aqua);
    --textForm: white;
    --trackButton: linear-gradient(to right, var(--darkAqua), var(--darkMedBlue));
    --trackButtonModal: var(--darkAqua);
    --bgOuterModal: var(--darkGrey);
    --bgInnerModal: var(--medGrey);
    --labelTextModal: var(--aqua);
    --bg-slider: var(--lightBlue);
    --color-spinner: var(--aqua);
  }
 
  .bg-topbar {
    background-color: var(--topBar);
  }

  .color-spinner {
    color: var(--color-spinner);
  }

  .track-button {
    background: var(--trackButton);
  }
  
  .bg-main-content {
    background-color: var(--mainContent);
    transition: all ease-in-out .4s;
  }

  .bg-outerModal {
    background-color: var(--bgOuterModal);
  }

  .bg-innerModal {
    background-color: var(--bgInnerModal);
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

    label {
      color: var(--labelTextModal);
      font-size: 20px;
      font-weight: bold;
    }
   
    input[type="text"] {
      border-radius: 20px;
      color: var(--textForm);
      background-color: var(--bgOuterModal);
      border: none;
    }

    input:disabled {
      background-color: var(--disabled)!important;
      color: var(--medGrey);
      font-weight: bold;
    }

    input[type="text"]:focus {
      outline: none;
      box-shadow: none;
      border-color: var(--darkBlue);
      border-width: 2px;
    }

    input[type="text"]::placeholder {
      font-size: 16px;
      color: var(--textForm);
      font-weight: bold;
    }

    input:disabled::placeholder {
      color: var(--darkGrey);
    }
  }
`;

export default GlobalStyle;
