import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { Card } from 'react-bootstrap';

function Mmr({ mmr }) {
  return (
    <>
      {mmr.map((mmr) => {
        const { title, data } = mmr;
        return (
          <Card style={{ width: '18rem', borderRadius: '20px' }} key={uuidv4()} className="shadow-sm border-0 p-2 m-3">
            <Card.Body className="d-flex align-items-center justify-content-between">
              <div>
                <Card.Title className="text-color-section-title fw-bold fs-5 pb-4">
                  { title }
                </Card.Title>
                <Card.Text className="truncate text-color-section-text fw-bold fs-6">
                  { data }
                </Card.Text>
              </div>
              {/* <Card.Img src={url} width={100} height={100} className="ms-4" /> */}
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
}

Mmr.propTypes = {
  mmr: PropTypes.oneOfType([PropTypes.array]).isRequired,
};

export default Mmr;
