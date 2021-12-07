import styled from 'styled-components';

const TopBar = styled.div`
  border-bottom: solid 2px var(--lightBlue);
  padding-bottom: 5px;
  }
`;

const ID = styled.p`
  display: flex;
  align-items: center;
  margin-right: 10px;

  @media screen and (max-width: 520px) {
    margin-right: 0;
  }
`;

const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export {
  TopBar, ID, Title,
};
