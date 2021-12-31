import React from 'react';
import { Accordion, Button, Image } from 'react-bootstrap';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import getParts from './axieParts';

function CustomToggle({ children, eventKey }) {
  const toggleOnclick = useAccordionButton(eventKey, () => console.log('Sweet!'));

  return (
    <>
      <Button variant="primary" type="button" onClick={toggleOnclick}>
        {children}
      </Button>
    </>
  );
}

function Accord({ parts }) {
  const axieParts = getParts(parts);
  return (
    <Accordion>
      <CustomToggle eventKey="0">
        <FontAwesomeIcon icon={['fas', 'angle-down']} className="fs-4 " />
      </CustomToggle>
      <Accordion.Collapse eventKey="0">
        <div>
          {axieParts.map((part) => (
            <p key={uuidv4()}>
              <Image src={part.url} alt="some axie parts" width={50} height={50} />
              <span className="mx-4">
                {part.data}
              </span>
            </p>
          ))}
        </div>
      </Accordion.Collapse>
    </Accordion>
  );
}

CustomToggle.defaultProps = {
  eventKey: '',
  children: '',
};

CustomToggle.propTypes = {
  eventKey: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Accord.propTypes = {
  parts: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.string])).isRequired,
};

export default Accord;
