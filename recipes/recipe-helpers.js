const db = require('../dbConfig.js');

module.exports = {
  getRecipes,
  shoppingList,
  getInstructions
};

function getRecipes() {
  return db('recipes');
}

function shoppingList(id){
    return db('recipe_ingredients')
    .where({ recipe_id: id })
}

function getInstructions(id){
    return db('steps')
    .where({ recipe_id: id })
}