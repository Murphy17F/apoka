teams = [
    {"seed": 1,"name": "Monte", "prev": 0, "img":"https://majors.im/images/paris2023_rmr/mont.png"},
    {"seed": 2,"name": "paiN", "prev": 0, "img":"https://majors.im/images/paris2023_rmr/pain.png"},
    {"seed": 3,"name": "G2", "prev": 0, "img":"https://majors.im/images/paris2023_rmr/g2.png"},
    {"seed": 4,"name": "Gamer Legion", "prev": 0, "img":"https://majors.im/images/paris2023_rmr/gl.png"},
    {"seed": 5,"name": "forZe", "prev": 0, "img":"https://majors.im/images/paris2023_rmr/forz.png"},
    {"seed": 6,"name": "Apeks", "prev": 0, "img":"https://majors.im/images/paris2023_rmr/apek.png"},
    {"seed": 7,"name": "NiP", "prev": 0, "img":"https://majors.im/images/paris2023_rmr/nip.png"},
    {"seed": 8,"name": "OG", "prev": 0, "img":"https://majors.im/images/paris2023_rmr/og.png"},
    {"seed": 9,"name": "ENCE", "prev": 0, "img":"https://majors.im/images/paris2023_rmr/ence.png"},
    {"seed": 10,"name": "MOUZ", "prev": 0, "img":"https://majors.im/images/paris2023_rmr/mouz.png"},
    {"seed": 11,"name": "Liquid", "prev": 0, "img":"https://majors.im/images/paris2023_rmr/liqu.png"},
    {"seed": 12,"name": "Grayhound", "prev": 0, "img":"https://majors.im/images/paris2023_rmr/ghg.png"},
    {"seed": 13,"name": "Complexity", "prev": 0, "img":"https://majors.im/images/paris2023_rmr/col.png"},
    {"seed": 14,"name": "The MongolZ", "prev": 0, "img":"https://majors.im/images/paris2023_rmr/mong.png"},
    {"seed": 15,"name": "Fluxo", "prev": 0, "img":"https://majors.im/images/paris2023_rmr/flux.png"},
    {"seed": 16,"name": "FaZe Clan", "prev": 0, "img":"https://majors.im/images/paris2023_rmr/faze.png"},
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