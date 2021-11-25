import axios from 'axios';
import {
  mmrURL, lunaciaURL, optionAxie, id, optionsSLP,
} from './config';

const getSlpStats = async () => {
  const stats = [];

  await axios.request(optionsSLP).then((response) => {
    const { data } = response;
    stats.push(
      {
        todaySoFar: data.slp.todaySoFar,
        yesterdaySLP: data.slp.yesterdaySLP,
        average: data.slp.average,
        winRate: data.leaderboard.winRate,
      },
    );
  });

  return stats;
};

const getMmr = async () => {
  const response = await axios.get(`${mmrURL}${id}`);
  const { data } = response;
  const mmr = [
    {
      clientId: data[0].items[1].client_id,
      elo: data[0].items[1].elo,
      rank: data[0].items[1].rank,
      name: data[0].items[1].name,

    },
  ];
  return mmr;
};

const getLunacia = async () => {
  const response = await axios.get(`${lunaciaURL}${id}`);
  const { data } = response;
  const lunacia = [
    {
      totalSLP: data.total_slp,
      lastClaim: data.last_claim,
      nextClaim: data.next_claim,
      lifetimeSLP: data.lifetime_slp,
      roninSLP: data.ronin_slp,
      inGameSLP: data.in_game_slp,
      winTotal: data.win_total,
      loseTotal: data.lose_total,
      drawTotal: data.draw_total,
      totalMatches: data.total_matches,
    },
  ];
  return lunacia;
};

/*
total: data.data.axies.total,
results: data.data.axies.results
*/

const getAxies = async () => {
  const axies = [];
  await axios.request(optionAxie).then((response) => {
    const { data } = response;
    const { total, results } = data.data.axies;
    axies.push(
      {
        total,
        results,
      },
    );
  });
  return axies;
};

export {
  getSlpStats, getLunacia, getMmr, getAxies,
};
