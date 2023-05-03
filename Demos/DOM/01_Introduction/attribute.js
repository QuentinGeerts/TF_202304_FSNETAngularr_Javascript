// -- Attributes --

const input = document.getElementById('firstname');
console.log('input :>> ', input);

// getAttribute
// Permet de récupérer la valeur d'un attribut
console.log(input.getAttribute('minlength'));
console.log(input.getAttribute('id'));
console.log(input.getAttribute('class'));

// setAttribute
// Permet de ajouter / modifier un attribut
// Si l'élément n'a pas l'attribut => ajoute
// Si l'élément a l'attribut => modifie
input.setAttribute('class', 'input-text');
input.setAttribute('class', 'input');

// input.setAttribute('disabled', '');

console.log('input :>> ', input);

input.classList.add('input');
input.classList.add('input-text');

console.log('input :>> ', input);

// removeAttribute
// Permet de supprimer un attribut
input.removeAttribute('minlength');

// hasAttribute
// Permet de savoir si un élément possède l'attribut (booléen)
console.log(input.hasAttribute('disabled'));
console.log(input.hasAttribute('id'));

// toggleAttribute
// Mélange entre set et remove
input.toggleAttribute('id', false);
input.toggleAttribute('disabled', false);
input.toggleAttribute('name', false);
input.toggleAttribute('name', true);

console.log('input :>> ', input);

console.clear();

const btnToRed = document.getElementById('color-red');

btnToRed.addEventListener('click', () => {
    const paragraphes = document.querySelectorAll('p');
    console.log('paragraphes :>> ', paragraphes);

    for (const p of paragraphes) {
        p.classList.add('bg-lightred');
    }
})
