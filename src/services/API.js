import axios from 'axios';
import {
  slpStats, mmr, lunacia, xpAxie, id,
} from './config';

const getSlpStats = async () => {
  const options = {
    method: 'GET',
    url: `${slpStats}${id}`,
    params: { id: '0x0a10f1c0f1959ce8121dcf9172b3f6d3b7e5bc51' },
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
