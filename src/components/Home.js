import React from 'react';
import useDatahooks from '../hooks/useDatahooks';
import HomeDetails from './HomeDetails';

function Home() {
  const hooks = useDatahooks();
  const {
    errorMessageMMR, errorMessageSLP, slp, mmr,
  } = hooks;
  const {
    todaySoFar, yesterdaySLP, average, winRate, totalSLP,
    lastClaim, nextClaim, lifetimeSLP, roninSLP, inGameSLP,
    winTotal, loseTotal, drawTotal, totalMatches,
  } = slp[0];
  const {
    clientId, name, elo, rank,
  } = mmr[0];
  return (
    <>
      <h1>
        {errorMessageSLP}
      </h1>
      <h1>
        {errorMessageMMR}
      </h1>
      <HomeDetails
        todaySoFar={todaySoFar}
        yesterdaySLP={yesterdaySLP}
        average={average}
        winRate={winRate}
        winTotal={winTotal}
        loseTotal={loseTotal}
        drawTotal={drawTotal}
        totalMatches={totalMatches}
        totalSLP={totalSLP}
        lastClaim={lastClaim}
        nextClaim={nextClaim}
        lifetimeSLP={lifetimeSLP}
        roninSLP={roninSLP}
        inGameSLP={inGameSLP}
        clientId={clientId}
        name={name}
        elo={elo}
        rank={rank}
      />
    </>
  );
}

export default Home;
