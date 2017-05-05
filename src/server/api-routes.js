import User from '../models/user';
import ObjectID from 'mongodb';

var USERS_COLLECTION = "users";

module.exports = function(app){

    /*  "/api/users"
     *    GET: finds all users
     *    POST: creates a new user
     */

    app.get('/api/users', function(req, res) {
        User.find({}, {password:0}).exec(function (err, users) {
            if (err) {
                res.status(500).json(err.message);
            } else {
                res.status(200).json(users);
            }
        });
    });

    app.post('/api/users', (req, res) => {
        if (!req.body.email || !req.body.password) {
            res.json({
                success: false,
                message: 'Entre com um e-mail e o seu password.'
            });
        } else {
            let newUser = new User({
                name: req.body.name,
                lastname: req.body.lastname,
                email: req.body.email,
                username: req.body.username,
                password: req.body.password,
                website: req.body.website
            });
            newUser.save((err) => {
                if (err) {
                    return res.json({
                      success: false,
                      message: err.message
                    });
                }
                res.json({
                    success: true,
                    message: 'Usuário criado com sucesso.'
                });
            });
        }
    });


    /*  "/api/users/:id"
     *    GET: find user by id
     *    PUT: update user by id
     *    DELETE: deletes user by id
     */

    app.get('/api/users/:id', function(req, res) {
        User.findById( req.params.id, function(err, user) {
            if (err) {
                res.status(500).json(err.message);
            } else {
                res.status(200).json(user);
            }
        });
    });

    app.delete('/api/users/:id', function(req, res) {
        User.remove( req.params.id, function(err, user) {
            if (err) {
                res.status(500).json(err.message);
            } else {
                res.status(200).json(user);
            }
        });
    });

    app.put('/api/users/:id', function(req, res) {

        let update_doc = req.body;
        delete update_doc._id;
        
        // User.findOneAndUpdate(query, req.newData, {upsert:true}, function(err, doc){
        //     if (err) return res.send(500, { error: err });
        //     return res.send("succesfully saved");
        // });
    });

}