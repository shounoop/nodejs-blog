// import Course to use Course.find() method to get all courses from database (MongoDB) to render to client side (browser)
const { mongooseObjectArrToOjbectArr } = require('../../util/mongoose');
const Course = require('../models/Course');

// Purpose: Site controller for home page (src/views/home.pug) to handle HTTP requests from client side (browser) to server side (NodeJS)
class SiteController {
	// [GET] /
	index(req, res, next) {
		// handle to get all courses from database (MongoDB) to render to client side (browser)
		Course.find({})
			.then((courses) => {
				// render to client side (browser) with home.hbs file in src/views folder
				res.render('home', { courses: mongooseObjectArrToOjbectArr(courses) });

				// res.json(courses);
			})
			.catch(next);
	}

	// [GET] /search
	search(req, res) {
		res.render('search');
	}
}

module.exports = new SiteController();
