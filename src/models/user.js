import mongoose from "mongoose";
import bcrypt from "bcrypt-nodejs";

const Schema = mongoose.Schema;
const SALT_WORK_FACTOR = 10;

//=======================================================================================================
// User Schema -- Based on https://www.mongodb.com/blog/post/password-authentication-with-mongoose-part-1
//=======================================================================================================

const UserSchema = new Schema({
    email: { type: String, required: true, index: { unique: true } },
    name: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    website: { type: String, required: false }

});


//================================
// User Schema ODM methods
//================================

// Pre-saves user to database, hash of the password if it is new or was modified
UserSchema.pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, null, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });


});


// Compares passwords for login
UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('User', UserSchema);