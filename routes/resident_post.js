var memberlist = require('../1280memberlist.json');
var fs = require('fs');
var moment = require('moment');
var log = require('../residentlog.json');

exports.route = {
    post:
        function(req, res) {
            
            var barcode = req.param('barcode');
            
            var realmonth = getFullMonth(moment().month());
            
            var date = "" + realmonth + "/" + moment().date() + "/" + moment().year() + " at " + moment().hours() + ":";
            
            if(moment().minutes() < 10)
                date += "0" + moment().minutes();
            else
                date += moment().minutes();
                
            console.log(date);
            
            var results = [];
            
            for(var i = 0; i < memberlist.length; i++) 
            {
                if(memberlist[i].Tag == barcode)
                {
                    memberlist[i].date = date;
                    results.push(memberlist[i]);
                }
            }
            
            for(var i = 0; i < results.length; i++)
            {
                log.push(results[i]);
            }
            
            if(results.length != 0) {
                fs.writeFile('residentlog.json', JSON.stringify(log), function(err) {
                    if(err) 
                        console.log(err);
                });
                res.render('validresident', { results: results, date: date });
                
            } else {
                res.render('invaliduser');
            }
            
        }
}


function getFullMonth(month) {
    console.log("MONTH: " + month);
    switch(month) {
        case 0:
            return "1";
            break;
        case 1:
            return "2";
            break;
        case 2:
            return "3";
            break;
        case 3: 
            return "4";
            break;
        case 4: 
            return "5";
            break;
        case 5: 
            return "6";
            break;
        case 6: 
            return "7";
            break;
        case 7:
            return "8";
            break;
        case 8:
            return "9";
            break;
        case 9:
            return "10";
            break;
        case 10:
            return "11";
            break;
        case 11:
            return "12";
            break;
    }
}