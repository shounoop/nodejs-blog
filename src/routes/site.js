const express = require('express');

// Init router with express framework (NodeJS) to handle HTTP requests from client side (browser) to server side (NodeJS)
const router = express.Router();

// import siteController from app/controllers/SiteController.js to handle HTTP requests from client side (browser) to server side (NodeJS)
const siteController = require('../app/controllers/SiteController');

// Handle HTTP requests from client side (browser) to server side (NodeJS)
router.get('/search', siteController.search);
router.get('/', siteController.index);

module.exports = router;
