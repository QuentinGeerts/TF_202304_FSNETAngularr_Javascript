// -- NaN --

console.log(12 / 'a');

console.log(isNaN(12 / 'a'));

console.log(Infinity / Infinity);

console.log(Number.NaN);

// Pour tester si un nombre est bien un nombre
// Ne pas utiliser :
console.log(Number.NaN != NaN);
// Utiliser :
console.log(isNaN(Number.NaN));

console.clear();

// -- Infinity --

console.log(Infinity * Infinity); // Infinity
console.log(50 / Infinity); // 0
console.log(50 / 0); // Infinity
console.log(Infinity / Infinity); // NaN

console.clear();
// -- Undefined --

let a; // undefined
console.log(a);
a = 4;
console.log(a);
a = undefined;
console.log(a);

a = 5;

console.log(a == undefined);
console.log(typeof a == 'undefined');
console.log(typeof a == 'number');

console.clear();

// -- Math --

console.log(Math);
console.log(Math.random());
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.PI);

// -- Number --
console.dir(Number);

console.log(parseInt('12')); // 12
console.log('12');
console.log(parseInt('12a')); // 12
console.log(parseInt('a12')); // 12
console.log(parseInt('a')); // 12
console.log(+'12'); // 12

// ----------------

// let - const - var

// -- Avant 2015 (<ES6) : var
// -- Après 2015 (>=ES6) : let - const

const PI = 3.141592; // Déclaration + affectation
console.log('PI :>> ', PI);

// PI = 4.141592; // Impossible

let prenom;
prenom = "Quentin";
console.log('prenom :>> ', prenom);
prenom = "Albert";
console.log('prenom :>> ', prenom);

var nom = "Geerts";
console.log('nom :>> ', nom);
nom = "Einstein";
console.log('nom :>> ', nom);

console.clear();

// const title = document.getElementById('title');
// const URL_API = `https://www.api.com?section=${}`

// Différences entre let, var et const

var exemple = "Exemple";
var exemple = "Hello"; // Redéclaration
console.log('exemple :>> ', exemple);

if (true) {
    console.log('exemple :>> ', exemple); // 'exemple'

    var exemple = "Changement de contenu";
    console.log('exemple :>> ', exemple); // 'Changement de contenu'
}

console.log('exemple :>> ', exemple); // 'Changement de contenu'

console.clear();

let exemple2 = "Exemple";
// let exemple2 = 'Exemple2'; // Redéclaration impossible avec let

console.log('exemple2 :>> ', exemple2);

if (true) {
    // console.log('exemple2 :>> ', exemple2);

    let exemple2 = "Changement de contenu";
    console.log('exemple2 :>> ', exemple2);
}

console.log('exemple2 :>> ', exemple2); // Exemple

// -- Typages

console.clear();

console.log(typeof exemple2);
exemple2 = 23;
console.log(typeof exemple2 == 'number');

let variable1 = 12; // number
console.log('12 :>> ', typeof variable1);
let variable2 = 12.2; // number
console.log('12.2 :>> ', typeof variable2);
let variable3 = "Bonjour"; // string
console.log('"Bonjour" :>> ', typeof variable3);

let variable4 = [12, 12.2, "Bonjour", [], () => { }];
console.log('Array :>> ', typeof variable4);
console.log('Array :>> ', variable4.constructor);
console.log(variable4.constructor == Array);

let variable5 = { "k1": "valeur1", "k2": "valeur2" };
console.log('variable5.k1 :>> ', variable5.k1);
console.log('variable5.k2 :>> ', variable5.k2);
console.log('variable5["k1"] :>> ', variable5["k1"]);

let variable6 = function () { console.log("Coucou"); };
console.log('variable6 :>> ', variable6);
console.log('variable6 :>> ', typeof variable6);
console.log('variable6 :>> ', variable6.constructor);
console.log('variable6 :>> ', variable6());

let isMarried = false;
console.log('isMarried :>> ', typeof isMarried);
let nullable = null;
console.log('isMarried :>> ', typeof nullable);


// -- Conversion --

let entier = parseInt("F", 16);
console.log('entier :>> ', entier);

let bin = entier.toString(2);
console.log(bin)

console.log('entier.toString() :>> ', entier.toString());