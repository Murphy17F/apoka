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

    {"seed": 1,"name": "Imperial", "rnd": "0-0", "score": 0, "v":0, "d":0, "match":[], "status": 0, "img":"https://majors.im/images/paris2023_qual/impe.png"},
*/
//#endregion

teams = [
    {"seed": 1,"name": "Heroic", "rnd": "0-0", "score": 0, "v":0, "d":0, "match":[], "status": 0, "img":"https://majors.im/images/paris2023_rmr/hero.png"},
    {"seed": 2,"name": "Cloud9", "rnd": "0-0", "score": 0, "v":0, "d":0, "match":[], "status": 0, "img":"https://majors.im/images/paris2023_rmr/c9.png"},
    {"seed": 3,"name": "Team Spirit", "rnd": "0-0", "score": 0, "v":0, "d":0, "match":[], "status": 0, "img":"https://majors.im/images/paris2023_rmr/spir.png"},
    {"seed": 4,"name": "BIG", "rnd": "0-0", "score": 0, "v":0, "d":0, "match":[], "status": 0, "img":"https://majors.im/images/paris2023_rmr/big.png"},
    {"seed": 5,"name": "ENCE", "rnd": "0-0", "score": 0, "v":0, "d":0, "match":[], "status": 0, "img":"https://majors.im/images/paris2023_rmr/ence.png"},
    {"seed": 6,"name": "Team Vitality", "rnd": "0-0", "score": 0, "v":0, "d":0, "match":[], "status": 0, "img":"https://majors.im/images/paris2023_rmr/vita.png"},
    {"seed": 7,"name": "Ninjas in Pyjamas", "rnd": "0-0", "score": 0, "v":0, "d":0, "match":[], "status": 0, "img":"https://majors.im/images/paris2023_rmr/nip.png"},
    {"seed": 8,"name": "9INE", "rnd": "0-0", "score": 0, "v":0, "d":0, "match":[], "status": 0, "img":"https://majors.im/images/paris2023_rmr/9ine.png"},
    {"seed": 9,"name": "G2 Esports", "rnd": "0-0", "score": 0, "v":0, "d":0, "match":[], "status": 0, "img":"https://majors.im/images/paris2023_rmr/g2.png"},
    {"seed": 10,"name": "Eternal Fire", "rnd": "0-0", "score": 0, "v":0, "d":0, "match":[], "status": 0, "img":"https://majors.im/images/paris2023_rmr/ef.png"},
    {"seed": 11,"name": "Astralis", "rnd": "0-0", "score": 0, "v":0, "d":0, "match":[], "status": 0, "img":"https://majors.im/images/paris2023_rmr/astr.png"},
    {"seed": 12,"name": "Monte", "rnd": "0-0", "score": 0, "v":0, "d":0, "match":[], "status": 0, "img":"https://majors.im/images/paris2023_rmr/mont.png"},
    {"seed": 13,"name": "iNation", "rnd": "0-0", "score": 0, "v":0, "d":0, "match":[], "status": 0, "img":"https://majors.im/images/paris2023_rmr/inat.png"},
    {"seed": 14,"name": "Aurora Gaming", "rnd": "0-0", "score": 0, "v":0, "d":0, "match":[], "status": 0, "img":"https://majors.im/images/paris2023_rmr/auro.png"},
    {"seed": 15,"name": "forZe", "rnd": "0-0", "score": 0, "v":0, "d":0, "match":[], "status": 0, "img":"https://majors.im/images/paris2023_rmr/forz.png"},
    {"seed": 16,"name": "500", "rnd": "0-0", "score": 0, "v":0, "d":0, "match":[], "status": 0, "img":"https://majors.im/images/paris2023_rmr/500.png"},
] 

localStorage.setItem("teams", JSON.stringify(teams));

const round_max = 5;
const vagas = 8;
const vit = 3;
const der = 3;
var round = 0;

var roundResult = []
if(localStorage.getItem("rounds") != null ){
    roundResult = localStorage.getItem("rounds");
    console.log(roundResult);
}
generatedMatchs();

function generatedMatchs(){
    round++;
    
    const newRnd = document.createElement("div");
    newRnd.id = "round_"+round;
    newRnd.className = "round";
    
    /* const rndTitle = document.createElement("span");
    rndTitle.className = "round-title";
    rndTitle.innerHTML = `Round ${round}`; */
    
    const miolo = document.getElementById("apoka");
    /* miolo.appendChild(rndTitle); */
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
    team.innerHTML = `<div class="team-logo"><img src="${teamsAux.img}" alt="${teamsAux.name} title="${teamsAux.name}"/></div>
    
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
        <div><img src="${t.img}" alt="${t.name}" title="${t.name}"/></div>
        <span class="result-team">${t.name}</span>`
        result.appendChild(div);
        //console.log(`${t.name} - ${t.rnd} - ${t.score}`)
    });
}