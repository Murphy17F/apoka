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

/* <form action="https://docs.google.com/forms/u/2/d/e/1FAIpQLSdKJLGupi4lseiC3JtII8A296fwIG9zMG6JFBY-KGaaL3hdfw/formResponse" method="POST">
    3-0<input type="text" name="entry.161202834"><br>
    0-3<input type="text" name="entry.572228560"><br>
    1<input type="text" name="entry.698483627"><br>
    2<input type="text" name="entry.698483627"><br>
    3<input type="text" name="entry.698483627"><br>
    4<input type="text" name="entry.698483627"><br>
    5<input type="text" name="entry.698483627"><br>
    6<input type="text" name="entry.698483627"><br>
    7<input type="text" name="entry.698483627"><br>
    
    <button type="submit">Enviar</button>
</form> */

function sendData(){
    /* const slot_0 = document.getElementById("slot_0").querySelector("img").getAttribute("alt");
    const slot_8 = document.getElementById("slot_8").querySelector("img").getAttribute("alt"); 
    const slot_1 = document.getElementById("slot_1").querySelector("img").getAttribute("alt");
    const slot_2 = document.getElementById("slot_2").querySelector("img").getAttribute("alt");
    const slot_3 = document.getElementById("slot_3").querySelector("img").getAttribute("alt");
    const slot_4 = document.getElementById("slot_4").querySelector("img").getAttribute("alt");
    const slot_5 = document.getElementById("slot_5").querySelector("img").getAttribute("alt");
    const slot_6 = document.getElementById("slot_6").querySelector("img").getAttribute("alt");
    const slot_7 = document.getElementById("slot_7").querySelector("img").getAttribute("alt"); */

/*     const formData = new FormData();
    formData.append("entry.161202834", slot_0);
    formData.append("entry.572228560", slot_8);
    formData.append("entry.698483627", slot_1);
    formData.append("entry.698483627", slot_2);
    formData.append("entry.698483627", slot_3);
    formData.append("entry.698483627", slot_4);
    formData.append("entry.698483627", slot_5);
    formData.append("entry.698483627", slot_6);
    formData.append("entry.698483627", slot_7);
    formData.append("submit", "Submit"); */

    var formId = '1FAIpQLSdKJLGupi4lseiC3JtII8A296fwIG9zMG6JFBY-KGaaL3hdfw'
    var queryString = '/formResponse'
    var url = 'https://docs.google.com/forms/u/2/d/e/' + formId + queryString

    var form = document.createElement("form");
    var in0 = document.createElement("input"); 
    var in8 = document.createElement("input"); 

    form.method = "POST";
    form.action = url;   

    in0.value=document.getElementById("slot_0").querySelector("img").getAttribute("alt");;
    in0.name="entry.161202834";
    form.appendChild(in0);  

    in8.value=document.getElementById("slot_8").querySelector("img").getAttribute("alt");;
    in8.name="entry.572228560";
    form.appendChild(in8);

    for (let i = 1; i <= 7; i++) {
        var in0 = document.createElement("input");
        in0.value = document.getElementById("slot_"+i).querySelector("img").getAttribute("alt");
        in0.name="entry.698483627";
        form.appendChild(in0);
    }

    document.body.appendChild(form);

    form.submit();
}