var fs = require('fs');


exports.route = {
    get: 
        function (req, res) {
            res.render('newUser');
        },
    
    post:
        function (req, res) {
            console.log(req);
            res.redirect('/');
        }
}
