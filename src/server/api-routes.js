import User from '../models/user';

module.exports = function(app){

	/*  "/api/users"
	 *    GET: finds all users
	 *    POST: creates a new user
	 */

	app.get('/api/users', function(req, res) {
		User.find(function (err, users) {
			if (err) return next(err);
			res.json(users);
		});
	});

	app.post('/api/users', function(req, res) {
		res.json({
			"message": "POST de um novo usuário!!"
		})
	});

}