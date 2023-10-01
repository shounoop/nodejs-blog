const express = require('express');

// Init router with express framework (NodeJS) to handle HTTP requests from client side (browser) to server side (NodeJS)
const router = express.Router();

// import courseController from app/controllers/CourseController.js to handle HTTP requests from client side (browser) to server side (NodeJS)
const courseController = require('../app/controllers/CourseController');

// Handle HTTP requests from client side (browser) to server side (NodeJS)
router.post('/store', courseController.store);
router.get('/create', courseController.create);
router.get('/:slug', courseController.show);
router.get('/', courseController.index);

module.exports = router;
