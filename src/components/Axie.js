import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

function Axie({
  id, name, type, breedCount, image, parts,
}) {
  return (
    <>
      <p>
        id:
        {' '}
        {id}
      </p>
      <p>
        name:
        {' '}
        {name}
      </p>
      <p>
        type:
        {' '}
        {type}
      </p>
      <p>
        breedCount:
        {' '}
        {breedCount}
      </p>
      <p>
        image:
        {' '}
        {image}
      </p>
      parts:
      {parts.map((part) => (
        <p key={uuidv4()}>
          {part.name}
        </p>
      ))}
    </>
  );
}

Axie.defaultProps = {
  id: '',
  name: '',
  type: '',
  breedCount: 0,
  image: '',
  parts: [{}],
};

Axie.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  breedCount: PropTypes.number,
  image: PropTypes.string,
  parts: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.string])),
};

export default Axie;
