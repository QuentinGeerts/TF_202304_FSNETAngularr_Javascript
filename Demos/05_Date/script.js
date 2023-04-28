/**
 * Création d'une date
 */

// Heure actuelle (locale)
let now = new Date();
console.log('now :>> ', now);

// Sur base d'un timestamp
// Nombre de millisecondes depuis le 01/01/1970 00:00:00
let date2 = new Date(1682690465000)
console.log('date2 :>> ', date2);

// Sur base d'une date (string)
// let date3 = new Date('28/04/2023') // KO
// let date3 = new Date('04/28/2023') // OK
let date3 = new Date('2023/04/28') // OK
// let date3 = new Date('2023/28/04') // KO
console.log('date3 :>> ', date3);

let date4 = new Date(2023, 3)
console.log('date4 :>> ', date4);

let date5 = new Date(2023, 3, 28)
console.log('date5 :>> ', date5);

let date6 = new Date(2023, 3, 28, 16)
console.log('date6 :>> ', date6);

let date7 = new Date(2023, 3, 28, 16, 32, 12, 123)
console.log('date7 :>> ', date7);

// Extraction des données d'une date

console.log('Année :>> ', now.getFullYear());
console.log('Mois :>> ', now.getMonth());
console.log('Jour :>> ', now.getDate());
console.log('Jour de la semaine :>> ', now.getDay()); // 5
console.log('Heures :>> ', now.getHours());
console.log('Minutes :>> ', now.getMinutes());
console.log('Secondes :>> ', now.getMilliseconds());

// Modification d'une partie de la date

// now.setFullYear(2025)
// console.log('now :>> ', now);
// now.setFullYear(2025, 5, 5)
// console.log('now :>> ', now);

// Formatage de date

console.log(now.toLocaleDateString());

const options = { day: 'numeric', month: 'long', year: 'numeric' }
console.log(now.toLocaleDateString(navigator.language, options));