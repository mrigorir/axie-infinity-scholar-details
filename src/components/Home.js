import React from 'react';
import useDatahooks from '../hooks/useDatahooks';
import Slp from './Slp';
import Mmr from './Mmr';
import Message from './Message';

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
        {errorMessageSLP && <Message message={errorMessageSLP} />}
      </h1>
      <h1>
        {errorMessageMMR && <Message message={errorMessageMMR} />}
      </h1>
      <Slp
        todaySoFar={todaySoFar}
        yesterdaySLP={yesterdaySLP}
        average={average}
        totalSLP={totalSLP}
        lastClaim={lastClaim}
        nextClaim={nextClaim}
        lifetimeSLP={lifetimeSLP}
        roninSLP={roninSLP}
        inGameSLP={inGameSLP}
      />
      <Mmr
        clientId={clientId}
        name={name}
        elo={elo}
        rank={rank}
        winRate={winRate}
        winTotal={winTotal}
        loseTotal={loseTotal}
        drawTotal={drawTotal}
        totalMatches={totalMatches}
      />
    </>
  );
}

export default Home;
