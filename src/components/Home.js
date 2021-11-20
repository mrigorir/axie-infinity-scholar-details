import React from 'react';
import useDatahooks from '../hooks/useDatahooks';
import HomeDetails from './HomeDetails';

function Home() {
  const hooks = useDatahooks();
  const {
    errorMessageMMR, errorMessageSLP, slp, mmr,
  } = hooks;
  const {
    todaySoFar, yesterdaySLP, average, totalSLP,
    lastClaim, nextClaim, lifetimeSLP, roninSLP, inGameSLP,
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
