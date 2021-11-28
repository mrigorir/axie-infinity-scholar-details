import React, { useState } from 'react';
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
    slp, mmr, axies, dispatch, getMmrAction, getAxiesAction, getSlpAction,
    roninRef,
  } = hooks;
  const [errorMessageMMR, setErrorMessageMMR] = useState('');
  const [errorMessageSLP, setErrorMessageSLP] = useState('');
  const [errorMessageAxies, setErrorMessageAxies] = useState('');

  const handleRonin = (e) => {
    const ronin = roninRef.current.value;
    e.preventDefault();
    dispatch(getSlpAction(ronin)).catch((error) => setErrorMessageSLP(`SLP: ${error.message}`));
    dispatch(getMmrAction(ronin)).catch((error) => setErrorMessageMMR(`MMR: ${error.message}`));
    dispatch(getAxiesAction(ronin)).catch((error) => setErrorMessageAxies(`Axies data: ${error.message}`));
  };

  return (
    <>
      <form onSubmit={handleRonin}>
        <input type="text" ref={roninRef} required />
        <button type="submit">
          identify player
        </button>
      </form>
      <div>
        <h1>
          {errorMessageSLP && <Message message={errorMessageSLP} />}
        </h1>
        <h1>
          {errorMessageMMR && <Message message={errorMessageMMR} />}
        </h1>
        <h1>
          {errorMessageAxies && <Message message={errorMessageAxies} />}
        </h1>
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
