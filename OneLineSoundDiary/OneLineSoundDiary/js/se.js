var events="def";
var person="def";
var emotion="def";


function getEvents(name){
    var radios = document.getElementsByName(name);
    for(var i=0; i<radios.length; i++){
        if (radios[i].checked) {
            events = radios[i].value;
            break;
        }
    }
    console.log("getEvemnt(): Eventの決定 " + events);
}

function getPerson(name){
    var radios = document.getElementsByName(name);

    for(var i=0; i<radios.length; i++){
        if (radios[i].checked) {
            person = radios[i].value;
            break;
        }
    }
    console.log("getPerson(): Personの決定 " + person);
}

function getEmotion(name){
    var radios = document.getElementsByName(name);

    for(var i=0; i<radios.length; i++){
        if (radios[i].checked) {
            emotion = radios[i].value;
            break;
        }
    }
    console.log("getEmotion(): Emotionの決定 " + emotion);
}



function stop(){
    hanabiStop();
    hanabi_loverStop();
    hanabi_friendStop();
    campStop();
    camp_loverStop();
    camp_friendStop();
    seaStop();
    sea_loverStop();
    sea_friendStop();
    sadStop();
    happyStop();
    console.log("stop(): 音楽の停止")
}

function start(){
    console.log("start(): sound start");
    if(events=="hanabi"){
        hanabi();
        console.log("start(): hanabi");
    }
    else if(events=="camp"){
        camp();
        console.log("start(): camp");
    }
    else if(events=="sea"){
        sea();
        console.log("start(): sea");
    }
}

function hanabi(){
    campStop();
    camp_loverStop();
    camp_friendStop();
    seaStop();
    sea_loverStop();
    sea_friendStop();

    hanabiStart();
    hanabi_loverStart();
    hanabi_friendStart();
    sadStart();
    happyStart();
    console.log("hanabi(): 花火");
}
function camp(){
    hanabiStop();
    hanabi_loverStop();
    hanabi_friendStop();
    seaStop();
    sea_loverStop();
    sea_friendStop();

    campStart();
    camp_loverStart();
    camp_friendStart();
    sadStart();
    happyStart();
    console.log("camp(): キャンプ");

}
function sea(){
    hanabiStop();
    hanabi_loverStop();
    hanabi_friendStop();
    campStop();
    camp_loverStop();
    camp_friendStop();

    seaStart();
    sea_loverStart();
    sea_friendStart();
    sadStart();
    happyStart();
    console.log("sea(): 海");

}

function add_person(){
    if(events=="hanabi"){
        if(person=="friend" || person=="family"){
            hanabi_friendVolumeUp();
        }
        else{
            hanabi_loverVolumeUp();
        }
    }
    else if(events=="camp"){
        if(person=="friend" || person=="family"){
            camp_friendVolumeUp();
        }
        else{
            camp_loverVolumeUp();
        }

    }
    else if(events=="sea"){
        if(person=="friend" || person=="family"){
            sea_friendVolumeUp();
        }
        else{
            sea_loverVolumeUp();
        }

    }
}

function add_emotion(){
    if(emotion=="happy"){
        happyVolumeUp();
    }
    else{
        sadVolumeUp();
    }
}



function hanabiStart(){
    var v = document.getElementById("hanabi");
    v.volume=1;
    v.play();
    console.log("花火s");
}
function hanabiVolumeUp(){
    var v = document.getElementById("hanabi");
    v.volume = 1;
}
function hanabiStop(){
    var v = document.getElementById("hanabi");
    v.load();
    v.volume=0;
}

function hanabi_loverStart(){
    var v = document.getElementById("hanabi_lover");
    v.volume=0;
    
    v.play();
}
function hanabi_loverVolumeUp(){
    var v = document.getElementById("hanabi_lover");
    v.volume = 1;
}
function hanabi_loverStop(){
    var v = document.getElementById("hanabi_lover");
    v.load();
    v.volume=0;
}

function hanabi_friendStart(){
    var v = document.getElementById("hanabi_friend");
    v.volume=0;
    
    v.play();
}
function hanabi_friendVolumeUp(){
    var v = document.getElementById("hanabi_friend");
    v.volume = 1;
}
function hanabi_friendStop(){
    var v = document.getElementById("hanabi_friend");
    v.load();
    v.volume=0;
}

function campStart(){
    var v = document.getElementById("camp");
    v.volume=1;
    v.play();
}
function campVolumeUp(){
    var v = document.getElementById("camp");
    v.volume = 1;
}
function campStop(){
    var v = document.getElementById("camp");
    v.load();
    v.volume=0;
}

function camp_loverStart(){
    var v = document.getElementById("camp_lover");
    v.volume=0;
    
    v.play();
}
function camp_loverVolumeUp(){
    var v = document.getElementById("camp_lover");
    v.volume = 1;
}
function camp_loverStop(){
    var v = document.getElementById("camp_lover");
    v.load();
    v.volume=0;
}

function camp_friendStart(){
    var v = document.getElementById("camp_friend");
    v.volume=0;
    
    v.play();
}
function camp_friendVolumeUp(){
    var v = document.getElementById("camp_friend");
    v.volume = 1;
}
function camp_friendStop(){
    var v = document.getElementById("camp_friend");
    v.load();
    v.volume=0;
}

function seaStart(){
    var v = document.getElementById("sea");
    v.volume=1;
    
    v.play();
}
function seaVolumeUp(){
    var v = document.getElementById("sea");
    v.volume = 1;
}
function seaStop(){
    var v = document.getElementById("sea");
    v.load();
    v.volume=0;
}

function sea_loverStart(){
    var v = document.getElementById("sea_lover");
    v.volume=0;
    
    v.play();
}
function sea_loverVolumeUp(){
    var v = document.getElementById("sea_lover");
    v.volume = 1;
}
function sea_loverStop(){
    var v = document.getElementById("sea_lover");
    v.load();
    v.volume=0;
}

function sea_friendStart(){
    var v = document.getElementById("sea_friend");
    v.volume=0;
    
    v.play();
}
function sea_friendVolumeUp(){
    var v = document.getElementById("sea_friend");
    v.volume = 1;
}
function sea_friendStop(){
    var v = document.getElementById("sea_friend");
    v.load();
    v.volume=0;
}

function happyStart(){
    var v = document.getElementById("happy");
    v.volume=0;
    
    v.play();
}
function happyVolumeUp(){
    var v = document.getElementById("happy");
    v.volume = 1;
}
function happyStop(){
    var v = document.getElementById("happy");
    v.load();
    v.volume=0;
}

function sadStart(){
    var v = document.getElementById("sad");
    v.volume=0;
    
    v.play();
}
function sadVolumeUp(){
    var v = document.getElementById("sad");
    v.volume = 1;
}
function sadStop(){
    var v = document.getElementById("sad");
    v.load();
    v.volume=0;
}
