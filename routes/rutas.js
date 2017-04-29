const express = require('express');
const Router = express.Router();
const main = require('../controllers/main')

Router.get('/', main.init);

module.exports = Router;
