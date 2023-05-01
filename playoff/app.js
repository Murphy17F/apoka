//#region 
/* Regras:
    - Os times são agrupados por placar (R1: 0-0 | R2: 1-0, 0-1 | R3: 2-0, 1-1, 0-2 | R4: 2-1, 1-2 | R5: 2-2)
    - Um time não pode enfretar outro 2x
    - Maior SCORE¹ contra menor, em caso de empate:
        - Melhor SEED contra pior

    ¹Score é a soma do BU dos oponentes anteriores (V=1, D=-1)
    Ex: Time A tem SCORE de -2, jogou contra X e Y
        o time X perdeu 2 (0v-2d == -2)
        o time Y venceu 1 (1v-1d == 0)
    
    Vagas x Round
    5 vagas - 4 rounds  (3-0 | 3-1)
    6 vagas - 5 rounds  (3-0 | 3-1 | 3-2) com 2 3-2 eliminados
    7 vagas - 6 rounds  (3-0 | 3-1 | 3-2) com 1 3-2 eliminado
    8 vagas - 5 rounds  (3-0 | 3-1 | 3-2)

    {"seed": 1,"name": "Imperial", "img":"https://majors.im/images/paris2023_qual/impe.png"},
*/
//#endregion

teams = [
    {"seed": 1,"name": "Furia", "img":"https://majors.im/images/rio2022_rmr/am/furi.png"},
    {"seed": 2,"name": "Liquid", "img":"https://majors.im/images/rio2022_rmr/am/liqu.png"},
    {"seed": 3,"name": "BESTIA", "img":"https://majors.im/images/paris2023_qual/best.png"},
    {"seed": 4,"name": "Complexy", "img":"https://majors.im/images/paris2023_qual/col.png"},
    {"seed": 5,"name": "Imperial", "img":"https://majors.im/images/paris2023_qual/impe.png"},
    {"seed": 6,"name": "paiN", "img":"https://majors.im/images/paris2023_qual/pain.png"},
    {"seed": 7,"name": "Fluxo", "img":"https://majors.im/images/paris2023_qual/flux.png"},
    {"seed": 8,"name": "MIBR", "img":"https://majors.im/images/paris2023_qual/mibr.png"},
    {"seed": 9,"name": "Flamengo", "img":"https://majors.im/images/paris2023_qual/flam.png"},
    {"seed": 10,"name": "yur", "img":"https://majors.im/images/paris2023_qual/yur.png"},
    {"seed": 11,"name": "Paquetá", "img":"https://majors.im/images/paris2023_qual/paqu.png"},
    {"seed": 12,"name": "Detonte", "img":"https://majors.im/images/paris2023_qual/dtn.png"},
    {"seed": 13,"name": "Fuscão", "img":"https://majors.im/images/paris2023_qual/fusc.png"},
    {"seed": 14,"name": "Nouns", "img":"https://majors.im/images/paris2023_qual/noun.png"},
    {"seed": 15,"name": "OONation", "img":"https://majors.im/images/paris2023_qual/00.png"},
    {"seed": 16,"name": "TeamOne", "img":"https://majors.im/images/paris2023_qual/los.png"},
    {"seed": 17,"name": "Heroic", "img":"https://majors.im/images/paris2023_rmr/hero.png"},
    {"seed": 18,"name": "Cloud9", "img":"https://majors.im/images/paris2023_rmr/c9.png"},
    {"seed": 19,"name": "Team Spirit", "img":"https://majors.im/images/paris2023_rmr/spir.png"},
    {"seed": 20,"name": "BIG", "img":"https://majors.im/images/paris2023_rmr/big.png"},
    {"seed": 21,"name": "ENCE", "img":"https://majors.im/images/paris2023_rmr/ence.png"},
    {"seed": 22,"name": "Team Vitality", "img":"https://majors.im/images/paris2023_rmr/vita.png"},
    {"seed": 23,"name": "Ninjas in Pyjamas", "img":"https://majors.im/images/paris2023_rmr/nip.png"},
    {"seed": 24,"name": "G2 Esports", "img":"https://majors.im/images/paris2023_rmr/g2.png"},
    {"seed": 25,"name": "Eternal Fire", "img":"https://majors.im/images/paris2023_rmr/ef.png"},
    {"seed": 26,"name": "Astralis", "img":"https://majors.im/images/paris2023_rmr/astr.png"},
    {"seed": 27,"name": "Aurora Gaming", "img":"https://majors.im/images/paris2023_rmr/auro.png"},
    {"seed": 28,"name": "Virtus.pro", "img":"https://majors.im/images/paris2023_rmr/vp.png"},
    {"seed": 29,"name": "FaZe Clan", "img":"https://majors.im/images/paris2023_rmr/faze.png"},
    {"seed": 30,"name": "Fnatic", "img":"https://majors.im/images/paris2023_rmr/fnat.png"},
    {"seed": 31,"name": "Natus Vincere", "img":"https://majors.im/images/paris2023_rmr/navi.png"},
    {"seed": 32,"name": "OG", "img":"https://majors.im/images/paris2023_rmr/og.png"},
]


const groups = 2;
let round_max = 1;

getRounds(teams.length/groups);

function getRounds(rnd) {
    rnd /= groups;
    if(rnd > groups)
        getRounds(rnd);
        round_max++;
}
console.log(`Times: ${teams.length}, Grupos de ${teams.length/groups}, Rounds: ${round_max}`);

const main = document.getElementById("apoka");

/* var groupATeams = teams.slice(0,teams.length/groups);
var groupBTeams = teams.slice(teams.length/groups); */


for (let groupId = 1; groupId <= groups; groupId++) {
    let groupDiv = document.createElement("div");
    groupDiv.id = "group_" + groupId;
    if(groupId%2 == 0){
        for (let roundId = round_max; roundId >= 1; roundId--)
            groupDiv.appendChild(createRounds(roundId));
    }else{
        for (let roundId = 1; roundId <= round_max; roundId++)
            groupDiv.appendChild(createRounds(roundId));
    }
    
    main.appendChild(groupDiv);
    if(groupId == groups/2)
        main.appendChild(createRounds(0));

    generatedMatchups(teams.slice(((teams.length/groups)*groupId)-(teams.length/groups), ((teams.length/groups)*groupId)), groupId);
}

function createRounds(roundId) {
    let col = document.createElement("div");
    col.className ="col";
    let roundDiv = document.createElement("div");
    roundDiv.id = "round_" + roundId;
    roundDiv.className = "round";

    if(roundId==0){
        roundDiv.innerHTML = `<div class="champion"><span>?</span></div>`
        let matchBox = document.createElement("div");
        matchBox.className = "match-box-sub final";
        matchBox.innerHTML = `<div class="team-A"><span class="team-logo"></span><span class="team-seed"></span></div>`;
        matchBox.innerHTML += `<div class="team-B"><span class="team-logo"></span><span class="team-seed"></span></div>`;
        roundDiv.appendChild(matchBox);
    }else{
        let matchups = teams.length/groups;
        for (let x = 0; x < roundId; x++)
            matchups /= 2;
        for (let i = 0; i < matchups; i++) {
            let matchBox = document.createElement("div");
            matchBox.className = "match-box-sub";
            matchBox.innerHTML = `<div class="team-A"><span class="team-logo"></span><span class="team-seed"></span></div>`;
            matchBox.innerHTML += `<div class="team-B"><span class="team-logo"></span><span class="team-seed"></span></div>`;
            roundDiv.appendChild(matchBox);
        }
    }
    col.appendChild(roundDiv);    
    return col;
}

var rnd1 = document.querySelector("#round_1");
const root = document.documentElement;
root.style.setProperty('--height', rnd1.getBoundingClientRect().height+'px');

function generatedMatchups(teamsGroup, groupId){
    const element = document.getElementById("group_"+groupId);
    const rnd = element.querySelector("#round_1");
    for (let index = 0; index < teamsGroup.length/2; index++) {
        let indexB = teamsGroup.length - index - 1;
        let teamA = teamsGroup[index];
        let teamB = teamsGroup[indexB];

        let matchBox = rnd.querySelectorAll(".match-box-sub")[index];
        
        createMatchupTeam(matchBox, teamA, "team-A");
        createMatchupTeam(matchBox, teamB, "team-B");
    }
}

function createMatchupTeam(matchBox, team, key) {
    let element = matchBox.querySelector("."+key);
    element.id = team.seed;
    element.innerHTML = `
        <div class="team-logo"><img src="${team.img}" alt="${team.name}"></div>
        <div class="team-seed">${team.name}</div>`

    element.addEventListener('click', () => {selectWinner(element);});
    return element;
}

function selectWinner(teamWin){
    let matchGame = teamWin.parentNode;
    let rnd = matchGame.parentNode;
    let rndNum = parseInt(rnd.id.substring(6));
    let teamLose;

    if(teamWin.id == matchGame.querySelector(".team-A").id)
        teamLose = matchGame.querySelector(".team-B");
    else
        teamLose = matchGame.querySelector(".team-A");
    
    teamWin.classList.add("win");
    teamLose.classList.add("lose");

    if(teamWin.classList.contains("lose")) {teamWin.classList.remove("lose");}
    if(teamLose.classList.contains("win")) {teamLose.classList.remove("win");}

    
    let team;
    teams.forEach(item => {
        if(item.seed == teamWin.id)
        team = item;
    });
    
    if(matchGame.classList.contains("final")){
        let champ = document.querySelector(".champion");
        champ.innerHTML = `<img src="${team.img}" alt="${team.name}" title="${team.name}"><span>${team.name}</span>`
        return;
    }

    if(rndNum <= round_max)
        nextRound(rndNum, team, teamWin);
}


function nextRound(rndNum, team, teamWin){
    let group = teamWin.parentNode.parentNode.parentNode.parentNode;
    let round = group.querySelector("#round_"+(rndNum));
    round = round.querySelectorAll(".match-box-sub");
    
    for (let i = 0; i < round.length; i++) {
        if(round[i].querySelector(".team-A").id == team.seed || round[i].querySelector(".team-B").id == team.seed){
            let slot = i+1;
            let nextSlot = Math.trunc((slot / 2 + (slot % 2)));
            let item;
            
            if(rndNum == round_max){
                let grpNum = parseInt(group.id.substring(6));
                let final = document.querySelector(".final");
                item = grpNum % 2 != 0 ? final.querySelector(".team-A") : final.querySelector(".team-B");
                
            }else{  
                let rnd = group.querySelector("#round_"+(rndNum+1));
                let mat_r2 = rnd.querySelectorAll(".match-box-sub")[nextSlot-1];
                
                item = slot % 2 != 0 ? mat_r2.querySelector(".team-A") : mat_r2.querySelector(".team-B");
            }
            item.id = team.seed;
            item.innerHTML = `<span class="team-logo"><img src="${team.img}" alt="${team.name}"></span>
            <span class="team-seed">${team.name}</span>`
            item.addEventListener('click', () => {selectWinner(item);});
        }
    }
    
}

/* let matchs_r1 = rnd1.querySelectorAll(".match-box-sub");
let posMatch_1 = matchs_r1[0].getBoundingClientRect();
let posMatch_2 = matchs_r1[1].getBoundingClientRect();

var rnd2 = document.getElementById("round_2");
let matchs_r2 = rnd2.querySelectorAll(".match-box-sub");
//matchs_r2[0].style.position = "absolute";
matchs_r2[0].style.top = (posMatch_1.height + posMatch_2.height)/2;
matchs_r2[0].style.left = 300;
 */

/* var roundResult = []
if(localStorage.getItem("rounds") != null ){
    roundResult = localStorage.getItem("rounds");
} */
/* generatedMatchs(); */
/* 
function generatedMatchs(){
    round++;
    
    const newRnd = document.createElement("div");
    newRnd.id = "round_"+round;
    newRnd.className = "round";
    
    const miolo = document.getElementById("apoka");
    // miolo.appendChild(rndTitle);
    miolo.appendChild(newRnd);
    
    const rnd = document.getElementById("round_"+round);
    rnd.innerHTML = `<span class="round-title">Round ${round}</span>`;
    
    let groups = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
    teams.forEach( t =>{
        switch (t.rnd) {
            case "0-0": groups[0].push(t); break;   // R1:0

            case "1-0": groups[1].push(t); break;   // R2:1
            case "0-1": groups[2].push(t); break;   // R2
            
            case "2-0": groups[3].push(t); break;   // R3:2
            case "1-1": groups[4].push(t); break;   // R3
            case "0-2": groups[5].push(t); break;   // R3
            
            case "3-0": groups[6].push(t); break;   // R4:3
            case "2-1": groups[7].push(t); break;   // R4
            case "1-2": groups[8].push(t); break;   // R4
            case "0-3": groups[9].push(t); break;   // R4

            case "3-1": groups[10].push(t); break;  // R5:4
            case "2-2": groups[11].push(t); break;  // R5
            case "1-3": groups[12].push(t); break;  // R5
            
            case "3-2": groups[13].push(t); break;  // R6:5
            case "2-3": groups[14].push(t); break;  // R6
        }
    });
    
    groups.forEach( teamsGroup => {       
        teamsGroup.sort((a, b) => (a.score > b.score) ? 1 : -1).reverse();
        let teamsGroupAux = teamsGroup;
        let indexA = 0;

        for (let count = 0; count < teamsGroup.length/2; count++) {
            
            if(teamsGroupAux[indexA].v == 3 || teamsGroupAux[indexA].d == 3) continue;
            let group = teamsGroupAux[indexA].rnd;

            let indexB = teamsGroupAux.length-1;

            while(duplicatedMatch(teamsGroupAux[indexA], teamsGroupAux[indexB])){
                console.log(`[${group}] jogo duplicado: ${teamsGroupAux[indexA].name} x ${teamsGroupAux[indexB].name}`)
                indexB--;                 
            }

            let matchBox = document.createElement("div");
            matchBox.className = "match-box"
            matchBox.innerHTML = `<div class="team-cat">${group}</div>`
            let matchBoxSub = document.createElement("div");
            matchBoxSub.className = "match-box-sub"
            matchBox.appendChild(matchBoxSub);
            
            matchBoxSub.appendChild(createElementTeam(teamsGroupAux[indexA], 1));
            matchBoxSub.appendChild(createElementTeam(teamsGroupAux[indexB], 2));
            
            rnd.appendChild(matchBox);
            
            console.log(`${group}: ${teamsGroupAux[indexA].name} x ${teamsGroupAux[indexB].name}`);
            teamsGroupAux= teamsGroupAux.filter( team => team != teamsGroupAux[indexB]);
            teamsGroupAux = teamsGroupAux.filter( team => team != teamsGroupAux[indexA]);
        }
    });
    
    if(round == 1)
        roundResult = [structRounds(round)];
    
    roundResult[round-1] = structRounds(round);
    localStorage.setItem("rounds", JSON.stringify(roundResult));
    updateWinner();

    if(round < round_max)
        generatedMatchs();
}

function duplicatedMatch(teamA, teamB){
    if(teamA.match.includes(teamB.seed))
        return true;
    return false;
}


function updateWinner(rnd){
    teams.forEach(t => {
        t.v = 0;
        t.d = 0;
        t.score = 0;
        t.status = 0;
        t.rnd = "0-0";
        t.match = [];

        roundResult.forEach((r) => {
            r.match.forEach( (m) => {
                if(t.seed == m.win){
                    if(t.v < vit){
                        t.v++;
                        t.match.push(m.lose);
                    }
                }if(t.seed == m.lose){
                    if(t.d < der){
                        t.d++;
                        t.match.push(m.win);
                    }
                }
            });
        });
    });
    changeScore();
}

function structRounds(rnd){
    let r = document.getElementById("round_"+rnd);
    let matchs = r.querySelectorAll(".match-box-sub");
    let round_temp = {"round":rnd, "match":[]} 
    for (let index = 0; index < matchs.length; index++) {
        const element = matchs[index];
        let tWin = getTeamBySeed(parseInt(element.querySelector("div > .win").id));
        let tLose = getTeamBySeed(parseInt(element.querySelector("div > .lose").id));
        round_temp.match.push({"match": (index+1), "win": tWin.seed, "lose": tLose.seed});
    }
    return round_temp;
}

function createElementTeam(teamsAux, order){
    let team = document.createElement("div");
    team.id = teamsAux.seed
    team.className = "team-"+ ((order == 1) ? "A" : "B");
    team.classList.add(((order == 1) ? "win" : "lose"));
    team.innerHTML = `<div class="team-logo"><img src="${teamsAux.img}" alt="${teamsAux.name}"/></div>
    
    <div class="team-seed">#${teamsAux.seed} | ${teamsAux.score}</div>`
    team.addEventListener('click', (evnt) => selectWinner(evnt, team))
    return team;
}

function selectWinner(evnt, team){
    let matchGame = team.parentNode;
    let teamWin, teamLose;
    if(team.id === matchGame.childNodes[0].id){
        teamWin = matchGame.childNodes[0];
        teamLose = matchGame.childNodes[1];       
    }else{
        teamWin = matchGame.childNodes[1];
        teamLose = matchGame.childNodes[0];
    }
    
    teamWin.classList.add("win"); 
    teamLose.classList.add("lose");
    
    let changeResult = false;
    let rnd_click = parseInt(team.parentNode.parentNode.parentNode.id.substring(6)); // round_X 
    if(evnt != null){
        if(teamWin.classList.contains("lose") || teamLose.classList.contains("win")) {
            changeResult = !changeResult;
            if(teamWin.classList.contains("lose")) {teamWin.classList.remove("lose");}
            if(teamLose.classList.contains("win")) {teamLose.classList.remove("win");}
        }
    }
   
    let x = round-rnd_click;
    for(let i = 0; i < x; i++) {
        roundResult.pop();
        localStorage.setItem("rounds", JSON.stringify(roundResult));
    }
    round = rnd_click;    
    updateWinner();
    roundResult[rnd_click-1] = structRounds(rnd_click);
    localStorage.setItem("rounds", JSON.stringify(roundResult));
    updadeMatch(teamWin.id, teamLose.id, changeResult);
    if(x>0)
        generatedMatchs();
}

function updadeMatch(seedWin, seedLose, changeResult){
    seedWin = parseInt(seedWin)
    seedLose = parseInt(seedLose)
    
    let teamWin = getTeamBySeed(seedWin);
    let teamLose = getTeamBySeed(seedLose);

    if(changeResult){
        if(teamWin.v < vit) teamWin.v++;
        if(teamLose.d < der) teamLose.d++;
        teamWin.d--;
        teamLose.v--;
    }else{
        if(teamWin.v < vit){
            teamWin.match.push(teamLose.seed);
            teamWin.v++;
        }
        if(teamLose.d < der){
            teamLose.match.push(teamWin.seed);
            teamLose.d++;
        }
    }
    changeScore();
}

function getTeamBySeed(seed){
    return teams.find( team => team.seed == seed)
}

function getGroup(team){
    return team.v + "-" + team.d
}

function getSaldo(team){
    return team.v-team.d
}

function changeScore(){
    teams.forEach( t => {
        let score = 0;
        t.rnd = getGroup(t);
        
        t.match.forEach(match => {
            let teamMatch = getTeamBySeed(match);
            score += getSaldo(teamMatch);
        }); 
        t.score = score;
    });
    localStorage.setItem("teams", JSON.stringify(teams));
    result();
}

function result(){
    let classif = []
    teams.forEach( x => classif.push(x))
    classif.sort(function(a, b) {
        if (a.v !== b.v) {
          return b.v - a.v;
        } else if (a.d !== b.d) {
          return a.d - b.d;
        } else if (a.score !== b.score) {
          return b.score - a.score;
        } else {
          return a.seed > b.seed;
        }
      });
    
    let count = 1;
    let result = document.getElementById("result");
    result.innerHTML = ``;
    classif.forEach( t => {
        let div = document.createElement("div");
        if(vagas >= count){
            div.classList.add("qualify");
            count++;
        }else
            div.classList.add("eliminated");

        div.classList.add("result-box");
        div.innerHTML = `
        <span>${t.rnd}</span>
        <div><img src="${t.img}" alt="${t.name}"/></div>
        <span class="result-team">${t.name}</span>`
        result.appendChild(div);
        //console.log(`${t.name} - ${t.rnd} - ${t.score}`)
    });
} */