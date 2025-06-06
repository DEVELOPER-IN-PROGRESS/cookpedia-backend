const express = require('express');
const routes = express.Router();

const userController = require('./controllers/userController');
const recipeController = require('./controllers/recipeController')

//register api
routes.post('/user-register',userController.registerController);

//login api
routes.post('/user-login', userController.loginController)

//get home recipes
routes.get('/home-recipes', recipeController.getHomeRecipeController )

// get all the recipes
routes.get('/all-recipes', recipeController.getAllRecipeController)

module.exports = routes
