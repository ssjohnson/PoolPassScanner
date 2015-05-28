exports.mainpage = function (req,res) {
    res.render('index', {title: 'Home'} )
};

exports.residentPage = function (req,res) {
    res.render('residentPage');
};

exports.guestPage = function (req, res) {
    res.render('guestPage');
};

exports.newUser = require('./newUser.js');
exports.resident_post = require('./resident_post.js');
exports.guest_post = require('./guest_post.js');
exports.guest_store = require('./guest_store.js');