import styled from 'styled-components';
import background from '../assets/background/background.jpg';

const Wrapper = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-image: url(${background});
  box-shadow: var(--boxShadowBody);
  width: 100%;
  height: 100%;
  transition: all ease-in-out .4s;
`;

export default Wrapper;
