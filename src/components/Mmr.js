import React from 'react';
import PropTypes from 'prop-types';

function Mmr({
  clientId, name, elo, rank, winRate, winTotal,
  loseTotal, drawTotal, totalMatches,
}) {
  return (
    <>
      <p>
        Client id:
        { clientId }
      </p>
      <p>
        Name:
        { name }
      </p>
      <p>
        Elo:
        { elo }
      </p>
      <p>
        Rank:
        { rank }
      </p>
      <p>
        Win rate (%):
        { winRate }
      </p>
      <p>
        Win total:
        { winTotal }
      </p>
      <p>
        Lose total:
        { loseTotal }
      </p>
      <p>
        Draw total:
        { drawTotal }
      </p>
      <p>
        Total matches:
        { totalMatches }
      </p>
    </>
  );
}

Mmr.propTypes = {
  winRate: PropTypes.string.isRequired,
  winTotal: PropTypes.number.isRequired,
  loseTotal: PropTypes.number.isRequired,
  drawTotal: PropTypes.number.isRequired,
  totalMatches: PropTypes.number.isRequired,
  clientId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  elo: PropTypes.number.isRequired,
  rank: PropTypes.number.isRequired,
};

export default Mmr;
