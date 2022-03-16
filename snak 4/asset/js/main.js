let nome = prompt("inserisci il tuo nome");
let cognome = prompt("inserisci il tuo cognome")
let list = ["Aldo Baglio", "Giovanni Storti", "Giacomo Poretti"];
let sentinella = false;
let container = document.getElementById("container");

//metodo alternativo
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

if (isNaN(nome) && isNaN(cognome)) {
    if (list.includes(nome + " " + cognome)) {
        container.innerHTML = `Il nominativo ${nome} ${cognome} è nela lista`;
    } else {
        container.innerHTML = `Il tuo nominativo non è in lista`;
    }
} else {
    alert("ERRORE, ricaricare la pagina e inserire correttamente i dati.")
}