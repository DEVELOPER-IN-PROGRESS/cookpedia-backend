const recipes = require('../models/recipeModel')

exports.getHomeRecipeController = async(req,res) => {
    try{
        const homeRecipes = await recipes.find().limit(3)
        res.status(200).json(homeRecipes);
    }catch(error){
        res.status(500).json(error)
    }
}

exports.getAllRecipeController = async(req,res) => {
    try{
        const allRecipes = await recipes.find()
        res.status(200).json(allRecipes);
    }catch(error){
        res.status(500).json(error)
    }
}