import ObjectID from 'mongodb';
import jwt from 'jsonwebtoken';

import config from './config';
import User from '../models/user';

var USERS_COLLECTION = "users";

module.exports = function(app){



    /*  "/api/auth/"
     *    POST: verify credentials and authenticate user
     */

    app.post('/auth', function(req, res) {
        User.findOne({
            email: req.body.email
        }, (err, user) => {

            if (!user) {
                res.send({
                  success: false,
                  message: 'A autenticação falhou. Usuário não encontrado.'
                });
            } else {
                // COMPARE PASSWORD
                user.comparePassword(req.body.password, (err, isMatch) => {
                    if (isMatch && !err) {
                        var token = jwt.sign(user, config.auth.secret, {
                            expiresIn: "2 days"
                        });
                        res.json({
                            success: true,
                            message: 'Usuário autenticado com sucesso.',
                            token
                        });
                    } else {
                        res.send({
                            success: false,
                            message: 'A autenticação falhou. O password não confere.'
                        });
                    }
                });
            }
        })
    });

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
                res.json(newUser);
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