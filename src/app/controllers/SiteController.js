const Course = require('../models/Course');

class SiteController {
	// [GET] /
	index(req, res) {
		// res.render('home');

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
