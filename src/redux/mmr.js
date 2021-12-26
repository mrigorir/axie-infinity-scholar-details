import { getLunacia, getMmr } from '../services/API';

// default
const initialState = [
  {
    clientId: 'unavailable',
    name: 'unavailable',
    elo: 0,
    rank: 0,
  },
];

// action indicator
const GET_MMR = 'scholar/details/GET_MMR';

// action
const getMmrAction = (id) => async (dispatch) => {
  const mmrData = await getMmr(id);
  const mmrData2 = await getLunacia(id);
  const {
    clientId, name, elo, rank,
  } = mmrData[0];
  const {
    winTotal, loseTotal,
    drawTotal, totalMatches,
  } = mmrData2[0];

  const mmr = [
    {
      title: 'Client ID',
      data: clientId,
      url: 'https://lh3.google.com/u/0/d/1vVfcKSmxqCoyicMAmxoPKiWEkIoPzLpc=w200-h190-p-k-nu-iv2',
    },
    {
      title: 'Name',
      data: name,
      url: 'https://lh3.google.com/u/0/d/1uR1l4nnBTAyBQF08ZEdLqEDo_muwRXQQ=w200-h190-p-k-nu-iv1',
    },
    {
      title: 'Current ELO',
      data: elo,
      url: 'https://lh3.google.com/u/0/d/1qIfSjga1iBij3ycbs7FVuLR_FpeqK8-8=w200-h190-p-k-nu-iv1',
    },
    {
      title: 'Current Rank',
      data: rank,
      url: 'https://lh3.google.com/u/0/d/1GVhnCaTmw3W5RCPxy2KXU2pyae-0zFFw=w200-h190-p-k-nu-iv1',
    },
    {
      title: 'Win Total',
      data: winTotal,
      url: 'https://lh3.google.com/u/0/d/1zmJVEKLWdIrho0s1ZuNgpmEmhztLF2nQ=w200-h190-p-k-nu-iv1',
    },
    {
      title: 'Lose Total',
      data: loseTotal,
      url: 'https://lh3.google.com/u/0/d/1WJqMtPijAwrFQdEaoG8D5hcMFenR6KU4=w200-h190-p-k-nu-iv1',
    },
    {
      title: 'Draw Total',
      data: drawTotal,
      url: 'https://lh3.google.com/u/0/d/18ngLZvcCfdcjSBKyiNmbhB7VYWsBZlsk=w200-h190-p-k-nu-iv1',
    },
    {
      title: 'Total Matches',
      data: totalMatches,
      url: 'https://lh3.google.com/u/0/d/1cdC7KFbNb8mfZN-JchlbgZHBioGmDzVj=w200-h190-p-k-nu-iv1',
    },
  ];
  dispatch({
    type: GET_MMR,
    payload: mmr,
  });
};

// reducer
const mmrReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MMR:
      return [...action.payload];
    default:
      return state;
  }
};

export { mmrReducer, getMmrAction };
