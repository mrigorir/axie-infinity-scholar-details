import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';
import icon from '../../assets/icon/icon-2.png';
import logo from '../../assets/icon/logo.png';
import FormModal from '../modals/FormModal';
import DarkMode from './DarkMode';
import {
  TopBar, Title, DarkModeWrapper,
} from '../../styles/Mainbar.styles';

function Mainbar({
  roninRef, managerPerRef, handleRonin,
}) {
  return (

    <TopBar className="d-flex align-items-center justify-content-around flex-wrap">
      <Title>
        <Image fluid src={icon} height={100} width={100} className="icon" />
        <Image fluid src={logo} height={200} width={200} />
      </Title>
      <FormModal roninRef={roninRef} managerPerRef={managerPerRef} handleRonin={handleRonin} />
      <DarkModeWrapper className="mt-3">
        <DarkMode />
      </DarkModeWrapper>
    </TopBar>
  );
}

Mainbar.propTypes = {
  managerPerRef: PropTypes.number.isRequired,
  roninRef: PropTypes.oneOfType([PropTypes.object]).isRequired,
  handleRonin: PropTypes.func.isRequired,
};

export default Mainbar;
