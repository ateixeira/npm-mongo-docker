import User from '../models/user';
import ObjectID from 'mongodb';

var USERS_COLLECTION = "users";

module.exports = function(app){

    /*  "/api/users"
     *    GET: finds all users
     *    POST: creates a new user
     */

    app.get('/api/users', function(req, res) {
        User.find(function (err, users) {
            if (err) return next(err);
            res.status(200).json(users);
        });
    });

    app.post('/api/users', function(req, res) {
        res.json({
            "message": "POST de um novo usuário!!"
        })
    });


    /*  "/api/users/:id"
     *    GET: find user by id
     *    PUT: update user by id
     *    DELETE: deletes user by id
     */

    app.get('/api/users/:id', function(req, res) {
        User.findById( req.params.id, function(err, doc) {
            if (err) {
                res.status(500).json(err.message);
            } else {
                res.status(200).json(doc);
            }
        });
    });

    app.delete('/api/users/:id', function(req, res) {
        User.remove( req.params.id, function(err, doc) {
            if (err) {
                res.status(500).json(err.message);
            } else {
                res.status(200).json(doc);
            }
        });
    });

}