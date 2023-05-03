// -- Opérateurs --

console.log(5 < "6");

// Vérification de la valeur
console.log(5 == '5'); // Vrai
console.log(5 != '5'); // Faux

// Vérification de la valeur et du type
console.log(5 === '5'); // Faux
console.log(5 !== '5'); // Vrai

// Concaténation
console.log("Hello" + "tout le monde");


// -- Opérateurs Logique --

// !  : négation

console.log('!true :>> ', !true);
console.log('!false :>> ', !false);

// && : ET

console.log('true && true :>> ', true && true);
console.log('false && true :>> ', false && true);
console.log('true && false :>> ', true && false);
console.log('false && false :>> ', false && false);

// || : OU
console.log('true || true :>> ', true || true);
console.log('false || true :>> ', false || true);
console.log('true || false :>> ', true || false);
console.log('false || false :>> ', false || false);

// ^ : OU Exclusif (binaire)
console.log('true ^ true :>> ', true ^ true);
console.log('false ^ true :>> ', false ^ true);
console.log('true ^ false :>> ', true ^ false);
console.log('false ^ false :>> ', false ^ false);

// Opérateur ternaire
let genre = 'F';
console.log(`Bonjour ${(genre == 'M') ? 'Monsieur' : 'Madame'}`);

// Opérateurs unaires

// -- Typeof
console.log('typeof genre :>> ', typeof genre);
// -- New
let today = new Date();
// -- delete
const myObj = { nom: 'Geerts', prenom: 'Quentin' }
console.log('myObj :>> ', myObj);
delete myObj.nom;
console.log('myObj :>> ', myObj);

myObj.age = 42;

console.log('myObj :>> ', myObj);

// Opérateurs : post/pré-(dé/in)crémentation

let a = 0;

// Pré-incrémentation
console.log(++a); // 1 
// 1
console.log(a++); // 1
// 2
console.log(--a); // 1
// 1
console.log(a--); // 1
// 0