var memberlist = require('../memberlist.json');
var fs = require('fs');
var moment = require('moment');
var log = require('../log.json');

exports.route = {
    post:
        function (req, res) {
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
                    break;
                }
            }
            
            for(var i = 0; i < results.length; i++)
            {
                log.push(results[i]);
            }
            var hour = moment().hour();
            console.log(hour);
            var numguests = 10;
            if(hour >= 17)
                numguests = 6;
            
            fs.writeFile('log.json', JSON.stringify(log), function(err) {
                if(err) 
                    console.log(err);
            });
            
            if(results.length != 0) {
                res.render('guestnumber', { results: results, date: date, numguests: numguests });
            } else {
                res.render('invaliduser');
            }
        }
}