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

function savePic() {
    var canvas = document.getElementById('photo');
    var canvas64 = canvas.toDataURL("image/png");
    console.log("HIT");
    
    var url = window.location.href;
    console.log(url);
    var tag = url.split('/');
    console.log(tag);
    
    
    $.ajax ({
        url:'http://localhost:3000/newuser',
        data: {data:canvas64, url: url},
        type: 'POST',
        success: function() { console.log('success'); },
        error: function() { console.log('error'); },
        complete: function() { window.location.href = '/' }
    });
    
}
    
                    