const recipes = require('../models/recipeModel')

exports.getHomeRecipeController = async(req,res) => {
    try{
        const homeRecipes = await recipes.find().limit(6)
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

exports.getSingleRecipeController = async(req,res) =>{
    //  console.log('inside view single recipe',id)
    const { id } = req.params;
    console.log({id})
    console.log(req.params)
    try{
        const recipeDetails = await recipes.findOne({_id:id});
        console.log(recipeDetails);
        res.status(200).json(recipeDetails);
    }catch(error){
        res.status(500).json(error);
    }
}

exports.getAllRelatedRecipesController = async(req,res)=>{
    try{
        const cuisine = req.query.cuisine;
        console.log(cuisine);
        const allRelatedRecipes = await recipes.find({cuisine})
        res.status(200).json(allRelatedRecipes);
    }catch(error){}
}