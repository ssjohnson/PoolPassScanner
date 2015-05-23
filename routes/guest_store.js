var fs = require('fs');
var log = require('../guestlog.json');
var moment = require('moment');


exports.route = {
    get: 
        function(req, res) {
            var numGuests = req.params.numGuests;
            var apartment = req.params.apartment;
            
            var date = "" + moment().month() + "/" + moment().date() + "/" + moment().year() + " at " + moment().hours() + ":";
            
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