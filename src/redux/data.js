import {
  getSlpStats, getLunacia, getMmr, getXpAxie,
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

// action indicators
const GET_SLP_STATUS = 'scholar/details/GET_SLP_STATUS';
const GET_LUNACIA = 'scholar/details/GET_LUNACIA';
const GET_MMR = 'scholar/details/GET_MMR';
const GET_XP_AXIE = 'scholar/details/GET_XP_AXIE';

// actions
const getSlpStatsAction = () => async (dispatch) => {
  const slp = await getSlpStats();
  dispatch({
    type: GET_SLP_STATUS,
    payload: slp,
  });
};

const getLunaciaAction = () => async (dispatch) => {
  const lunacia = await getLunacia();
  dispatch({
    type: GET_LUNACIA,
    payload: lunacia,
  });
};

const getMmrAction = () => async (dispatch) => {
  const mmr = await getMmr();
  dispatch({
    type: GET_MMR,
    payload: mmr,
  });
};

const getXpAxieAction = () => async (dispatch) => {
  const xpAxie = await getXpAxie();
  dispatch({
    type: GET_XP_AXIE,
    payload: xpAxie,
  });
};

// reducers
const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SLP_STATUS:
      return [...action.payload];
    case GET_LUNACIA:
      return [...action.payload];
    case GET_MMR:
      return [...action.payload];
    case GET_XP_AXIE:
      return [...action.payload];
    default:
      return state;
  }
};

export {
  detailsReducer, getLunaciaAction, getMmrAction, getSlpStatsAction, getXpAxieAction,
};
