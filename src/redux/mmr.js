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
    },
    {
      title: 'Name',
      data: name,
    },
    {
      title: 'Current ELO',
      data: elo,
    },
    {
      title: 'Current Rank',
      data: rank,
    },
    {
      title: 'Win Total',
      data: winTotal,
    },
    {
      title: 'Lose Total',
      data: loseTotal,
    },
    {
      title: 'Draw Total',
      data: drawTotal,
    },
    {
      title: 'Total Matches',
      data: totalMatches,
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
