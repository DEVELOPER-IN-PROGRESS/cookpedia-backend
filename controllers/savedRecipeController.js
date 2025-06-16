const savedRecipes = require('../models/saveModel');

exports.addSaveRecipeController = async(req,res) =>{
     console.log('we are here')
     const {recipeid} = req.params;
     const {name,image} = req.body
     const  userId  = req.payload;

     console.log({recipeid,
            name,
            image,
            userId })
  try{
    const recipe = await savedRecipes.findOne({recipeId:recipeid,userId})
    console.log({recipe})
    if(recipe){
        res.status(406).json('already saved')
    }else{
        const newSavedRecipes = new savedRecipes({
            recipeId:recipeid,
            name,
            image,
            userId
        })
        await newSavedRecipes.save()
        res.status(200).json(newSavedRecipes)
    }
  }catch(error){res.status(500).json(error)}
}

exports.getAllSavedUserRecipesController = async(req,res)=>{
    const userId = req.payload;
    try{
      const allSavedRecipes = await savedRecipes.find({userId})
      console.log(allSavedRecipes);
      res.status(200).json(allSavedRecipes);
    }catch(error){
      res.status(500).json(error)
    }
}

exports.deleteSavedRecipesController = async(req,res) =>{
  const { id } = req.params;
  console.log({id});
  try{
    await savedRecipes.findByIdAndDelete({_id:id})
    res.status(200).json('recipe deletion successful')
  } catch(error){
    res.status(500).json(error)
  }
}