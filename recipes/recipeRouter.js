const express = require('express')

const Recipes = require('./recipe-helpers')

const router = express.Router()

router.get('/', (req, res) => {
    Recipes.getRecipes()
    .then(thenRes => {
        res.status(200).json(thenRes)
    })
    .catch(error => {
        console.error("Yeah this ain't it chief")
    })
})

router.get('/:id/ingredients', (req, res) => {
    const { id } = req.params;

    Recipes.shoppingList(id)
    .then(thenRes => {
        res.status(200).json(thenRes)
    })
    .catch(error => {
        console.error("Yeah this ain't it chief")
    })
})

router.get('/:id/steps', (req, res) => {
    const { id } = req.params;

    Recipes.getInstructions(id)
    .then(thenRes => {
        res.status(200).json(thenRes)
    })
    .catch(error => {
        console.error("Yeah this ain't it chief")
    })
})

module.exports = router