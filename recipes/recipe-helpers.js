const db = require('../dbConfig.js');

module.exports = {
  getRecipe,
};

function getRecipe() {
  return db('recipes');
}
