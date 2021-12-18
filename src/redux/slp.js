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
const getSlpAction = (id) => async (dispatch) => {
  const stats = await getSlpStats(id);
  const {
    todaySoFar, yesterdaySLP, average, winRate,
  } = stats[0];
  const lunacia = await getLunacia(id);
  const {
    totalSLP, lastClaim, nextClaim, lifetimeSLP, roninSLP, inGameSLP,
  } = lunacia[0];
  const slp = [
    {
      title: 'SLP in game',
      data: inGameSLP,
    },
    {
      title: 'SLP made so far',
      data: todaySoFar,
    },
    {
      title: 'SLP made yesterday',
      data: yesterdaySLP,
    },
    {
      title: 'Average',
      data: average,
    },
    {
      title: 'Win rate',
      data: winRate,
    },
    {
      title: 'Total SLP',
      data: totalSLP,
    },
    {
      title: ' Last claim',
      data: lastClaim,
    },
    {
      title: 'Next Claim',
      data: nextClaim,
    },
    {
      title: 'Lifetime SLP',
      data: lifetimeSLP,
    },
    {
      title: 'SLP at ronin',
      data: roninSLP,
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
