var memberlist = require('../memberlist.json');
var moment = require('moment');

exports.route = {
    post:
        function (req, res) {
            var barcode = req.param('barcode');
            
            var results = [];
            
            for(var i = 0; i < memberlist.length; i++) 
            {
                if(memberlist[i].Apartment === barcode)
                {
                    results.push(memberlist[i]);
                    break;
                }
            }

            var hour = moment().hour();
            var numguests = 10;
            if(hour >= 17)
                numguests = 6;
           
            if(results.length != 0) {
                res.render('guestnumber', { results: results, numguests: numguests });
            } else {
                res.render('invaliduser');
            }
        }
}