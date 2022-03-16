let container = document.getElementById("container");
let list = [];

for (i = 0; i < 6; i++) {
    let ask = parseInt(prompt("inserisci un numero"));
    if (ask % 2 != 0) {
        list.push(ask);
        container.innerHTML = `${list}`
    }
}