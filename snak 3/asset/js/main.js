let container = document.getElementById("container");
let ask = [];
let sum = 0;

for (i = 0; i < 10; i++) {
    ask.push(parseInt(prompt("inserisci un numero")));
    console.log(ask);
}

for (let i = 0; i < ask.length; i++) {
    sum += ask[i];
}
container.innerHTML = `la somma dei numeri è: ${sum}`

