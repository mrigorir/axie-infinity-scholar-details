import React from 'react';
import { Container } from 'react-bootstrap';
import GlobalStyle from './styles/GlobalStyle';
import Home from './components/Home';

function App() {
  return (
    <>
      <Container fluid>
        <Container className="bg-info shadow-lg border border-secondary">
          <Home />
        </Container>
      </Container>
      <GlobalStyle />
    </>
  );
}

export default App;
