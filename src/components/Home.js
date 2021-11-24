import React, { lazy, Suspense } from 'react';
import useDatahooks from '../hooks/useDatahooks';
// import Slp from './Slp';
// import Mmr from './Mmr';
import Message from './Message';
import Loading from './Loading';

const Slp = lazy(() => import('./Slp'));
const Mmr = lazy(() => import('./Mmr'));

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
      <div>
        SLP:
        <h1>
          {errorMessageSLP && <Message message={errorMessageSLP} />}
        </h1>
        <Suspense fallback={<Loading />}>
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
        </Suspense>
      </div>
      <div>
        MMR:
        <h1>
          {errorMessageMMR && <Message message={errorMessageMMR} />}
        </h1>
        <h1>
          {errorMessageSLP && <Message message={errorMessageSLP} />}
        </h1>
        {elo === 0 ? <Loading />
          : (
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
          )}
      </div>
    </>
  );
}

export default Home;
