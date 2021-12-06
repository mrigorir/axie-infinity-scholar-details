import styled from 'styled-components';

const TopBar = styled.div`
  border-bottom: solid 2px var(--medPurple);
  padding-bottom: 5px;
`;

const ID = styled.p`
  display: flex;
  align-items: center;
  margin-right: 10px;
  background-color: var(--lightPurple);
  padding: 20px;
  border-radius: 10px;
`;

const IdTitle = styled.span`
  font-weight: bold;
  font-size: 18px;
  color: var(--medGrey);
`;

const Title = styled.h2`
  color: var(--white);
  font-weight: bold;
  padding-right: 15px;
  font-size: 30px;
  text-decoration: underline;
  border-right: solid 3px var(--darkPurple);
`;

export {
  TopBar, ID, IdTitle, Title,
};
