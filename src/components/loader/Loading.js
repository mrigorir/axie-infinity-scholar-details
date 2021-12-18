import React from 'react';
import { Spinner } from 'react-bootstrap';
import SpinnerWrapper from '../../styles/SpinnerWrapper.styles';

function Loading() {
  return (
    <SpinnerWrapper>
      <Spinner animation="border" role="status" className="color-spinner" />
    </SpinnerWrapper>
  );
}

export default Loading;
