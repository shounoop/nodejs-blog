const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');

// Import routes from routes folder to handle HTTP requests from client side (browser) to server side (NodeJS)
const route = require('./routes');

// Import DB from config folder to connect to DB (MongoDB) with mongoose package (NodeJS) to handle data from server side (NodeJS) to database (MongoDB)
const db = require('./config/db');

// Connect to DB (MongoDB) with mongoose package (NodeJS) to handle data from server side (NodeJS) to database (MongoDB)
db.connect();

// Init app with express framework (NodeJS) to handle HTTP request from client side (browser) to server side (NodeJS)
const app = express();
const port = 3000;

// Static file (public folder) middleware to serve static files (css, js, images, etc.) from server side to client side (browser)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to handle POST data from client side (browser) to server side (NodeJS) with body-parser package
app.use(express.urlencoded({ extended: true }));

// Middleware to handle JSON data from client side (browser) to server side (NodeJS) with body-parser package
app.use(express.json());

// HTTP logger middleware to log HTTP requests from client side (browser) to server side (NodeJS) with morgan package
app.use(morgan('combined'));

// Set up template engine to render HTML file from server side to client side (browser) with express-handlebars package
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));

// Routes init (app is an instance of express framework) to handle HTTP requests from client side (browser) to server side (NodeJS)
route(app);

// Listen on port 3000 (localhost:3000) to handle HTTP requests from client side (browser) to server side (NodeJS)
app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
