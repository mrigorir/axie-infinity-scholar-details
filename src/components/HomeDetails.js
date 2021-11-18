import React from 'react';
import PropTypes from 'prop-types';

function HomeDetails({ yesterdaySLP, todaySoFar, average }) {
  return (
    <>
      <p>
        {' '}
        SLP made yesterday
        { yesterdaySLP }
      </p>
      <p>
        {' '}
        SLP made today:
        { todaySoFar }
      </p>
      <p>
        {' '}
        Current average:
        { average }
      </p>
    </>
  );
}

HomeDetails.defaultProps = {
  yesterdaySLP: 0,
  todaySoFar: 0,
  average: 0,
};

HomeDetails.propTypes = {
  yesterdaySLP: PropTypes.number,
  todaySoFar: PropTypes.number,
  average: PropTypes.number,
};

export default HomeDetails;
