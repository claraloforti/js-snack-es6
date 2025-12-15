/*
Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

// CREO ARRAY SQUADRE
let squadre = [
    {
        "nome": "Inter",
        "punti": 0,
        "falli": 0
    },
    {
        "nome": "Juve",
        "punti": 0,
        "falli": 0
    },
    {
        "nome": "Milan",
        "punti": 0,
        "falli": 0
    },
    {
        "nome": "Roma",
        "punti": 0,
        "falli": 0
    }
];

// Genero numero di punti fatti e falli subiti random
function numRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < squadre.length; i++) {
    squadre[i].punti = numRandom(0, 10);
    squadre[i].falli = numRandom(0, 10);

    document.getElementById("risultato").innerHTML += ("I falli subiti da " + squadre[i].nome + " sono: " + squadre[i].falli + "<hr>");
    }
    

// Creo array che contiene rispettivamente per ogni squadra nome e falli subiti
let arrayNomeFalli = [];
for (let i = 0; i < squadre.length; i++) {
    arrayNomeFalli[i] = {
    "nome": squadre[i].nome,
    "falli": squadre[i].falli
  };
}

console.log(arrayNomeFalli);