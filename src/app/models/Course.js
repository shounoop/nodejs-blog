// Init DB with mongoose package (NodeJS) to handle data from server side (NodeJS) to database (MongoDB)
const mongoose = require('mongoose');

// Init Schema with mongoose package (NodeJS) to handle data from server side (NodeJS) to database (MongoDB)
const Schema = mongoose.Schema;

// Init Course model with mongoose package (NodeJS) to handle data from server side (NodeJS) to database (MongoDB)
const Course = new Schema({
	name: { type: String },
	description: { type: String },
	image: { type: String },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Course', Course);
