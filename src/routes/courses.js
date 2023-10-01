const express = require('express');

// Init router with express framework (NodeJS) to handle HTTP requests from client side (browser) to server side (NodeJS)
const router = express.Router();

// import courseController from app/controllers/CourseController.js to handle HTTP requests from client side (browser) to server side (NodeJS)
const courseController = require('../app/controllers/CourseController');

// Handle HTTP requests from client side (browser) to server side (NodeJS)
router.post('/store', courseController.store);
router.get('/create', courseController.create);
router.get('/:id/edit', courseController.edit);
router.put('/:id', courseController.update);
router.get('/:slug', courseController.show);

module.exports = router;
