import axios from 'axios';
import {
  mmrURL, lunaciaURL, xpAxieURL, id, options,
} from './config';

const getSlpStats = async () => {
  const stats = [];

  await axios.request(options).then((response) => {
    const { data } = response;
    stats.push(
      {
        todaySoFar: data.slp.todaySoFar,
        yesterdaySLP: data.slp.yesterdaySLP,
        average: data.slp.average,
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
    },
  ];
  return lunacia;
};

const getXpAxie = async () => {
  const options = {
    method: 'GET',
    url: `${xpAxieURL}${id}`,
    headers: {
      'x-rapidapi-host': 'axie-infinity.p.rapidapi.com',
      'x-rapidapi-key': '6089681f7amsha3c847601b1ea04p18ce3cjsn60fdc4e9bf22',
    },
  };

  axios.request(options).then((response) => {
    console.log(response.data);
  }).catch((error) => {
    console.error(error);
  });
};

export {
  getSlpStats, getLunacia, getMmr, getXpAxie,
};
