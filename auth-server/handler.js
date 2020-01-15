'use strict';

const axios = require('axios');

module.exports.getAccessToken = async (event) => {
  const MEETUP_OAUTH_URL = 'https://secure.meetup.com/oauth2/access'
    + '?client_id= 9f19c9tbjm3od65i6l0kqkb5j6'
    + '&client_secret= d8iap316t0ns3r4j26cq9blba0'
    + '&grant_type=authorization_code'
    + '&redirect_uri= https://jbsneed.github.io/meetup/'
    + '&code=' + event.pathParameters.code;

  const info = await axios.post(MEETUP_OAUTH_URL);

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      access_token: info.data.access_token,
      refresh_token: info.data.refresh_token,
    }),
  };
};

module.exports.refreshAccessToken = async (event) => {
  const MEETUP_OAUTH_URL = 'https://secure.meetup.com/oauth2/access'
    + '?client_id= 9f19c9tbjm3od65i6l0kqkb5j6'
    + '&client_secret= 9f19c9tbjm3od65i6l0kqkb5j6'
    + '&grant_type=refresh_token'
    + '&refresh_token=' + event.pathParameters.refresh_token;

  const info = await axios.post(MEETUP_OAUTH_URL);

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      access_token: info.data.access_token,
      refresh_token: info.data.refresh_token,
    }),
  };
};