var fs = require('fs');


exports.route = {
    get: 
        function(req, res) {
            var numGuests = req.params.numGuests;
            
            console.log(numGuests);
            
            res.redirect('/');
            
        }
}