const express = require('express');

// Init router with express framework (NodeJS) to handle HTTP requests from client side (browser) to server side (NodeJS)
const router = express.Router();

// import meController from app/controllers/MeController.js to handle HTTP requests from client side (browser) to server side (NodeJS)
const meController = require('../app/controllers/MeController');

// Handle HTTP requests from client side (browser) to server side (NodeJS)
router.get('/stored/courses', meController.storedCourses);

module.exports = router;
