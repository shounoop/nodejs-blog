// import Course to use Course.find() method to get all courses from database (MongoDB) to render to client side (browser)
const Course = require('../models/Course');

// Purpose: Site controller for home page (src/views/home.pug) to handle HTTP requests from client side (browser) to server side (NodeJS)
class SiteController {
	// [GET] /
	index(req, res) {
		// handle to get all courses from database (MongoDB) to render to client side (browser)
		Course.find({})
			.then(function (courses) {
				res.json(courses);
			})
			.catch(function () {
				res.status(400).json({ error: 'ERROR!!!' });
			});
	}

	// [GET] /search
	search(req, res) {
		res.render('search');
	}
}

module.exports = new SiteController();
