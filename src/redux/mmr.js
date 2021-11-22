import { getMmr } from '../services/API';

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
const getMmrAction = () => async (dispatch) => {
  const mmr = await getMmr();
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
