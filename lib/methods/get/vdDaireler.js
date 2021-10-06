const vddairelers = require('../../data/vddairelers.json');

const daire = () => async ({ kod }) => vddairelers.filter((el) => el.ilKodu === kod);
module.exports = daire;
