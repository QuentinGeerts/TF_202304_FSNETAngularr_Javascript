const btn = document.getElementById('btn');
const liste = document.querySelector('#liste');

// console.log('btn :>> ', btn);
// console.log('liste :>> ', liste);

// btn.addEventListener('click', function () {});
// btn.addEventListener('click', () => {});
btn.addEventListener('click', addItem);

function addItem() {
    
    // Création d'un élément LI
    const li = document.createElement('li');

    // Ajouter l'élément LI à la liste UL
    liste.appendChild(li);

    // Paramétrer le texte
    li.textContent = 'item';
}
