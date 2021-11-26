import { getAxies } from '../services/API';

// default
const initialState = {
  total: 0,
  id: 0,
  name: 'unavailable',
  breedCount: 0,
  image: 'unavailable',
  parts: 'nohing to show',
};

// action indicator
const GET_AXIES_DATA = 'scholar/details/GET_AXIES_DATA;';

// action
const getAxiesAction = () => async (dispatch) => {
  const axies = await getAxies();
  dispatch(
    {
      type: GET_AXIES_DATA,
      payload: axies,
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
