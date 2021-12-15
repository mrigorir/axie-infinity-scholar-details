import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'react-bootstrap';
import GlobalStyle from './styles/GlobalStyle';
import Home from './components/home/Home';
import Wrapper from './styles/Wrapper.styles';

library.add(fas);

function App() {
  return (
    <Wrapper>
      <Container fluid className="py-5 m-0">
        <Container className="shadow-sm rounded bg-main-content">
          <Home />
        </Container>
      </Container>
      <GlobalStyle />
    </Wrapper>
  );
}

export default App;
