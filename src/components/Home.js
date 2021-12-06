import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  Row, Col, Form, Button, Badge, Image,
} from 'react-bootstrap';
import {
  TopBar, ID, IdTitle, Title,
} from '../styles/topBar.styles';
import useDatahooks from '../hooks/useDatahooks';
import icon from '../assets/icon/icon.png';
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
      <Row className="shadow-sm bg-highDarkPurple p-0 rounded">
        <Col md={12} className="p-0 mt-3">
          <TopBar className="d-flex align-items-center justify-content-between flex-wrap">
            <Title>
              <Image fluid src={icon} height={100} width={100} className="icon" />
              Axie CB Scholars
            </Title>
            <Form onSubmit={(e) => handleRonin(e, roninRef)} className="d-flex">
              <Form.Control type="text" ref={roninRef} required placeholder="Write token" />
              <Button type="submit" className="primary ms-3 ps-4 pe-4 bg-darkPurple fs-5 fw-bold border-0">
                Track
              </Button>
            </Form>
            <ID className="mt-3">
              <IdTitle>
                Last id:
              </IdTitle>
              <Badge className="p-2 fs-6 bg-darkPurple ms-2">
                { mmr[0].clientId }
              </Badge>
            </ID>
          </TopBar>
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
