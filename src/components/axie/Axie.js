import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';
// import { v4 as uuidv4 } from 'uuid';

function Axie({
  id, name, type, breedCount, image,
}) {
  return (
    <>
      <td className="p-0 fs-5 fw-bold">
        <Image fluid src={image} width={150} height={150} alt="Axie picture" className="" />
      </td>
      <td className="p-md-5 fs-5 fw-bold text-color-table-text">
        {name}
      </td>
      <td className="p-md-5 fs-5 fw-bold text-color-table-text">
        {id}
      </td>
      <td className="p-md-5 fs-5 fw-bold text-color-table-text">
        {type}
      </td>
      <td className="p-md-5 fs-5 fw-bold text-color-table-text">
        {breedCount}
      </td>
      { /* parts:
      {parts.map((part) => (
        <p key={uuidv4()}>
          {part.name}
        </p>
      ))} */}
    </>
  );
}

Axie.defaultProps = {
  id: '',
  name: '',
  type: '',
  breedCount: 0,
  image: '',
  // parts: [{}],
};

Axie.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  breedCount: PropTypes.number,
  image: PropTypes.string,
  // parts: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.string])),
};

export default Axie;
