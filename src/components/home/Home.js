import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Row, Col } from 'react-bootstrap';
import useDatahooks from '../../hooks/useDatahooks';
import Slp from '../slp/Slp';
import Mmr from '../mmr/Mmr';
import Message from '../messages/Message';
import Loading from '../loader/Loading';
import Axie from '../axie/Axie';
import Mainbar from './Mainbar';

function Home() {
  const hooks = useDatahooks();
  const {
    slp, mmr, axies, roninRef, errorMessageAxies,
    errorMessageMMR, errorMessageSLP, handleRonin,
    managerPerRef,
  } = hooks;

  return (
    <>
      <Row className="shadow-sm bg-dark-blue p-0 rounded">
        <Col md={12} className="p-0 mt-3">
          <Mainbar
            roninRef={roninRef}
            managerPerRef={managerPerRef}
            handleRonin={handleRonin}
          />
        </Col>
      </Row>
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
