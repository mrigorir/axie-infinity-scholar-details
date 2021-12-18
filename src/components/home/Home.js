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
import Header from '../../styles/Header.style';

function Home() {
  const hooks = useDatahooks();
  const {
    slp, mmr, axies, roninRef, errorMessageAxies,
    errorMessageMMR, errorMessageSLP, handleRonin,
    managerPerRef, scholarPerRef, handlePercentage,
    percentage, storedDetails,
  } = hooks;
  return (
    <>
      <Row className="shadow-sm bg-topbar p-0 rounded">
        <Col md={12} className="p-0 mt-3">
          <Mainbar
            roninRef={roninRef}
            managerPerRef={managerPerRef}
            scholarPerRef={scholarPerRef}
            handleRonin={handleRonin}
            handlePercentage={handlePercentage}
            percentage={percentage}
          />
        </Col>
      </Row>
      {errorMessageSLP && <Message message={errorMessageSLP} />}
      {errorMessageMMR && <Message message={errorMessageMMR} />}
      {errorMessageAxies && <Message message={errorMessageAxies} />}
      <Row>
        <Col md={12} className="p-0">
          <Header className="bg-main-title color-main-title">
            SLP
          </Header>
        </Col>
      </Row>
      <Row>
        <Col md={12} className="p-0">
          {(mmr[0].elo === 0 || slp[0].data === 0) ? <Loading />
            : (
              <Slp slp={slp} stored={storedDetails} />
            )}
        </Col>
      </Row>
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
