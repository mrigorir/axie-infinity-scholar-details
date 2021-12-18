import styled from 'styled-components';

const TopBar = styled.div`
  box-shadow: 5px 5px 5xp var(--lightBlue);
  padding-bottom: 5px;
  border-radius: 0;
`;

const DarkModeWrapper = styled.div`
  margin-right: 20px;
  margin-bottom: 10px;

  .toggle-theme-wrapper {
    display: flex;
    align-items: center;
  }
  
  .toggle-theme {
    position: relative;
    display: inline-block;
    height: 34px;
    width: 60px;
  }

  .toggle-theme input {
    display: none;
  }

  .slider {
    background-color: #ccc;
    position: absolute;
    cursor: pointer;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    border-radius: 34px;
    transition: 0.2s;
  }

  .slider:before {
    content: "";
    position: absolute;
    left: 4px;
    bottom: 4px;
    height: 26px;
    width: 26px;
    border-radius: 50%;
    background-color: var(--bg-slider);
    transition: 0.4s;
  }

  input:checked + .slider:before {
    transform: translateX(26px);
  }

  input:checked + .slider {
    background: linear-gradient(to right, var(--aqua) , var(--medBlue));
  }

  @media screen and (max-width: 520px) {
    margin-right: 0;
  }
`;

const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export {
  TopBar, DarkModeWrapper, Title,
};
