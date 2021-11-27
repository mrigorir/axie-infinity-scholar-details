import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import useDatahooks from '../hooks/useDatahooks';
import Slp from './Slp';
import Mmr from './Mmr';
import Message from './Message';
import Loading from './Loading';
import Axie from './Axie';

function Home() {
  const hooks = useDatahooks();
  const {
    errorMessageSLP, errorMessageMMR, errorMessageAxies, slp, mmr, axies,
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
      <h1>
        {errorMessageAxies && <Message message={errorMessageAxies} />}
      </h1>
      <div>
        SLP:
        {(elo === 0 || lastClaim === 0) ? <Loading />
          : (
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
          )}
      </div>
      <div>
        MMR:
        {(elo === 0 || lastClaim === 0) ? <Loading />
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
      Axies:
      {axies.results === 0 ? <Loading />
        : (
          <ul>
            Total:
            {axies[0].total}
            {axies[0].results.map((axie) => {
              const {
                id, name, breedCount, image, parts,
              } = axie;
              return (
                <li key={uuidv4()}>
                  <Axie
                    id={id}
                    name={name}
                    type={axie.class}
                    breedCount={breedCount}
                    image={image}
                    parts={parts}
                  />
                </li>
              );
            })}
          </ul>
        )}

    </>
  );
}

export default Home;
