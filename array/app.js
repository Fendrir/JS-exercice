var array = ['Pomme','Cerise','Tomate','Citron', ['Orange','Poivron']];

array[2];
array[3];

// Exercice 1

var mois = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "décembre"];

// Exercice 2

console.log("la réponse de l'éxercice 2 est : " + mois[2]);

// Exercice 3

console.log("la réponse de l'éxercice 3 est : " + mois[5]);

// Exercice 4

console.log("la réponse de l'éxercice 4 est : " + mois[10]);

// Exercice 5

mois[7]="aoùt";
console.log("la réponse de l'éxercice 5 est : " + mois[7]);

// Exercice 6

console.log("la réponse de l'éxercice 6 est : " + mois.join());

// correction 6

for (var i = 0; i < 12; i++){

console.log(mois[i]);

}


// Autre façon

console.log(mois.length);

// Exercice 8

array.push("Courgette");

console.log("la réponse de l'éexercie 8 est : " + array.join());

// Exercice 9

array[4].push("Citron");

console.log("la réponse de l'éexercie 9 est : " + array.join());


// Exercice 10


array.splice(1, 1);
console.log(array);

// Exercice 11

array.splice( 2, 0 , "Poire");
console.log(array);