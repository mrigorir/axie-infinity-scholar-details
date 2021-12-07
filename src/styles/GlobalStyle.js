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
    --lightBlue: #dbe1ed;
    --medBlue: #5583df;
    --darkBlue: #082d64;
    --aqua: #4bb3b2;
    --fontSuperBig: 2.5rem;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;
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

  .truncate {
    width: 250px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .half-circled {
    border-radius: 30px;
  }

  .half-circled:hover {
    transform: scale(1.1, 1.1);
    transition: all ease .3s;
  }

  .id-button:hover {
    color: white;
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
