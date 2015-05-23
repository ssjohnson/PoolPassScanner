var memberlist = require('../memberlist.json');
var fs = require('fs');
var moment = require('moment');
var log = require('../residentlog.json');

exports.route = {
    post:
        function(req, res) {
            
            var barcode = req.param('barcode');
            
            var date = "" + moment().month() + "/" + moment().date() + "/" + moment().year() + " at " + moment().hours() + ":";
            
            if(moment().minutes() < 10)
                date += "0" + moment().minutes();
            else
                date += moment().minutes();
                
            console.log(date);
            
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
            
            fs.writeFile('residentlog.json', JSON.stringify(log), function(err) {
                if(err) 
                    console.log(err);
            });
            
            if(results.length != 0) {
                res.render('validresident', { results: results, date: date });
            } else {
                res.render('invaliduser');
            }
            
        }
}