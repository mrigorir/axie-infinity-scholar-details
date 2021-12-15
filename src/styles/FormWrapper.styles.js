import styled from 'styled-components';

const Wrapper = styled.div`
  border-left: dashed 3px var(--topBarBorder);
  border-right: dashed 3px var(--topBarBorder);
  padding: 0 100px;

  @media screen and (max-width: 520px) {
    border: none;
    padding: 0;
    margin: 10px 0 20px 0;

    .track-button {
      font-size: 30px;
      transition: all ease 1s;
    }
  }

  @media screen and (min-width: 600px) and (max-width: 1024px) {
    border: none;
    padding: 30px 0;
    margin: 10px 0 20px 0;
  }

  }
`;

export default Wrapper;
