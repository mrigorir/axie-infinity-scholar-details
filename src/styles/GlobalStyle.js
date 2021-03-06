import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    /* colores */
    --white: #fff;
    --purple: #8f68df;
    --light: #ebe9e9;
    --lightGrey: #ebe9e9;
    --lightMedGrey: #6c6f70;
    --redGrey: #ebe2e3;
    --redLightGrey: #d35965;
    --blue: #84a2d3;
    --grey: #7c7c7c;
    --medGrey: #585656;
    --darkGrey: #1c1c1c;
    --medBlack: #303030;
    --lightAqua: #d5dcdd;
    --aqua: #43ddbf;
    --darkAqua: #29a9bf;
    --highDarkAqua: #054550;
    --darkMedBlue: #1b59b1;
    --darkBlue: #082d64;
    --mainContent: var(--lightBlue);
    --lightBlue: #c4d7f5;
    --medBlue: #5583df;
    --lightDarkBlue: #1563d7;
    --purpleBlue: #5b91e9;
    --darkPurple: #310c7c;

    /* shadows */

    --shadow-main-title: rgba(0, 0, 0, 0.3);

    /* loader */

    --color-spinner: var(--medBlue);

    /* navBar */

    --topBar: var(--darkBlue);
    --trackButton: linear-gradient(to right, var(--aqua), var(--medBlue));
    --topBarBorder: var(--aqua);
    --textForm: white;
    --trackButtonModal: var(--medGrey);
    --close-button-modal: var(--darkMedBlue);
    --bgOuterModal: var(--blue);
    --bgInnerModal: var(--grey);
    --labelTextModal: var(--medGrey);
    --disabled: #bdb6b6;
    --bg-slider: white;

    /* body */

    --bodyText: var(--medGrey);
    --bodyTextTitle: var(--medGrey);
    --bg-main-title: var(--medBlue);
    --color-main-title: white;
    --bg-section-1: linear-gradient(to right, var(--blue), var(--medBlue));
    --bg-section-2: var(--lightBlue);
    --bg-section-3: linear-gradient(to right, var(--medBlue), var(--darkBlue));
    --bg-table: var(--purpleBlue);
    --text-color-section-title: var(--darkMedBlue);
    --text-color-section-title-2: var(--blue);
    --text-color-section-text: var(--purple);
    --text-color-table-text: var(--redGrey);
    --text-color-table-title: var(--white);
    --bg-card-1: var(--light);
    --bg-card-2: linear-gradient(to right, var(--darkBlue), var(--lightDarkBlue));
    --bg-axie-parts: var(--darkMedBlue);
    --bg-error-message: var(--redGrey);
    --error-message-text: var(--redLightGrey);
  }

  [data-theme="dark"] {
    /* shadows */

    --boxShadowBody: inset 0 0 0 2000px rgba(0, 0, 0, 0.9);
    --shadow-main-title: rgba(0, 0, 0, 0.5);

    /* loader */

    --color-spinner: var(--aqua);
    
    /* navBar */

    --topBar: var(--darkGrey);
    --topBarBorder: var(--lightGrey);
    --textForm: white;
    --trackButton: linear-gradient(to right, var(--darkAqua), var(--darkMedBlue));
    --trackButtonModal: var(--darkAqua);
    --close-button-modal: var(--highDarkAqua);
    --bgOuterModal: var(--darkGrey);
    --bgInnerModal: var(--medGrey);
    --labelTextModal: var(--aqua);
    --bg-slider: var(--lightBlue);
    
    /* body */

    --mainContent: var(--medGrey);
    --bodyText: white;
    --bodyTextTitle: var(--aqua);
    --bg-main-title: var(--medBlack);
    --color-main-title: var(--aqua);
    --bg-section-1: linear-gradient(to right, var(--lightMedGrey), var(--highDarkAqua));
    --bg-section-2: var(--medGrey);
    --bg-section-3: linear-gradient(to right, var(--grey), var(--medBlack));
    --bg-card-1: var(--medGrey);
    --bg-card-2: linear-gradient(to right, var(--darkGrey), var(--medBlack));
    --text-color-section-title: var(--darkAqua);
    --text-color-section-title-2: var(--blue);
    --text-color-section-text: var(--aqua);
    --text-color-table-title: var(--aqua);
    --text-color-table-text: var(--darkAqua);
    --bg-table: var(--darkGrey);
    --bg-axie-parts: var(--highDarkAqua);
  }

  .bg-main-title {
    background-color: var(--bg-main-title);
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

  .close-button-modal {
    background-color: var(--close-button-modal);
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

  .bg-section-1 {
    background: var(--bg-section-1);
  }

  .bg-section-2 {
    background: var(--bg-section-2);
  }

  .bg-section-3 {
    background: var(--bg-section-3);
  }

  .bg-table {
    background-color: var(--bg-table);
  }

  .bg-card-1 {
    background-color: var(--bg-card-1);
  }
  
  .bg-card-2 {
    background: var(--bg-card-2);
  }

  .bg-axie-parts {
    background-color: var(--bg-axie-parts);
  }

  .bg-error-message {
    background-color: var(--bg-error-message);
  }

  .text-color-section-title {
    color: var(--text-color-section-title);
  }

  .text-color-section-text {
    color: var(--text-color-section-text)!important;
  }

  .text-color-section-title-2 {
    color: var(--text-color-section-title-2);
  }

  .text-color-table-text {
    color: var(--text-color-table-text)!important;
  }

  .text-color-table-title {
    color: var(--text-color-table-title)!important;
  }

  .error-message-text {
    color: var(--error-message-text);
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
    width: 120px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .half-circled,
  .axie-list {
    border-radius: 30px!important;
  }

  .circled {
    border-radius: 50%;
    width: 100px;
    height: 100px;
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

    .not-hover,
    .not-hover: hover,
    .not-hover: focus {
      background-color: transparent;
      border: none;
      outline: none;
      box-shadow: none;
    }

    .swal-button,
    .swal-button:hover {
      background-color: #e53e21!important;
      opacity: 1;
    }

    .error-title {
      text-align: center!important;
    }

    @media screen and (max-width: 520px) {
      .imgs {
        width: 60px;
        height: 60px;
      }
    }

    @media only screen and (max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px)  {
    
      /* Force table to not be like tables anymore */
      table, thead, tbody, th, td, tr { 
        display: block; 
      }
      
      /* Hide table headers (but not display: none;, for accessibility) */
      thead tr { 
        position: absolute;
        top: -9999px;
        left: -9999px;
      }
      
      td { 
        /* Behave  like a "row" */
        position: relative;
        padding-left: 50%; 
      }
      
      td:before { 
        /* Now like a table header */
        position: absolute;
        /* Top/left values mimic padding */
        top: 6px;
        left: 6px;
        width: 45%; 
        padding-right: 10px; 
        white-space: nowrap;
      } 
    }
  }
}
`;

export default GlobalStyle;
