import User from '../models/user';

module.exports = function(app){

	/*  "/api/users"
	 *    GET: finds all users
	 *    POST: creates a new user
	 */

	app.get('/api/users', function(req, res) {
		User.find(function (err, users) {
			console.log(users);
			if (err) return next(err);
			res.json(users);
		});
	});

}