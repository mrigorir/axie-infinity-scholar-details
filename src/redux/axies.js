import { getAxies } from '../services/API';

// default
const initialState = {
  total: 0,
  results: 0,
};

// action indicator
const GET_AXIES_DATA = 'scholar/details/GET_AXIES_DATA;';

// action
const getAxiesAction = () => async (dispatch) => {
  const axies = await getAxies();
  const axiesData = [
    {
      total: axies[0].total,
      results: axies[0].results,
    },
  ];
  dispatch(
    {
      type: GET_AXIES_DATA,
      payload: axiesData,
    },
  );
};

// reducer
const axiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_AXIES_DATA:
      return [...action.payload];
    default:
      return state;
  }
};

export { getAxiesAction, axiesReducer };
