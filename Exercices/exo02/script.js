let chaine = 'ma formation javascript';

// Retourer la position de "ma"
console.log('ma :>> ', chaine.indexOf("ma"));
console.log('ma :>> ', chaine.search(/ma/gi));

// Indiquer l’indice de la lettre « p »
console.log('p :>> ', chaine.indexOf("p"));
console.log('p :>> ', chaine.search(/p/gi));

// Retrouver la lettre située à l’indice 21
console.log('21 :>> ', chaine.charAt(21));
console.log('21 :>> ', chaine.slice(21, 22));

// Remplacer « javascript » par « Java »
console.log('javascript => java :>>', chaine.replace('javascript', 'Java'));

// Découper la chaîne avec le délimiteur « »
console.log('split', chaine.split(' '));

// Inverser la chaîne de caractères (+ difficile) :
// « ma formation javascript » → « tpircsavaj noitamrof am »

let tabChaine = chaine.split('');
let reversedTabChaine = tabChaine.reverse();
let mergedTabChaine = reversedTabChaine.join('');

console.log('mergedTabChaine :>> ', mergedTabChaine);

let result = chaine.split('').reverse().join('');
console.log('result :>> ', result);
