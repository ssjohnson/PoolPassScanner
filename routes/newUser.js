var fs = require('fs');
var memberlist = require('../1280memberlist.json');


exports.route = {
    get: 
        function (req, res) {
            res.render('newUser');
        },
    
    post:
        function (req, res) {
            var url = req.body.url;
            
            url = url.split('/');
            
            var tag = url[4].replace("?", "");
            
            var imgPath = 'public/images/' + tag + '.png';
            console.log(imgPath);
            
            for (var i = 0; i < memberlist.length; i++) {
                if(memberlist[i].Tag == tag) {
                    memberlist[i].Picture = imgPath.replace('public/', '');
                    console.log('success');
                    break;
                }
            }
            
            fs.writeFile('1280memberlist.json', JSON.stringify(memberlist), function(err) {
                    if(err) 
                        console.log(err);
                });
            
            
            var base64data = req.body.data.replace(/^data:image\/png;base64,/, "");
            fs.writeFile(imgPath, base64data, 'base64', function(err) { console.log(err); });
            res.render('index');
        }
}

