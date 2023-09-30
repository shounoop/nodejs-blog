// Purpose: News controller for news page (src/views/news.pug) to handle HTTP requests from client side (browser) to server side (NodeJS)
class NewsController {
	// [GET] /news
	index(req, res) {
		res.render('news');
	}

	// [GET] /news/:slug
	show(req, res) {
		res.send('NEWS DETAIL!!!');
	}
}

module.exports = new NewsController();
