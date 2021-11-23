import React from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';

function Slp({
  todaySoFar, yesterdaySLP, average, totalSLP,
  lastClaim, nextClaim, lifetimeSLP, roninSLP,
  inGameSLP,
}) {
  return (
    <>
      <p> SLP </p>
      {lastClaim === 0 && <Loading />}
      {lastClaim !== 0
        && (
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
        </>
        )}
    </>
  );
}

Slp.propTypes = {
  yesterdaySLP: PropTypes.number.isRequired,
  todaySoFar: PropTypes.number.isRequired,
  average: PropTypes.number.isRequired,
  totalSLP: PropTypes.number.isRequired,
  lastClaim: PropTypes.number.isRequired,
  nextClaim: PropTypes.number.isRequired,
  lifetimeSLP: PropTypes.number.isRequired,
  roninSLP: PropTypes.number.isRequired,
  inGameSLP: PropTypes.number.isRequired,
};

export default Slp;
