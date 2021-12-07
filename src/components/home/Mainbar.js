import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';
import IdModal from '../modals/IdModal';
import icon from '../../assets/icon/icon-2.png';
import logo from '../../assets/icon/logo.png';
import FormModal from '../modals/FormModal';
import {
  TopBar, ID, Title,
} from '../../styles/Mainbar.styles';

function Mainbar({ roninRef, handleRonin, mmr }) {
  return (
    <TopBar className="d-flex align-items-center justify-content-around flex-wrap">
      <Title>
        <Image fluid src={icon} height={100} width={100} className="icon" />
        <Image fluid src={logo} height={200} width={200} />
      </Title>
      <FormModal roninRef={roninRef} handleRonin={handleRonin} />
      <ID className="mt-3">
        <IdModal mmr={mmr} />
      </ID>
    </TopBar>
  );
}

Mainbar.propTypes = {
  roninRef: PropTypes.oneOfType([PropTypes.object]).isRequired,
  handleRonin: PropTypes.func.isRequired,
  mmr: PropTypes.oneOfType([PropTypes.array]).isRequired,
};

export default Mainbar;
