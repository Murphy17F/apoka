const slots = []
for (let i = 0; i < document.querySelectorAll(".slot").length; i++) {
    slots[i] = localStorage.getItem("slot_"+i); 
}

for (let i = 0; i < document.querySelectorAll(".slot").length; i++) {
    if(slots[i] != null){
        console.log(slots[i]);
    }
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    const send = document.getElementById("send");
    const data = ev.dataTransfer.getData("text");
    const dataItem = document.getElementById(data)
    ev.target.appendChild(dataItem);
    dataItem.draggable = false;
    ev.target.ondrop = false;
    console.log(dataItem.id);
    localStorage.setItem(ev.target.id, dataItem.id);

    var myFunc = (function() {
        var handler = function (){
            ev.preventDefault();
            const box = document.getElementById(ev.target.id);
            const item = box.querySelector("#"+data);
            const prev = document.getElementById("drag_"+data.substring(4));
            item.remove();
            localStorage.removeItem(ev.target.id);
            prev.appendChild(item);
            box.parentNode.innerHTML += box.innerHTML;
            item.draggable = true;

            ev.target.removeEventListener("dblclick", handler);
            send.style.visibility = checkSend() ? 'visible' : 'hidden';
        };
        return handler;
    })(); 
    ev.target.addEventListener("dblclick", myFunc);
    send.style.visibility = checkSend() ? 'visible' : 'hidden';
}

function checkSend(){
    const countPrediction = document.querySelectorAll(".redondo-box img").length;
    if(countPrediction == 9)
        return true;
    return false;
}