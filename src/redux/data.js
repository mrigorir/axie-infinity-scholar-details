import { getSlpStats, getLunacia } from '../services/API';

// default
const initialState = [
  {
    totalSLP: 0,
    claimableTotal: 0,
    lastClaim: 0,
    nextClaim: 0,
    lifetimeSLP: 0,
    roninSLP: 0,
    inGameSLP: 0,
    yesterdaySLP: 0,
    todaySoFar: 0,
    average: 0,
  },
];

// action indicator
const GET_SLP_STATUS = 'scholar/details/GET_SLP_STATUS';

// action
const getSlpAction = () => async (dispatch) => {
  const stats = await getSlpStats();
  const {
    todaySoFar, yesterdaySLP, average, winRate,
  } = stats[0];
  const lunacia = await getLunacia();
  const {
    totalSLP, lastClaim, nextClaim, lifetimeSLP, roninSLP, inGameSLP,
    winTotal, loseTotal, drawTotal, totalMatches,
  } = lunacia[0];
  const slp = [
    {
      todaySoFar,
      yesterdaySLP,
      average,
      winRate,
      winTotal,
      loseTotal,
      drawTotal,
      totalMatches,
      totalSLP,
      lastClaim,
      nextClaim,
      lifetimeSLP,
      roninSLP,
      inGameSLP,
    },
  ];
  dispatch({
    type: GET_SLP_STATUS,
    payload: slp,
  });
};

// reducer
const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SLP_STATUS:
      return [...action.payload];
    default:
      return state;
  }
};

export {
  detailsReducer, getSlpAction,
};
