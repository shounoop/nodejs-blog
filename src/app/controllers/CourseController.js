// import Course to use Course.find() method to get all courses from database (MongoDB) to render to client side (browser)
const {
	mongooseObjectArrToOjbectArr,
	mongooseObjectToOjbect,
} = require('../../util/mongoose');
const Course = require('../models/Course');

// Purpose: Site controller for home page (src/views/home.pug) to handle HTTP requests from client side (browser) to server side (NodeJS)
class CourseController {
	// [GET] /
	index(req, res, next) {
		// handle to get all courses from database (MongoDB) to render to client side (browser)
		Course.find({})
			.then((courses) => {
				// render to client side (browser) with home.hbs file in src/views folder
				res.render('home', { courses: mongooseObjectArrToOjbectArr(courses) });
			})
			.catch(next);
	}

	// [GET] /:slug
	show(req, res, next) {
		Course.findOne({ slug: req.params.slug })
			.then((course) => {
				res.render('courses/show', {
					course: mongooseObjectToOjbect(course),
				});
			})
			.catch(next);
	}

	// [GET] /create
	create(req, res, next) {
		res.render('courses/create');
	}

	// [POST] /store
	store(req, res, next) {
		const formData = req.body;
		formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;

		const course = new Course(formData);

		course
			.save()
			.then(() => res.redirect('/'))
			.catch((error) => {
				console.log('error', error);
			});
	}
}

module.exports = new CourseController();
