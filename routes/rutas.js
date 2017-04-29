const express = require('express');
const Router = express.Router();
const main = require('../controllers/main')

Router.get('/', main.init);
Router.get('/admin', main.admin);

module.exports = Router;
