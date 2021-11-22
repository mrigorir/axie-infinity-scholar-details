import {
  getSlpStats, getLunacia, getXpAxie,
} from '../services/API';

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
const GET_XP_AXIE = 'scholar/details/GET_XP_AXIE';

// action
const getSlpAction = () => async (dispatch) => {
  const stats = await getSlpStats();
  const { todaySoFar, yesterdaySLP, average } = stats[0];
  const lunacia = await getLunacia();
  const {
    totalSLP, lastClaim, nextClaim, lifetimeSLP, roninSLP, inGameSLP,
  } = lunacia[0];
  const slp = [
    {
      todaySoFar,
      yesterdaySLP,
      average,
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

const getXpAxieAction = () => async (dispatch) => {
  const xpAxie = await getXpAxie();
  dispatch({
    type: GET_XP_AXIE,
    payload: xpAxie,
  });
};

// reducer
const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SLP_STATUS:
      return [...action.payload];
    case GET_XP_AXIE:
      return [...action.payload];
    default:
      return state;
  }
};

export {
  detailsReducer, getSlpAction, getXpAxieAction,
};
