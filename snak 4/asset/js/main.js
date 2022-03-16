let nome = prompt("inserisci il tuo nome");
let list = ["Aldo", "Giovanni", "Giacomo"];
let sentinella = false;
let container = document.getElementById("container");

/*for (i = 0; i < list.length; i++) {
    if (nome == list[i]) {
        sentinella = true;
    }
}

if (sentinella == true) {
    container.innerHTML = `Benvenuto ${nome}`;
} else {
    container.innerHTML = `Il tuo nome non è in lista`;
}*/

if (list.includes(nome)) {
    container.innerHTML = `Benvenuto ${nome}`;
} else {
    container.innerHTML = `Il tuo nome non è in lista`;
}