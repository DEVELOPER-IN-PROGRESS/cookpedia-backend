const downloads = require('../models/downloadModel')

exports.addDownloadRecipeController = async(req,res)=>{
const { recipeId } = req.params;
console.log(recipeId);
const {name , cuisine , image} = req.body
console.log(name,cuisine,image, 'download')
const userId = req.payload;
console.log(userId);

    try{
        const existingRecipe = await downloads.findOne({recipeId})
        if(existingRecipe){

        }else{
            const newRecipe = new downloads({
                recipeId,
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


exports.getDownloadRecipeController = async(req,res)=>{
    const userId = req.payload;
    console.log({userId})
    try{
        const allDownloadedRecipes = await downloads.find({userId})
        res.status(200).json(allDownloadedRecipes)
    }catch(error){
        res.status(500).json(error)
    }
}

// get all downloads
exports.getAllDownloadsController = async(req,res) =>{
    try{
        const allDownloads =  await downloads.find();
        res.status(200).json(allDownloads);
    }catch(error){
        res.status(400).json(error)
    }
}