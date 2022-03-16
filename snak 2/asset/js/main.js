let ask1 = prompt("inserisci una parola");
let ask2 = prompt("inserisci una seconda parola");
let container = document.getElementById("container");

if (ask1.length > ask2.length) {
    container.innerHTML = `${ask2}, ${ask1}`;
} else if (ask1.length < ask2.length) {
    container.innerHTML = `${ask1}, ${ask2}`;
} else {
    container.innerHTML = `le parole ${ask1} e ${ask2} hanno la stessa lunghezza`;
}