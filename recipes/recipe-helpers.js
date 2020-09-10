const db = require('../dbConfig.js');

module.exports = {
  getRecipes,
  shoppingList,
  getInstructions,
  getIngredientRecipes
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

function getIngredientRecipes(id){
    return db.select('recipe_id')
    .from('recipe_ingredients')
    .where({ ingredient_id: id})

}