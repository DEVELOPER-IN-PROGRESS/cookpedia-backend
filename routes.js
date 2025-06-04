const express = require('express');
const routes = express.Router();

const userController = require('./controllers/userController');

//register api
routes.post('/user-register',userController.registerController);

//login api
routes.post('/user-login', userController.loginController)

module.exports = routes
