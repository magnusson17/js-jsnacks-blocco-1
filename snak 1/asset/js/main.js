let ask1 = parseInt(prompt("inserisci un numero"));
let ask2 = parseInt(prompt("inserisci un altro numero"));
let container = document.getElementById("container");

if (isNaN(ask1) || isNaN(ask2)) {
    alert("ERRORE, ricaricare la pagina e inserire correttamente i dati")
} else {
    if (ask1 > ask2) {
        container.innerHTML = `il numero più alto è: ${ask1}`;
    } else if (ask1 < ask2) {
        container.innerHTML = `il numero più alto è: ${ask2}`;
    } else {
        container.innerHTML = `i numeri inseriti sono uguali tra loro`;
    }
}