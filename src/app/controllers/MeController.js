const { mongooseObjectArrToOjbectArr } = require('../../util/mongoose');
const Course = require('../models/Course');

// Purpose: Me controller for home page (src/views/home.pug) to handle HTTP requests from client side (browser) to server side (NodeJS)
class MeController {
	// [GET] /stored/courses
	storedCourses(req, res, next) {
		let courseQuery = Course.find({});

		if (req.query.hasOwnProperty('_sort')) {
			courseQuery = courseQuery.sort({
				[req.query.column]: req.query.type,
			});
		}

		Promise.all([courseQuery, Course.countWithDeleted({ deleted: true })])
			.then(([courses, deleteCount]) =>
				res.render('me/stored-courses', {
					deleteCount,
					courses: mongooseObjectArrToOjbectArr(courses),
				})
			)
			.catch(next);
	}

	// [GET] /trash/courses
	deletedCourses(req, res, next) {
		Course.findWithDeleted({ deleted: true })
			.then((courses) =>
				res.render('me/deleted-courses', {
					courses: mongooseObjectArrToOjbectArr(courses),
				})
			)
			.catch(next);
	}
}

module.exports = new MeController();
