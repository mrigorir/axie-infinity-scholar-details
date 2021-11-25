// SLP
const slpStatsURL = 'https://axie-infinity.p.rapidapi.com/get-update/';

// MMR
const mmrURL = 'https://game-api.axie.technology/mmr/';

// Lunacia Rover Proxy match
const lunaciaURL = 'https://game-api.axie.technology/api/v1/';

// XP per Axie (multiples IDs allowed)
const xpAxieURL = 'https://axie-infinity.p.rapidapi.com/get-axies/';

// provisional id
const id = '0x0a10f1c0f1959ce8121dcf9172b3f6d3b7e5bc51';

// rapidAPI get slp mmr request options
const optionsSLP = {
  method: 'GET',
  url: `${slpStatsURL}${id}`,
  params: { id: '0x0a10f1c0f1959ce8121dcf9172b3f6d3b7e5bc51' },
  headers: {
    'x-rapidapi-host': 'axie-infinity.p.rapidapi.com',
    'x-rapidapi-key': '6089681f7amsha3c847601b1ea04p18ce3cjsn60fdc4e9bf22',
  },
};

const optionAxie = {
  method: 'GET',
  url: `${xpAxieURL}${id}`,
  headers: {
    'x-rapidapi-host': 'axie-infinity.p.rapidapi.com',
    'x-rapidapi-key': '6089681f7amsha3c847601b1ea04p18ce3cjsn60fdc4e9bf22',
  },
};

export {
  mmrURL, lunaciaURL, xpAxieURL, id, optionsSLP, optionAxie,
};
