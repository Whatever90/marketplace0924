var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    alias:  { type: String, required: [true, 'Alias is required'], minlength: [2, 'Alias is too short']},
    email:  { type: String, required: [true, 'email is required'], minlength: [2, 'email IS TOO SHORT']},
    password:  { type: String, required: [true, 'password is required'], minlength: [2, 'password IS TOO SHORT']},
    wishList: { type: Array },
    ipList: {type: Array}
}, {timestamps: true });

var User = mongoose.model('User', userSchema);
