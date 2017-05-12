import {Strategy} from 'passport-local';

import User from '../models/user';


module.exports = function(passport) {

    // SESSION CONFIG
    passport.serializeUser(function(user, done) {
        console.log("passport.SEEEEEErializeUser")
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        console.log("passport.DEEEEEEEEserializeUser");
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });


    // LOCAL LOGIN CONFIG
    passport.use('local-login', new Strategy({
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },

    function(req, email, password, done) { // callback with email and password from our form

        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists
        User.findOne({ 'email' :  email }, function(err, user) {
            // if there are any errors, return the error before anything else
            if (err)
                return done(err);

            // if no user is found, return the message
            if (!user)
                return done(null, false, {loginMessage: 'No user found.'}); 

            // if the user is found but the password is wrong
            if (!user.comparePassword(password))
                return done(null, false, {loginMessage: 'Oops! Wrong password.'}); 

            // all is well, return successful user
            return done(null, user);
        });

    }));
}