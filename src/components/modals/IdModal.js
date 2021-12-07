import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Button, Modal, Badge, CloseButton,
} from 'react-bootstrap';
import Loading from '../loader/Loading';

const IdModal = ({ mmr }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const id = mmr[0].clientId;

  return (
    <>
      <Button onClick={handleShow} variant="outline-info" className="fw-bold fs-5 me-2 px-4 id-button">
        <FontAwesomeIcon icon={['fas', 'user']} className="me-3 fs-4" />
        Current id
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="bg-dark-blue text-white fs-4 fw-bold">
          Last Id
          <CloseButton className="btn-close-white border border-3 border-info p-2" onClick={handleClose} />
        </Modal.Header>
        <Modal.Body className="bg-white text-center">
          <Badge bg="primary" className="p-2 fs-6 truncate">
            { id !== 0 ? id : <Loading /> }
          </Badge>
        </Modal.Body>
        <Modal.Footer className="d-flex align-items-center justify-content-center bg-dark-blue">
          <Button onClick={handleClose} className="fw-bold fs-5 px-5 btn btn-primary">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

IdModal.propTypes = {
  mmr: PropTypes.oneOfType([PropTypes.array]).isRequired,
};

export default IdModal;
