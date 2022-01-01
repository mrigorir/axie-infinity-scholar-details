import React from 'react';
import PropTypes from 'prop-types';
import { Image, Table } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import Accord from './Accord';

function Axie({ axies }) {
  const axieInfo = axies[0].results;

  return (
    <>
      <Table className="text-center bg-table text-color-table-title axie-list">
        <thead>
          <tr>
            <th className="p-md-4 fs-4">Axie</th>
            <th className="p-md-4 fs-4">ID</th>
            <th className="p-md-4 fs-4">Name</th>
            <th className="p-md-4 fs-4">Type</th>
            <th className="p-md-4 fs-4">Breed Count</th>
          </tr>
        </thead>
        <tbody>
          {axieInfo.map((axie) => {
            const {
              id, name, breedCount, image, parts,
            } = axie;
            return (
              <>
                <tr key={uuidv4()} className="bg-table">
                  <td className="fs-5 fw-bold d-flex align-items-center justify-content-center">
                    <Accord parts={parts} />
                    <Image fluid src={image} width={150} height={150} alt="Axie picture" className="axieInfo" />
                  </td>
                  <td className="p-md-5 fs-5 fw-bold text-color-table-text">
                    {name}
                  </td>
                  <td className="p-md-5 fs-5 fw-bold text-color-table-text">
                    {id}
                  </td>
                  <td className="p-md-5 fs-5 fw-bold text-color-table-text">
                    {axie.class}
                  </td>
                  <td className="p-md-5 fs-5 fw-bold text-color-table-text">
                    {breedCount}
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

Axie.defaultProps = {
  axies: [],
};

Axie.propTypes = {
  axies: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.string])),
};

export default Axie;
