// Fonction

let chaine = "Bonjour à tous tous tous!"

console.log('chaine.length :>> ', chaine.length);

// charAt : permet de récupérer un caractère à un index donné
console.log(chaine.charAt(5)); // u

// concat
console.log(chaine.concat(" et aussi à toutes !", " et aussi à Pikachu !"))

// indexOf : 
console.log(chaine.indexOf('tous')) // 10
console.log(chaine.lastIndexOf('tous')) // 10

// replace :

console.log(chaine.replace('tous', 'everyone'));
console.log(chaine.replaceAll('tous', 'everyone'));

console.log(chaine);

// split : 

console.log(chaine.split(' '));
console.log(chaine.split(''));
console.log(chaine.split());

// substring :

console.log("bonjour".slice(3))
console.log("bonjour".slice(3, "bonjour".length))

console.log("bonjour".substring(3, 7))

// toLowerCase() toUpperCase()
console.log("BonJour".toLowerCase());
console.log("BonJour".toUpperCase());

// trim
console.log(`"${"    bonjour      "}"`)
console.log(`"${"    bonjour      ".trim()}"`)
console.log(`"${"    bonjour      ".trimStart()}"`)
console.log(`"${"    bonjour      ".trimEnd()}"`)


// Match : retourner la valeur correspondante à la regex
let content = "Bonjour à tous. Comment allez-vous ?"
const regex = /[A-Z]/g;
console.log(content.match(regex))

// Search : retourner l'indice qui correspond à la valeur de la regex

console.log(content.search(regex))


