// -- Fonctions --

// - Récupérations

// Récupérer un élément sur base de son ID
const divInfo = document.getElementById('info');
console.log('divInfo :>> ', divInfo);

// Récupérer un ou plusieurs éléments sur base d'une classe
const titles = document.getElementsByClassName('title');
console.log('titles :>> ', titles);
console.log('titles[0] :>> ', titles[0]);
console.log('titles[1] :>> ', titles[1]);
console.log('titles["title1"] :>> ', titles["title1"]);
console.log('titles.title1 :>> ', titles.title1);

// Récupérer un ou plusieurs éléments sur base d'une balise HTML
const paragraphes = document.getElementsByTagName('p');
console.log('paragraphes :>> ', paragraphes);

// Récupérer un ou plusieurs élément sur base d'un sélecteur CSS
const qs = document.querySelector('#content > *:nth-child(odd)');
const qsall = document.querySelectorAll('#content > *:nth-child(odd)');

console.log('qs :>> ', qs);
console.log('qsall :>> ', qsall);

const infoqs = document.querySelector('#info');
console.log('infoqs :>> ', infoqs);
const titlesqs = document.querySelectorAll('.title');
console.log('titlesqs :>> ', titlesqs);
// console.log('titlesqs :>> ', titlesqs.title1); // Ne fonctionne qu'avec une HTMLCollection

const paragraphesqs = document.querySelectorAll('p');
console.log('paragraphesqs :>> ', paragraphesqs);



// - Création d'un élément HTML

const newParagraphe = document.createElement('p');
newParagraphe.innerHTML = 'Ceci est un paragraphe créé par Javascript';
console.log('newParagraphe :>> ', newParagraphe);


// - Ajouter un élément HTML
const content = document.getElementById('content');
content.appendChild(newParagraphe);
document.body.appendChild(newParagraphe);

const p2 = document.getElementById('p2');
console.log('p2 :>> ', p2);

content.insertBefore(newParagraphe, p2);

content.insertAdjacentElement("afterend", newParagraphe);


// - Remplacer un élément HTML
// replaceChild(nouveauNoeud, noedExistant)

const p1 = document.getElementById('p1');
const replacedNode = content.replaceChild(newParagraphe, p1);
console.log('replacedNode :>> ', replacedNode);

// - Supprimer un élément HTML
// removeChild(noeud)
const removedNode = content.removeChild(p2);
console.log('removedNode :>> ', removedNode);