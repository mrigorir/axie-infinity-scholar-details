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
    totalSLP, lastClaim, nextClaim, roninSLP, inGameSLP,
  } = lunacia[0];
  const slp = [
    {
      title: 'SLP in game',
      data: inGameSLP,
      url: 'https://live.staticflickr.com/65535/51762558501_a3682868f0_n.jpg',
    },
    {
      title: 'SLP made so far',
      data: todaySoFar,
      url: '../../assets/images/slp/slp-',
    },
    {
      title: 'SLP made yesterday',
      data: yesterdaySLP,
      url: '../../assets/images/slp/slp-',
    },
    {
      title: 'Average',
      data: average,
      url: '../../assets/images/slp/slp-',
    },
    {
      title: 'Win rate',
      data: winRate,
      url: '../../assets/images/slp/slp-',
    },
    {
      title: 'Total SLP',
      data: totalSLP,
      url: '../../assets/images/slp/slp-',
    },
    {
      title: ' Last claim',
      data: lastClaim,
      url: '../../assets/images/slp/slp-',
    },
    {
      title: 'Next Claim',
      data: nextClaim,
      url: '../../assets/images/slp/slp-',
    },
    {
      title: 'SLP at ronin',
      data: roninSLP,
      url: '../../assets/images/slp/slp-',
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
