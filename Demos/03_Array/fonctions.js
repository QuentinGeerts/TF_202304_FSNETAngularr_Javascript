// -- Fonctions Array --

let tab = [1, 2, 3, 4, 5];

// Array.prototype.join(separator: string): string
console.log(tab);
console.log(tab.join()); // 1,2,3,4,5
console.log(tab.join(' - ')); // 1 - 2 - 3 - 4 - 5
console.log(tab.join('')); // 12345

// -- Ajouter dans le tableau

// Ajouter à la fin du tableau
// Array.prototype.push(...item: any[]): number

console.log(tab.push(5, 6, 2));
console.log(tab);
// console.log([...new Set(tab)]);

// Ajouter au début du tableau
// Array.prototype.unshift(...item: any[]): number
console.log(tab.unshift(1, 1, 1)) // 11
console.log(tab); 

// -- Retirer du tableau (1 élément)

// Retirer au début du tableau
const removedItem = tab.shift()
console.log('removedItem :>> ', removedItem);
console.log('tab :>> ', tab);

// Retirer à la fin du tableau
const removedItem2 = tab.pop();
console.log('removedItem2 :>> ', removedItem2);
console.log('tab :>> ', tab);

// -- Retirer / Ajouter / Remplacer n'importe où dans le tableau

// Array.prototype.splice(indexDebut: number, nbASupprimer: number, [...item: any[]]): any[]

const ri1 = tab.splice(1, 2) // 
console.log('ri1 :>> ', ri1);
console.log(tab);

const ri2 = tab.splice(5, 1, 6, 7) 
console.log('ri2 :>> ', ri2);
console.log(tab);

const ri3 = tab.splice(3, 0, 3.5)
console.log('ri3 :>> ', ri3);
console.log(tab);

console.clear();

// Trier un tableau
// <!> 2 façons : numérique / alphabéthique

let a = ['a', "Quentin", "bob", 23, false, 100, 11, 5, 1202, 0, true]

// Alphabéthique : sort()
a.sort();
console.log(a);

// Numérique : sort()
a.sort((a, b) => a - b); // Croissant
a.sort((a, b) => b - a); // Décroissant
console.log(a);

// Renverser un tableau
a.reverse()
console.log(a);

// Extraire une partie d'un tableau
// Array.prototype.slice(indexDebut, indexFinExclus): any[]
console.log(a.slice(4, 10));

const filteredArray = a.filter(element => element > 50)
console.log('filteredArray :>> ', filteredArray);

const searchItem = a.find(element => element > 0);
console.log(searchItem);

console.log(a.includes('a'));
console.log(a.includes('b'));

// Map : retourner un tableau transformé
const mappedArray = a.map(element => element * 2);
console.log(mappedArray);

a.splice(0, 6)

console.log(a);

// Reduce : transforme un tableau en une valeur
const sum = a.reduce((acc, value) => acc + value, 0)
console.log(sum);

console.log("12" == 12); // true
console.log("12" === 12); // false

// ==  : Vérification de la valeur uniquement
// === : Vérificatio nde la valeur et du type