const express = require('express');
const login = require('../controllers/login').login;
const signup = require('../controllers/signup');
const router = express.Router();
router.post('/auth/login',login);
router.post('/auth/signup',signup.isExit,signup.signup);
module.exports = {router};