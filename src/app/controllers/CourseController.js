// import Course to use Course.find() method to get all courses from database (MongoDB) to render to client side (browser)
const {
	mongooseObjectArrToOjbectArr,
	mongooseObjectToOjbect,
} = require('../../util/mongoose');
const Course = require('../models/Course');

// Purpose: Site controller for home page (src/views/home.pug) to handle HTTP requests from client side (browser) to server side (NodeJS)
class CourseController {
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
		const formData = { ...req.body };
		formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;

		const course = new Course(formData);

		course
			.save()
			.then(() => res.redirect('/me/stored/courses'))
			.catch((error) => {
				console.log('error', error);
			});
	}

	// [GET] /:id/edit
	edit(req, res, next) {
		Course.findById(req.params.id)
			.then((course) =>
				res.render('courses/edit', {
					course: mongooseObjectToOjbect(course),
				})
			)
			.catch(next);
	}

	// [PUT] /:id
	update(req, res, next) {
		Course.updateOne({ _id: req.params.id }, req.body)
			.then(() => res.redirect('/me/stored/courses'))
			.catch(next);
	}

	// [PATCH] /:id/restore
	restore(req, res, next) {
		Course.restore({ _id: req.params.id })
			.then(() => res.redirect('back'))
			.catch(next);
	}

	// [DELETE] /:id
	destroy(req, res, next) {
		Course.delete({ _id: req.params.id })
			.then(() => res.redirect('back'))
			.catch(next);
	}

	// [DELETE] /:id/force
	forceDestroy(req, res, next) {
		Course.deleteOne({ _id: req.params.id })
			.then(() => res.redirect('back'))
			.catch(next);
	}
}

module.exports = new CourseController();
