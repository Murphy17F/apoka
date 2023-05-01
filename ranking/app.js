/* teams = [
    {"seed": 1,"name": "Furia", "prev": 0, "img":"https://majors.im/images/paris2023_qual/impe.png"},
    {"seed": 2,"name": "MIBR", "prev": 0, "img":"https://majors.im/images/paris2023_qual/impe.png"},
    {"seed": 3,"name": "paiN", "prev": 0, "img":"https://majors.im/images/paris2023_qual/impe.png"},
    {"seed": 4,"name": "Team One", "prev": 0, "img":"https://majors.im/images/paris2023_qual/impe.png"},
    {"seed": 5,"name": "Fluxo", "prev": 0, "img":"https://majors.im/images/paris2023_qual/flux.png"},
    {"seed": 6,"name": "00Nation", "prev": 0, "img":"https://majors.im/images/paris2023_qual/00.png"},
    {"seed": 7,"name": "9z", "prev": 0, "img":"https://majors.im/images/paris2023_qual/9z.png"},
    {"seed": 8,"name": "Imperial", "prev": 0, "img":"https://majors.im/images/paris2023_qual/impe.png"},
    {"seed": 9,"name": "Sharks", "prev": 0, "img":"https://majors.im/images/paris2023_qual/shar.png"},
    {"seed": 10,"name": "Curintians", "prev": 0, "img":"https://majors.im/images/paris2023_qual/cori.png"},
    {"seed": 11,"name": "Arctic", "prev": 0, "img":"https://majors.im/images/paris2023_qual/arct.png"},
    {"seed": 12,"name": "O Plano", "prev": 0, "img":"https://majors.im/images/paris2023_qual/plan.png"},
    {"seed": 13,"name": "Bestia", "prev": 0, "img":"https://majors.im/images/paris2023_qual/best.png"},
    {"seed": 14,"name": "Fuscão", "prev": 0, "img":"https://majors.im/images/paris2023_qual/fusc.png"},
    {"seed": 15,"name": "Oddik", "prev": 0, "img":"https://majors.im/images/paris2023_qual/odk.png"},
    {"seed": 16,"name": "Windingo", "prev": 0, "img":"https://majors.im/images/paris2023_qual/win.png"},
    {"seed": 17,"name": "INTz", "prev": 0, "img":"https://majors.im/images/paris2023_qual/intz.png"},
    {"seed": 18,"name": "Red Canids", "prev": 0, "img":"https://majors.im/images/paris2023_qual/red.png"},
] */

teams = []
const apoka = document.getElementById("apoka");

/* fetch('https://hltv-api.vercel.app/api/player.json') */
fetch('https://cdn1.api.esl.tv/csgo/worldranking/team/list')
.then((response) => response.json())
.then((data) => loadHLTV(data));

rnd = ["fa-minus left", "fa-chevron-square-up up", "fa-chevron-square-down down"];

function loadHLTV(data){
    teams = data.items;
    teams.sort((a, b) => (a.power_rank > b.power_rank) ? 1 : -1);
    count = 0; 
    teams.forEach(team => {
        if(count < 50)
            if(team.power_rank > 0){
                console.log(`${team.power_rank} | ${team.name} (${team.id}) | ${getLogo(team.id, team.logo)}`);
                apoka.innerHTML += `
                <div class="tb-teams">
                <div class="team-pos">#${team.power_rank}</div>
                <img src="${getLogo(team.id, team.logo)}">
                <div class="team-name">${team.name}</div>
                <div class="team-prev"><i class="fas ${rnd[Math.floor(Math.random() * rnd.length)]}"></i>${Math.floor(Math.random() * 3)+1}</div>
                </div>`
                count++;
            }
    });
}

/* 
<div class="team-prev"><i class="fas fa-chevron-square-up up"></i>1</div>
<div class="team-prev"><i class="fas fa-chevron-square-down down"></i>1</div>
<div class="team-prev"><i class="fas fa-minus left"></i>0</div>
*/

function getLogo(id, srcImg){
    if(srcImg.length > 0){
        let logo = srcImg.split("/"+id+"-");
        if(logo[1] != undefined){
            logo[0] = "https://apiesltv.imgix.net/images/team/logo/"
            return logo[0]+id+"_"+logo[1]+"?auto=compress&w=60";
        }
    }
    return "https://apiesltv.imgix.net/images/team/logo/118-2f0d9b65-440a-44c3-9399-7d671f600bb5.png?auto=compress&w=60"
}

/* 
rgb(57, 57, 53);
up{content: "\f32c";} rgb(121, 178, 80);
dw{content: "\f329";} rgb(205, 121, 121);
rg{content: "\f32b";} rgb(255, 255, 255);

font-family: sans-serif;
font-family: "Calps Sans", Helvetica, Arial, sans-serif;

.cZDDBv {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    position: relative;
    background-color: rgb(107, 255, 54);
    color: rgb(255, 255, 255);
    flex: 0 0 10px;
}

https://apiesltv.imgix.net/images/team/logo/335_a4a87670-5f05-4f42-9d6c-1f07171914f4.png?auto=compress&w=60 

teams.forEach( team => {
    apoka.innerHTML += `<div class="tb-teams">
        <div class="team-pos">${team.seed}</div>
        <img src="${team.img}">
        <div class="team-name">${team.name}</div>
        <div class="team-prev">${team.seed - team.prev}</div>
    </div>`
}); */