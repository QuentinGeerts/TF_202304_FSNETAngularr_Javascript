

// function changeMe (value) {
function changeMe (element) {
    console.dir(element);
    console.log('element.innerHTML :>> ', element.innerHTML);
    element.innerHTML = "OK";
    console.log('element.innerHTML :>> ', element.innerHTML);

    // console.log(value);
    // value = "OK";

    // console.log(value);
}


const btn = document.getElementById('btn');
btn.addEventListener('click', (event) => {
    // btn.innerHTML = 'OK';
    console.log('this :>> ', this);
    console.log('event :>> ', event);

    event.target.innerHTML = 'OK';
});

// btn.addEventListener('click', function (event) {
//     this.innerHTML = 'OK';
//     console.log('this :>> ', this);
// })

// btn.addEventListener('click', function (event) {
//     changeMyContent(this, event)
// })

// function changeMyContent (element, event) {
//     console.log('element :>> ', element);
//     console.log('element :>> ', event);
//     element.innerHTML = 'OK';
// }

const person = {
    nom: 'Geerts',
    prenom: 'Quentin',

    sePresenter: function () {
        console.log('Bonjour, je m\'appelle ' + this.nom + ' ' + this.prenom);
    },

    manger: (aliment) => {
        console.log(person.prenom + ' mange ' + aliment);
    }
};

let addition = function (a, b) { return a + b; };

console.log(person.nom);
console.log(person.prenom);
person.sePresenter();
person.manger('banane');

let result = addition(54, 5);
console.log('result :>> ', result);
console.log('result :>> ', addition(52, 1));

console.log('addition :>> ', addition);


(
    function (message) {
        console.log("Hello ! " + message);
    }
)("Les FS NET Angular");

let add = (a, b) => a + b ;
// let add = (a, b) => { return a + b } ;

console.log('add(4, 4) :>> ', add(4, 4));

let div = (a, b) => {
    if (b == 0) return 'Division par 0 impossible';

    return a / b;
}

console.log('div(5, 0) :>> ', div(5, 0));
console.log('div(5, 4) :>> ', div(5, 4));