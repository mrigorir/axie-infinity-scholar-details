import React from 'react';
import { Container } from 'react-bootstrap';
import GlobalStyle from './styles/GlobalStyle';
import Home from './components/Home';
import Wrapper from './styles/Wrapper.styles';

function App() {
  return (
    <Wrapper>
      <Container fluid className="py-5 m-0">
        <Container className="shadow-sm bg-grey rounded">
          <Home />
        </Container>
      </Container>
      <GlobalStyle />
    </Wrapper>
  );
}

export default App;
