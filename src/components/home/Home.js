import React from 'react';
import {
  Row, Col,
} from 'react-bootstrap';
import useDatahooks from '../../hooks/useDatahooks';
import Slp from '../slp/Slp';
import Mmr from '../mmr/Mmr';
import Message from '../messages/Message';
import Loading from '../loader/Loading';
import Axie from '../axie/Axie';
import Mainbar from './Mainbar';
import Header from '../../styles/Header.style';
import CardWrapper from '../../styles/CardWrapper.styles';

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
        <Col md={12} className="p-0 bg-section-1">
          <Header className="bg-main-title color-main-title">
            SLP
          </Header>
        </Col>
      </Row>
      <Row>
        <Col md={12} className="p-4 bg-section-1">
          {(mmr[0].elo === 0 || slp[0].totalSLP === 0) ? <Loading />
            : (
              <CardWrapper>
                <Slp slp={slp} stored={storedDetails} />
              </CardWrapper>
            )}
        </Col>
      </Row>
      <Row>
        <Col md={12} className="p-0 bg-section-2">
          <Header className="bg-main-title color-main-title">
            MMR
          </Header>
        </Col>
      </Row>
      <Row>
        <Col md={12} className="py-4 bg-section-2">
          {(mmr[0].elo === 0 || slp[0].totalSLP === 0) ? <Loading />
            : (
              <CardWrapper>
                <Mmr mmr={mmr} />
              </CardWrapper>
            )}
        </Col>
      </Row>
      <Row>
        <Col md={12} className="p-0 bg-section-3 bg-darkBlue">
          <Header className="bg-main-title color-main-title">
            Axies
          </Header>
        </Col>
      </Row>
      <Row>
        <Col md={12} className="p-4 bg-section-3 bg-darkBlue">
          {axies.results === 0 ? <Loading /> : <Axie axies={axies} /> }
        </Col>
      </Row>
    </>
  );
}

export default Home;
