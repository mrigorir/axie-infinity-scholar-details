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
    slp, mmr, axies, roninRef, errorMessageAxies,
    errorMessageMMR, errorMessageSLP, handleRonin,
  } = hooks;

  return (
    <>
      <form onSubmit={(e) => handleRonin(e, roninRef)}>
        <input type="text" ref={roninRef} required />
        <button type="submit">
          identify player
        </button>
      </form>
      <h1>
        {errorMessageSLP && <Message message={errorMessageSLP} />}
      </h1>
      <h1>
        {errorMessageMMR && <Message message={errorMessageMMR} />}
      </h1>
      <h1>
        {errorMessageAxies && <Message message={errorMessageAxies} />}
      </h1>
      <h1>
        Last id analized:
        {' '}
        { mmr[0].clientId }
      </h1>
      <div>
        SLP:
        {(mmr[0].elo === 0 || slp[0].lastClaim === 0) ? <Loading />
          : (
            <Slp
              todaySoFar={slp[0].todaySoFar}
              yesterdaySLP={slp[0].yesterdaySLP}
              average={slp[0].average}
              totalSLP={slp[0].totalSLP}
              lastClaim={slp[0].lastClaim}
              nextClaim={slp[0].nextClaim}
              lifetimeSLP={slp[0].lifetimeSL}
              roninSLP={slp[0].roninSLP}
              inGameSLP={slp[0].inGameSLP}
            />
          )}
      </div>
      <div>
        MMR:
        {(mmr[0].elo === 0 || slp[0].lastClaim === 0) ? <Loading />
          : (
            <Mmr
              clientId={mmr[0].clientId}
              name={mmr[0].name}
              elo={mmr[0].elo}
              rank={mmr[0].rank}
              winRate={slp[0].winRate}
              winTotal={slp[0].winTotal}
              loseTotal={slp[0].loseTotal}
              drawTotal={slp[0].drawTotal}
              totalMatches={slp[0].totalMatches}
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
