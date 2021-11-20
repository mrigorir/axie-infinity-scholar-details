import React from 'react';
import PropTypes from 'prop-types';

function HomeDetails({
  todaySoFar, yesterdaySLP, average, totalSLP,
  lastClaim, nextClaim, lifetimeSLP, roninSLP, inGameSLP,
}) {
  return (
    <>
      <p>
        SLP made yesterday
        { yesterdaySLP }
      </p>
      <p>
        SLP made today:
        { todaySoFar }
      </p>
      <p>
        Current average:
        { average }
      </p>
      <p>
        Total SLP:
        { totalSLP }
      </p>
      <p>
        Last claim:
        { lastClaim }
      </p>
      <p>
        Next Claim:
        { nextClaim }
      </p>
      <p>
        Lifetime SLP:
        { lifetimeSLP }
      </p>
      <p>
        SLP available at ronin:
        { roninSLP }
      </p>
      <p>
        SLP in game:
        { inGameSLP }
      </p>
      <p />
    </>
  );
}

HomeDetails.defaultProps = {
  yesterdaySLP: 0,
  todaySoFar: 0,
  average: 0,
  totalSLP: 0,
  lastClaim: 0,
  nextClaim: 0,
  lifetimeSLP: 0,
  roninSLP: 0,
  inGameSLP: 0,
};

HomeDetails.propTypes = {
  yesterdaySLP: PropTypes.number,
  todaySoFar: PropTypes.number,
  average: PropTypes.number,
  totalSLP: PropTypes.number,
  lastClaim: PropTypes.number,
  nextClaim: PropTypes.number,
  lifetimeSLP: PropTypes.number,
  roninSLP: PropTypes.number,
  inGameSLP: PropTypes.number,
};

export default HomeDetails;
