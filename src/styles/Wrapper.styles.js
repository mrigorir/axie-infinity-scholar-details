import styled from 'styled-components';
import background from '../assets/background/background.jpg';

const Wrapper = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-image: url(${background});
  box-shadow:inset 0 0 0 2000px rgba(0, 0, 0, 0.9);
  width: 100%;
  height: 100%;
`;

export default Wrapper;
