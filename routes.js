const express = require('express');
const routes = express.Router();

const userController = require('./controllers/userController');
const recipeController = require('./controllers/recipeController')
const saveRecipeController = require('./controllers/savedRecipeController');
const testimonialController = require('./controllers/testimonialController');
const downloadController = require('./controllers/downloadController');
const jwtMiddleware = require('./middlewares/jwtMiddleware');


//register api
routes.post('/user-register',userController.registerController);

//login api
routes.post('/user-login', userController.loginController)

//get home recipes
routes.get('/home-recipes', recipeController.getHomeRecipeController )


// get all the recipes
routes.get('/all-recipes', recipeController.getAllRecipeController)

// get a single recipe
routes.get('/view/:id',jwtMiddleware, recipeController.getSingleRecipeController)

//get all related recipes
routes.get('/related-recipes',jwtMiddleware,recipeController.getAllRelatedRecipesController);

//save a recipe
routes.post('/save-recipe/:recipeid',jwtMiddleware, saveRecipeController.addSaveRecipeController);

routes.post('/download-recipe/:recipeId',jwtMiddleware,downloadController.addDownloadRecipeController);

routes.get('/saved-user-recipes',jwtMiddleware,saveRecipeController.getAllSavedUserRecipesController);

routes.delete('/delete-saved-recipe/:id',saveRecipeController.deleteSavedRecipesController);

//path to get all the downloaded recipes
routes.get('/downloaded-user-recipes', jwtMiddleware, downloadController.getDownloadRecipeController )

//path to update the user profile
routes.put('/profile-update',jwtMiddleware, userController.updateProfileController);

// fetch all users
routes.get('/all-users',userController.getAllUserController);

//fetch all downloads
routes.get('/all-downloads',downloadController.getAllDownloadsController);

routes.post('/add-recipe',recipeController.addNewRecipeController)

//delele a recipe
routes.delete('/delete-recipe/:recipeid',recipeController.deleteRecipeController)

//add a new testimonial

routes.post('/add-testimonial',testimonialController.addTestimonialController);

routes.get('/all-testimonials',testimonialController.getAllTestimonials);

routes.put('/update-testimonial/:id',testimonialController.updateTestimonialController);

//route to get all approved testimonials
routes.get('/all-approved-testimonials',testimonialController.getAllApprovedTestimonials);

module.exports = routes
