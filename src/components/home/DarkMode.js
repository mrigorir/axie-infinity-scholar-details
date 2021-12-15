import React from 'react';
import { Image } from 'react-bootstrap';
import { handleTheme, defaultDark } from '../darkModeData/darkModeData';
import lightMode from '../../assets/icon/lightMode.png';
import darkMode from '../../assets/icon/darkMode.png';

function DarkMode() {
  return (
    <div className="toggle-theme-wrapper">
      <span>
        <Image fluid src={lightMode} height={100} width={100} className="icon" />
      </span>
      <label className="toggle-theme" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          onChange={(e) => handleTheme(e)}
          defaultChecked={defaultDark}
        />
        <div className="slider round"> </div>
      </label>
      <span>
        <Image fluid src={darkMode} height={100} width={100} className="icon" />
      </span>
    </div>
  );
}

export default DarkMode;
