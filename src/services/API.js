import axios from 'axios';
import {
  slpStats, mmr, lunacia, xpAxie, id,
} from './config';

const getSlpStats = async () => {
  const response = await axios.get(`${slpStats}${id}`);
  const { data } = await response;
  console.log(data);
};

const getMmr = async () => {
  const response = axios.get(`${mmr}${id}`);
  const { data } = response;
  console.log(data);
};

const getLunacia = async () => {
  const response = axios.get(`${lunacia}${id}`);
  const { data } = response;
  console.log(data);
};

const getXpAxie = async () => {
  const response = axios.get(`${xpAxie}${id}`);
  const { data } = response;
  console.log(data);
};

export {
  getSlpStats, getLunacia, getMmr, getXpAxie,
};
