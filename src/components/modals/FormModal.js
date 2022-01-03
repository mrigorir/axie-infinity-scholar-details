import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Button, Modal, CloseButton, Form,
} from 'react-bootstrap';
import Wrapper from '../../styles/FormWrapper.styles';
import ModalButtonWrapper from '../../styles/ModalButtonWrapper.styles';

const FormModal = ({
  roninRef, managerPerRef, scholarPerRef,
  handleRonin, handlePercentage, percentage,
}) => {
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

      <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header className="text-white fs-5 fw-bold py-4 bg-outerModal text-uppercase border-0">
          Scholar details
          <CloseButton className="btn-close-white border border-3 border-info p-2" onClick={handleClose} />
        </Modal.Header>
        <Modal.Body className="p-0 bg-innerModal">
          <Form onSubmit={(e) => handleRonin(e, roninRef, managerPerRef, scholarPerRef)}>
            <Form.Group className="p-3">
              <Form.Label> Ronin address with 0x format </Form.Label>
              <Form.Control size="lg" type="text" ref={roninRef} placeholder="0x0a10f1c0f1959..." required />
            </Form.Group>
            <Form.Group className="p-3">
              <Form.Label> Scholar Percentage </Form.Label>
              <Form.Control size="lg" type="text" ref={scholarPerRef} placeholder="0" onKeyUp={handlePercentage} required />
            </Form.Group>
            <Form.Group className="mb-3 p-3">
              <Form.Label> Manager Percentage </Form.Label>
              <Form.Control size="lg" type="text" ref={managerPerRef} value={percentage} disabled />
            </Form.Group>
            <ModalButtonWrapper className="d-flex align-items-center justify-content-center mt-2 p-3 bg-outerModal">
              <Form.Group>
                <Button
                  type="submit"
                  className="primary ms-3 fw-bold border-0 track-button-modal"
                  id="submitDetails"
                >
                  Track
                </Button>
                <Button
                  onClick={handleClose}
                  className="btn btn-primary ms-3 fw-bold border-0 px-5 fs-5 close-button-modal"
                  id="submitDetails"
                >
                  Close
                </Button>
              </Form.Group>
            </ModalButtonWrapper>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

FormModal.propTypes = {
  managerPerRef: PropTypes.oneOfType([PropTypes.object]).isRequired,
  scholarPerRef: PropTypes.oneOfType([PropTypes.object]).isRequired,
  roninRef: PropTypes.oneOfType([PropTypes.object]).isRequired,
  handleRonin: PropTypes.func.isRequired,
  handlePercentage: PropTypes.func.isRequired,
  percentage: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default FormModal;
