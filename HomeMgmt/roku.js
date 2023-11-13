let port = "8060"

let tvs = {
    LivingRoom: ""
}

let controllers_keys ={
    ArrowLeft: "Left",
    ArrowRight: "Right",
    ArrowUp: "Up",
    ArrowDown: "Down",
    Home: "Home",
    Enter: "Select",
    Escape: "Back",
    Insert: "Play",
    PageUp: "Rev",
    PageDown: "Fwd",
    Backspace: "Backspace",
    Space: "LIT_%20"
}

function tvControl(key)
{
    let url = "http://"+tvs.LivingRoom+":"+port+"/keypress/"+key
    fetch(url,{method:"POST"})
}

function setDeviceId()
{
    let id = document.getElementById("rokuControllerID");
    tvs.LivingRoom = id.value;
    let dID = document.getElementById("deviceID")
    dID.innerHTML = id.value;
}

function tvControlText(key)
{

    let keydata = Object.keys(controllers_keys).some(function(keyFind) {return keyFind == key.code});
    //console.log(keydata);

    let baseUrl = "http://"+tvs.LivingRoom+":"+port+"/keypress/"

    let url = baseUrl + ((keydata === true) ? controllers_keys[key.code] : "LIT_"+[key.key] )
    //console.log(url);
    fetch(url,{method:"POST"})
}

function poweron()
{
    fetch("http://"+tvs.LivingRoom+":8060/keypress/PowerOn",{method:"POST"})
}

function deviceInfo()
{
    return fetch("http://"+tvs.LivingRoom+":8060/query/device-info",{method:"GET"})
}