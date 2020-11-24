function add() {
    var value = document.getElementById("enter").value;

    var tododiv = document.createElement('div');
    tododiv.classList.add("task");

    var text = document.createTextNode(value);
    tododiv.appendChild(text);

    var button1 = document.createElement("button");
    button1.classList.add("dlt");
    button1.id = "dlt";
    button1.onclick = function() { thisisfun() };
    button1.innerHTML = "Delete";
    tododiv.appendChild(button1);


    var button2 = document.createElement("button");
    button2.classList.add("done");
    button2.innerHTML = "Done";
    button2.id = "done";
    button2.onclick = function() { done() };
    tododiv.appendChild(button2);

    var list = document.createElement("LI");
    list.id = "pk";
    list.appendChild(tododiv);

    document.getElementById("test").appendChild(list);


}


document.getElementById("dlt").onclick = function() { thisisfun() };
document.getElementById("done").onclick = function() { done() };

function thisisfun() {
    var list = document.getElementById("pk");
    list.parentElement.removeChild(list);
}

function done() {
    var list = document.getElementById("pk");
    list.classList.add("over");
}