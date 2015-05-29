var fs = require('fs');
var log = require('../guestlog.json');
var moment = require('moment');


exports.route = {
    get: 
        function(req, res) {
            var numGuests = req.params.numGuests;
            var apartment = req.params.apartment;
            
            var realmonth = getFullMonth(moment().month());
            
            var date = "" + realmonth + "/" + moment().date() + "/" + moment().year() + " at " + moment().hours() + ":";
            
            if(moment().minutes() < 10)
                date += "0" + moment().minutes();
            else
                date += moment().minutes();
            
            var guest = { Apartment : apartment, NumberOfGuests: numGuests, Date: date };
            
            log.push(guest);
            
            fs.writeFile('guestlog.json', JSON.stringify(log), function(err) {
                if(err) 
                    console.log(err);
            });
            
            console.log(apartment);
            console.log(numGuests);
            
            res.redirect('/');
            
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