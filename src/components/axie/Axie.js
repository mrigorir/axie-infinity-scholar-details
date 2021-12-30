import React from 'react';
import PropTypes from 'prop-types';
import { Image, Table } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

function Axie({ axies }) {
  const axieInfo = axies[0].results;
  console.log(axieInfo);
  return (
    <>
      <Table hover className="text-center bg-table text-color-table-title axie-list" responsive>
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
              id, name, breedCount, image, type,
            } = axie;
            return (
              <tr key={uuidv4()} className="bg-table">
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
              </tr>
            );
          })}
        </tbody>
      </Table>
      parts:
      {axieInfo.map((axie) => {
        const { parts } = axie;
        return (
          parts.map((part) => (
            <p key={uuidv4()}>
              {part.name}
            </p>
          ))
        );
      })}
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
