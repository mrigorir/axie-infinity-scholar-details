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
      url: 'https://drive.google.com/uc?export=view&id=1vVfcKSmxqCoyicMAmxoPKiWEkIoPzLpc&rl',
    },
    {
      title: 'Name',
      data: name,
      url: 'https://drive.google.com/uc?export=view&id=1uR1l4nnBTAyBQF08ZEdLqEDo_muwRXQQ&rl',
    },
    {
      title: 'Current ELO',
      data: elo,
      url: 'https://drive.google.com/uc?export=view&id=1qIfSjga1iBij3ycbs7FVuLR_FpeqK8-8&rl',
    },
    {
      title: 'Current Rank',
      data: rank,
      url: 'https://drive.google.com/uc?export=view&id=1GVhnCaTmw3W5RCPxy2KXU2pyae-0zFFw&rl',
    },
    {
      title: 'Win Total',
      data: winTotal,
      url: 'https://drive.google.com/uc?export=view&id=1zmJVEKLWdIrho0s1ZuNgpmEmhztLF2nQ&rl',
    },
    {
      title: 'Lose Total',
      data: loseTotal,
      url: 'https://drive.google.com/uc?export=view&id=1WJqMtPijAwrFQdEaoG8D5hcMFenR6KU4&rl',
    },
    {
      title: 'Draw Total',
      data: drawTotal,
      url: 'https://drive.google.com/uc?export=view&id=18ngLZvcCfdcjSBKyiNmbhB7VYWsBZlsk&rl',
    },
    {
      title: 'Total Matches',
      data: totalMatches,
      url: 'https://drive.google.com/uc?export=view&id=1cdC7KFbNb8mfZN-JchlbgZHBioGmDzVj&rl',
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
