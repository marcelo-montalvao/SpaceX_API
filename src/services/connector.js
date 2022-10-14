const fetch = require('node-fetch');

const callFetch = async function (url) {
  const response = await fetch(url)
  const json = await response.json();
  return json;
};

module.exports = { callFetch };