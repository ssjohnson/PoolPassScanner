var fs = require('fs');


exports.route = {
    get: 
        function (req, res) {
            res.render('newUser');
        },
    
    post:
        function (req, res) {
            var base64data = req.body.data.replace(/^data:image\/png;base64,/, "");
            fs.writeFileSync('images/image.png', base64data, 'base64', function(err) { console.log(err); });
            res.render('index');
        }
}

