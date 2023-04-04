const root = document.documentElement;
var teams, objTeamA, objTeamB;
const teamA = document.getElementById('teamA');
const teamB = document.getElementById('teamB');
const maps = document.querySelectorAll('.map');
const desc = document.getElementById('description');
const log = document.getElementById('map-log');

teamA.addEventListener('change' , updateTeam);
teamB.addEventListener('change' , updateTeam);

function updateTeam(){
    teams.forEach(item => {
        if(item.seed==teamA.value)
        objTeamA = item;
        if(item.seed==teamB.value)
        objTeamB = item;
    });
    
    root.style.setProperty('--teamA', `url('${objTeamA.img}')`);
    root.style.setProperty('--teamB', `url('${objTeamB.img}')`);
    updatePick();
}

maps.forEach(item => {
    item.addEventListener('click', () => {selectMap(item);});
});

let selected = 0;
let choose = true
function selectMap(map){
    if(map.classList.contains('teamA') || map.classList.contains('teamB'))
        return;
    
    selected++;
    if(selected>7)
        selected=1

    map.classList.add(choose ? "teamA" : "teamB");
    choose = !choose;
    let className = 'ban'
    if(selected==3 || selected==4)
        className="pick";
    if(selected==7)
        className="decider";

    map.classList.add(className);
    let order = map.querySelector(".top-left");
    switch (selected) {
        case 3: order.innerText = 1; break;
        case 4: order.innerText = 2; break;
        case 7: order.innerText = 3; break;
    }
    updatePick();
    changeLog(map.id);
}

function clearMaps(){
    selected=0;
    choose = true;
    maps.forEach(item => {
        item.className = 'map';
        item.querySelector(".top-left").innerText = ''
    });
    updatePick();
    log.innerHTML = ''
}

function changeLog(mapName){
    let currentTeam = !choose ? objTeamA : objTeamB;
    let pick_ban = selected==3 || selected==4 ? "escolheu" : "baniu";
    /* let pick_ban = "vetou"; */
    if(selected==7){
        log.innerHTML += (`<span>${selected}. Sobrou ${mapName}</span>`);
        console.log(`${selected}. ${mapName} was left over`);
        desc.innerText = '';
        return;
    }
    console.log(`${selected}. ${currentTeam.name} ${pick_ban} ${mapName}`);
    log.innerHTML += (`<span>${selected}. ${currentTeam.name} ${pick_ban} ${mapName}</span>`);
}

function updatePick(){
    let currentTeam = choose ? objTeamA : objTeamB;
    let pick_ban = selected==2 || selected==3 ? "escolhe" : "remove";
    /* let pick_ban = "remove"; */
    if(pick_ban == "escolhe")
        root.style.setProperty('--selectColor', `#064cb4`);
    else
        root.style.setProperty('--selectColor', `#000`);
    if(selected>=6){
        root.style.setProperty('--selectColor', `#064cb4`);
        desc.innerHTML = `<div>Selecione o mapa decisivo</div>`;
        return;
    }
    /* desc.innerHTML = `<img src="${currentTeam.img}"><br><strong>${currentTeam.name}</strong> <b>${pick_ban}</b> um mapa`; */
    desc.innerHTML = `<img src="${currentTeam.img}"><br><strong>${currentTeam.name}</strong> <b>${pick_ban}</b>`;
}


/* fetch('https://hltv-api.vercel.app/api/player.json')
.then((response) => response.json())
.then((data) => loadHLTV(data));
 
function loadHLTV(data){
    teams = data;
    data.forEach(team => { */

loadHLTV();

function loadHLTV(){
    teams.forEach(team => {
        if(team.seed == 1){
            let optGroup = document.createElement("optgroup")
            optGroup.label = "Americas";
            teamA.add(optGroup);
            
            optGroup = document.createElement("optgroup")
            optGroup.label = "Americas";
            teamB.add(optGroup);
        }
        if(team.seed == 101){
            var optGroup = document.createElement("optgroup")
            optGroup.label = "Europa A";
            teamA.add(optGroup);
            
            optGroup = document.createElement("optgroup")
            optGroup.label = "Europa A";
            teamB.add(optGroup);
        }
        if(team.seed == 201){
            var optGroup = document.createElement("optgroup")
            optGroup.label = "Europa B";
            teamA.add(optGroup);

            optGroup = document.createElement("optgroup")
            optGroup.label = "Europa B";
            teamB.add(optGroup);
        }
        

        var option = document.createElement("option")
        option.text = team.name;
        option.value = team.seed;
        option.style = `background-image:url(${team.img});`
        teamA.add(option);
        
        var option = document.createElement("option")
        option.text = team.name;
        option.value = team.seed;
        option.style = `background-image:url(${team.img});`
        teamB.add(option);    
    });
    updateTeam();
    updatePick();
}