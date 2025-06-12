const downloads = require('../models/downloadModel')

exports.addDownloadRecipeController = async(req,res)=>{
const { recipeid } = req.params
const {name , cuisine , image} = req.body
const userId = req.payload;

    try{
        const existingRecipe = await downloads.findOne({recipeId:recipeid})
        if(existingRecipe){

        }else{
            const newRecipe = new downloads({
                recipeId:recipeid,
                name,
                cuisine,
                image,
                count:1,
                userId
            })
            await newRecipe.save()
            res.status(200).json(newRecipe)
        }
    }catch(error){
        res.status(500).json(error)
    }
}