teams = [
    {"seed": 1,"name": "Natus Vincere", "rnd": "0-0", "score": 0, "v":0, "d":0, "match":[], "status": 0, "img":"https://majors.im/images/paris2023_rmr/navi.png"},
    {"seed": 2,"name": "9INE", "rnd": "0-0", "score": 0, "v":0, "d":0, "match":[], "status": 0, "img":"https://majors.im/images/paris2023_rmr/9ine.png"},
    {"seed": 3,"name": "FURIA", "rnd": "0-0", "score": 0, "v":0, "d":0, "match":[], "status": 0, "img":"https://majors.im/images/paris2023_rmr/furi.png"},
    {"seed": 4,"name": "Fnatic", "rnd": "0-0", "score": 0, "v":0, "d":0, "match":[], "status": 0, "img":"https://majors.im/images/paris2023_rmr/fnat.png"},
    {"seed": 5,"name": "Heroic", "rnd": "0-0", "score": 0, "v":0, "d":0, "match":[], "status": 0, "img":"https://majors.im/images/paris2023_rmr/hero.png"},
    {"seed": 6,"name": "Into The Breach", "rnd": "0-0", "score": 0, "v":0, "d":0, "match":[], "status": 0, "img":"https://majors.im/images/paris2023_rmr/itb.png"},
    {"seed": 7,"name": "Vitality", "rnd": "0-0", "score": 0, "v":0, "d":0, "match":[], "status": 0, "img":"https://majors.im/images/paris2023_rmr/vita.png"},
    {"seed": 8,"name": "Bad News Eagles", "rnd": "0-0", "score": 0, "v":0, "d":0, "match":[], "status": 0, "img":"https://majors.im/images/paris2023_rmr/bne.png"},
    {"seed": 9,"name": "ENCE", "prev": 0, "img":"https://majors.im/images/paris2023_rmr/ence.png"},
    {"seed": 10,"name": "G2", "prev": 0, "img":"https://majors.im/images/paris2023_rmr/g2.png"},
    {"seed": 11,"name": "Apeks", "prev": 0, "img":"https://majors.im/images/paris2023_rmr/apek.png"},
    {"seed": 12,"name": "FaZe Clan", "prev": 0, "img":"https://majors.im/images/paris2023_rmr/faze.png"},
    {"seed": 13,"name": "NiP", "prev": 0, "img":"https://majors.im/images/paris2023_rmr/nip.png"},
    {"seed": 14,"name": "Monte", "prev": 0, "img":"https://majors.im/images/paris2023_rmr/mont.png"},
    {"seed": 15,"name": "Liquid", "prev": 0, "img":"https://majors.im/images/paris2023_rmr/liqu.png"},
    {"seed": 16,"name": "Gamer Legion", "prev": 0, "img":"https://majors.im/images/paris2023_rmr/gl.png"},
]

const apoka = document.getElementById("apoka");
const result = document.getElementById("result");

teams.forEach(team => {
    result.innerHTML += `
    <div class="qualify result-box">
        <!-- <span>#${team.seed}</span> -->
        <div id="drag_${team.seed}"><img id="drag${team.seed}" src="${team.img}" alt="${team.name}" 
        draggable="true" ondragstart="drag(event)"/></div>
        <span class="result-team">${team.name}</span>
    </div>`
}); 

function sendData(){
    const send = localStorage.getItem("sendData");
    const sendBtn = document.getElementById("send");
    if(send == 1){sendBtn.style.visibility = checkSend() ? 'visible' : 'hidden'; return;}
    var formId = '1FAIpQLSdKJLGupi4lseiC3JtII8A296fwIG9zMG6JFBY-KGaaL3hdfw'
    var queryString = '/formResponse'
    var url = 'https://docs.google.com/forms/d/e/' + formId + queryString

    var form = document.createElement("form");
    form.method = "POST";
    form.action = url;   
    
    form.appendChild(newInput("entry.161202834", "slot_0"));  
    form.appendChild(newInput("entry.572228560", "slot_8"));  

    for (let i = 1; i <= 7; i++)
        form.appendChild(newInput("entry.698483627", "slot_"+i));  

    document.body.appendChild(form);
    form.submit();
    localStorage.setItem("sendData", 1);
}

function newInput(name, slot){
    var element = document.createElement("input"); 
    element.value= document.getElementById(slot).querySelector("img").getAttribute("alt");;
    element.name = name;
    return element;
}