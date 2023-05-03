// -- Array --

// Déclaration - ♥ (à la volée)
let tab = [];
console.log('tab :>> ', tab);

let tab3 = ["Quentin", "Benjamin"];
console.log('tab3 :>> ', tab3);

// Déclaration - 💩 (constructeur)
// A éviter pour des raisons de performance
let tab2 = new Array();
console.log('tab2 :>> ', tab2);

// Récupération de la taille du tableau 
console.log('tab.length :>> ', tab.length);

// Récupération d'un élément dans le tableau
console.log('tab3[0] :>> ', tab3[0]);
console.log('tab3[1] :>> ', tab3[1]);
console.log('tab3[-1] :>> ', tab3[-1]);
console.log('tab3.length :>> ', tab3.length);
console.log('tab3[100] :>> ', tab3[100]);

tab3[999] = 42;
console.log('tab3 :>> ', tab3);

let planetes = [];

planetes['mercure'] = 0;
planetes['mars'] = 50;

console.log('planetes.length :>> ', planetes.length);

console.log('planetes :>> ', planetes);

let planetesCount = Object.keys(planetes).length;
console.log('planetesCount :>> ', planetesCount);

// -- Parcourt d'un tableau
console.clear();

tab3.forEach((element, index, array) => {
    console.warn(index);
    console.log('element :>> ', element);
    console.log('array :>> ', array);
})

function displayInformation (element, index, array) {
    console.warn(index);
    console.log('element :>> ', element);
    console.log('array :>> ', array);
}

tab3.forEach(displayInformation);

tab3.forEach((element, index, array) => {
    displayInformation(element, index, array);
})

