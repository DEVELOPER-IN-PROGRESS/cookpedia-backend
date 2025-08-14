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

exports.deleteRecipeController = async(req,res)=>{
    const {recipeid} = req.params;
    console.log(recipeid)
    try{
        const deletedRecipe = await recipes.findByIdAndDelete({_id:recipeid});
        res.status(200).json(deletedRecipe);
    }catch(error){
        res.status(500).json(error)
    }
}

exports.addNewRecipeController = async(req,res) => {
    const { recipeName,prepTime , calories ,servings ,cookingTime , rating , modeofCooking ,
            mealType , cuisineType ,ingredients , instructions , image } = req.body;
    console.log(recipeName,prepTime , calories ,servings ,cookingTime , rating , modeofCooking ,
        mealType , cuisineType ,ingredients , instructions , image);
    try{
        const newRecipe = new recipes({
            name:recipeName,
            ingredients,
            instructions,
            prepTimeMinutes:prepTime,
            cookTimeMinutes:cookingTime,
            servings:servings,
            difficulty:modeofCooking,
            cuisine:cuisineType,
            caloriesPerServing:calories,
            image,
            rating,
            mealType
        })
        res.status(200).json(newRecipe);
    }catch(error){
        res.status(500).json(error)
    }
}

//name,ingredients,instructions,prepTimeMinutes,cookTimeMinutes,servings,difficulty,cuisine,caloriesPerServing,image,rating,mealType,
