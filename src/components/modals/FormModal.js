import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Button, Modal, CloseButton, Form,
} from 'react-bootstrap';
import Wrapper from '../../styles/FormWrapper.styles';

const FormModal = ({ roninRef, managerPerRef, handleRonin }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Wrapper>
        <Button onClick={handleShow} className="btn btn-primary track-button border-0 fw-bold fs-3 px-5 half-circled">
          <FontAwesomeIcon icon={['fas', 'fire']} className="me-2" />
          Track Account
        </Button>
      </Wrapper>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="bg-dark-purple text-white fs-4 fw-bold">
          Input scholar details
          <CloseButton className="btn-close-white border border-3 border-info p-2" onClick={handleClose} />
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => handleRonin(e, roninRef)} className="d-flex">
            <Form.Control type="text" ref={managerPerRef} required placeholder="Manager Percentage" />
            <Form.Control type="text" ref={roninRef} required placeholder="Ronin address with 0x format" />
            <Modal.Footer>
              <Button type="submit" className="primary ms-3 ps-4 pe-4 fs-5 fw-bold border-0">
                Track
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

FormModal.propTypes = {
  managerPerRef: PropTypes.number.isRequired,
  roninRef: PropTypes.oneOfType([PropTypes.object]).isRequired,
  handleRonin: PropTypes.func.isRequired,
};

export default FormModal;
