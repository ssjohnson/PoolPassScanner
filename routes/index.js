exports.mainpage = function (req,res) {
    res.render('index', {title: 'Home'} )
};

exports.residentPage = function (req,res) {
    res.render('residentPage');
};

exports.guestPage = function (req, res) {
    res.render('guestPage');
};

exports.resident_post = require('./resident_post.js');


