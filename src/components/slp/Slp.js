import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { Card } from 'react-bootstrap';
import icon from '../../assets/icon/icon.png';

function Slp({ slp, stored }) {
  return (
    <>
      {stored.map((stored) => {
        const { title, data } = stored;
        return (
          <Card style={{ width: '18rem' }} key={uuidv4()}>
            <Card.Img variant="top" src={icon} />
            <Card.Body>
              <Card.Title>{ title }</Card.Title>
              <Card.Text className="truncate">
                { title === 'Player ronin' ? data : Math.round(slp[0].data * (data / 100)) }
              </Card.Text>
            </Card.Body>
          </Card>
        );
      })}
      { slp.map((slp) => {
        const { title, data } = slp;
        return (
          <Card style={{ width: '18rem' }} key={uuidv4()}>
            <Card.Img variant="top" src={icon} />
            <Card.Body>
              <Card.Title>{ title }</Card.Title>
              <Card.Text>
                { data }
              </Card.Text>
            </Card.Body>
          </Card>
        );
      }) }
    </>
  );
}

Slp.propTypes = {
  slp: PropTypes.oneOfType([PropTypes.array]).isRequired,
  stored: PropTypes.oneOfType([PropTypes.array]).isRequired,
};

export default Slp;
