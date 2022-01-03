import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

function Message({ message }) {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body className=" d-flex flex-column align-items-center bg-error-message">
          <p className="bg-danger circled d-flex align-items-center justify-content-center">
            <FontAwesomeIcon icon={['fas', 'exclamation']} className="fw-bold fs-1 text-white" />
          </p>
          <p className="text-center fw-bold fs-1 mb-3 text-danger">
            Error!
          </p>
          <p className="text-center fw-bold fs-5 error-message-text">
            {message}
          </p>
        </Modal.Body>
        <Modal.Footer className="d-flex align-items-center justify-content-center">
          <Button variant="danger" onClick={handleClose} className="fs-4 fw-bold">
            Accept
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

Message.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Message;
