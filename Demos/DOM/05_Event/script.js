const p1 = document.getElementById('p1');

// 2 façons d'ajouter un événément à un élément HTML

// > 1. la propriété on... de l'élément (un seul événement possible)
// p1.onclick = () => { p1.style.color = 'red'; };
// p1.onclick = () => { p1.style.fontWeight = 'bold'; } // écrasé l'ancienne référence
// p1.onmouseover = () => { p1.style.fontWeight = 'bold'; };
// p1.onmouseleave = () => { p1.style.fontWeight = 'normal'; };

// > 2. la méthode addEventListener (plusieurs événements)
// p1.addEventListener('click', () => { p1.style.color = 'red'; });
// p1.addEventListener('click', () => { p1.style.fontWeight = 'bold'; });



// -- paramètres --
// > 1. this (non précisable)
// > 2. event

p1.addEventListener('click', (e) => {
    console.log('e :>> ', e);
})

p1.addEventListener('mouseenter', (e) => {
    console.log('e :>> ', e);
})

p1.addEventListener('close', (e) => {
    console.log('e :>> ', e);
})