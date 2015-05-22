exports.route = {
    post:
        function(req, res) {
            var barcode = req.params('barcode')//('barcode');
            
            console.log(barcode);
            
            res.render('index');
        }
}