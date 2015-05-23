var memberlist = require('../memberlist.json');
var fs = require('fs');
var moment = require('moment');
var log = require('../log.json');

exports.route = {
    post:
        function(req, res) {
            
            var barcode = req.param('barcode');
            var date = moment()._d;
            var results = [];
            
            for(var i = 0; i < memberlist.length; i++) 
            {
                if(memberlist[i].Apartment === barcode)
                {
                    memberlist[i].date = date;
                    results.push(memberlist[i]);
                }
            }
            
            for(var i = 0; i < results.length; i++)
            {
                log.push(results[i]);
            }
            
            fs.writeFile('log.json', JSON.stringify(log), function(err) {
                console.log(err);
            });
            
            if(results.length != 0) {
                res.render('validresident', { results: results, date: date });
            } else {
                res.render('invaliduser');
            }
            
        }
}