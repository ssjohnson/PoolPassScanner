var fs = require('fs');

function init() {
    if(navigator.webkitGetUserMedia)
    {
        navigator.webkitGetUserMedia({video:true}, onSuccess, onFail);
    }
    else
    {
        alert("webRTC unavailable");
    }
}

function onSuccess(stream)
{
    document.getElementById('camFeed').src = webkitURL.createObjectURL(stream);
}

function onFail()
{
    alert('could not connect stream');
}

function takePhoto()
{
    var c = document.getElementById('photo');
    var v = document.getElementById('camFeed');
    c.getContext('2d').drawImage(v, 0, 0, 320, 240);
}


var save = document.getElementById('btn-download');
save.addEventListener('click', function(e) {
    var dataURL = document.getElementById('photo').toDataURL('image/png');
    save.href = dataEURL;
});