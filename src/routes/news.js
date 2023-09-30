const express = require('express');

// Init router with express framework (NodeJS) to handle HTTP requests from client side (browser) to server side (NodeJS)
const router = express.Router();

// import newsController from app/controllers/NewsController.js to handle HTTP requests from client side (browser) to server side (NodeJS)
const newsController = require('../app/controllers/NewsController');

// Handle HTTP requests from client side (browser) to server side (NodeJS)
router.use('/:slug', newsController.show);
router.use('/', newsController.index);

module.exports = router;
