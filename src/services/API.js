import axios from 'axios';
import {
  mmr, lunacia, xpAxie, id, options,
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
  const response = axios.get(`${mmr}${id}`);
  const { data } = response;
  return data;
};

const getLunacia = async () => {
  const response = axios.get(`${lunacia}${id}`);
  const { data } = response;
  return data;
};

const getXpAxie = async () => {
  const options = {
    method: 'GET',
    url: `${xpAxie}${id}`,
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
