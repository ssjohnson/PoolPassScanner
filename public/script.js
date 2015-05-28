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

function getBase64(canvas) {
    var dataURL = canvas.toDataURL("image/png");
    return dataURL.replace(/^data:image\/(png|jpg);base64,/,"");
}

function savePic() {
    var canvas = document.getElementById('photo');
    var canvas64 = getBase64(canvas);
    
    var lnk = document.getElementById('download-pic');
    lnk.href = "/" + canvas64;
}
    
                    