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

Mmr.defaultProps = {
  winRate: 'unavailable',
  winTotal: 0,
  loseTotal: 0,
  drawTotal: 0,
  totalMatches: 0,
  clientId: 'unavailable',
  name: 'unavailable',
  elo: 0,
  rank: 0,
};

Mmr.propTypes = {
  winRate: PropTypes.string,
  winTotal: PropTypes.number,
  loseTotal: PropTypes.number,
  drawTotal: PropTypes.number,
  totalMatches: PropTypes.number,
  clientId: PropTypes.string,
  name: PropTypes.string,
  elo: PropTypes.number,
  rank: PropTypes.number,
};

export default Mmr;
