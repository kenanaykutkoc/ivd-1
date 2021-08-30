const fetch = require('node-fetch');
const connector = require('./connector');
const { get } = require('./methods');

const ivd = (options = {}) => {
  const conn = connector({
    fetch: options.fetch || fetch,
  });
  return { get: get({ connector: conn }) };
};

module.exports = ivd;
