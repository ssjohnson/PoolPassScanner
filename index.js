var express = require('express');
var app = express();
var morgan = require('morgan');
var body_parser = require('body-parser');

var http = require('http').Server(app);

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(morgan('dev'));

app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: false }));
        
var router = express.Router();

var routes = require('./routes');

router.get('/', routes.mainpage);

router.get('/guest', routes.guestPage);

router.get('/guest/:apartment/:numGuests', routes.guest_store.route.get);

router.post('/guest', routes.guest_post.route.post);

router.get('/resident', routes.residentPage);

router.post('/resident', routes.resident_post.route.post);

app.use(router);



http.listen(process.env.PORT || 3000, function() {
    console.log('Example App Listening at 3000');
});
        