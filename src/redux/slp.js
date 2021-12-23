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
      url: 'https://lh3.google.com/u/0/d/1GAqE8JQRHZJbf6zQBdccM2oPS38XzbBN=w200-h190-p-k-nu-iv1',
    },
    {
      title: 'SLP made so far',
      data: todaySoFar,
      url: 'https://lh3.google.com/u/0/d/1oFW0dAEjHKIOs97r-1ZJ4vx9Cgpt2-tP=w200-h190-p-k-nu-iv1',
    },
    {
      title: 'SLP made yesterday',
      data: yesterdaySLP,
      url: 'https://lh3.google.com/u/0/d/1T2S4_HixnSgqkiBYlpmJC_e-ytiFaY6q=w200-h190-p-k-nu-iv1',
    },
    {
      title: 'Average',
      data: average,
      url: 'https://lh3.google.com/u/0/d/15mLfI6sDGjftGfOaAjLh8kjS5DF0EK2E=w200-h190-p-k-nu-iv1',
    },
    {
      title: 'Win rate',
      data: winRate,
      url: 'https://lh3.google.com/u/0/d/1Yaj1pvs-ARQYOiKI5HyZNG-xsrvZv0C7=w200-h190-p-k-nu-iv1',
    },
    {
      title: 'Total SLP',
      data: totalSLP,
      url: 'https://lh3.google.com/u/0/d/1aLs9Er-UkkFnNm8_Ywo-hjYSkSFf_zIU=w200-h190-p-k-nu-iv1',
    },
    {
      title: ' Last claim',
      data: lastClaim,
      url: 'https://lh3.google.com/u/0/d/1wXRAPWUrK_6bsEoqTuBkjqfo7bfYMQ_J=w200-h190-p-k-nu-iv1',
    },
    {
      title: 'Next Claim',
      data: nextClaim,
      url: 'https://lh3.google.com/u/0/d/1DKYrs83EnQFVTtBndV8HGHEyNo3smHhs=w200-h190-p-k-nu-iv1',
    },
    {
      title: 'SLP at ronin',
      data: roninSLP,
      url: 'https://lh3.google.com/u/0/d/1XSQLVGEtfWqp5H2EpAfTB6oeNJ_s8wAP=w200-h190-p-k-nu-iv1',
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
