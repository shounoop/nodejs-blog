// Init DB with mongoose package (NodeJS) to handle data from server side (NodeJS) to database (MongoDB)
const mongoose = require('mongoose');

// Init slug with mongoose-slug-generator package (NodeJS) to handle data from server side (NodeJS) to database (MongoDB)
const slug = require('mongoose-slug-generator');

const mongooseDelete = require('mongoose-delete');

// Init Schema with mongoose package (NodeJS) to handle data from server side (NodeJS) to database (MongoDB)
const Schema = mongoose.Schema;

// Init Course model with mongoose package (NodeJS) to handle data from server side (NodeJS) to database (MongoDB)
const Course = new Schema(
	{
		name: { type: String, required: true },
		description: { type: String },
		image: { type: String },
		videoId: { type: String, required: true },
		level: { type: String },
		slug: { type: String, slug: 'name' },
	},
	{ timestamps: true }
);

// add plugin to mongoose to handle slug to be unique in database (MongoDB)
mongoose.plugin(slug);

// add plugin to Course model to handle soft delete
Course.plugin(mongooseDelete, {
	deletedAt: true,
	overrideMethods: 'all',
});

module.exports = mongoose.model('Course', Course);
