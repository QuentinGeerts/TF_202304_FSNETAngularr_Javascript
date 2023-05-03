const btn = document.getElementById('btn');
const libelle = document.getElementById('libelle');
const liste = document.querySelector('#liste');

btn.addEventListener('click', addItem);

function addItem () {

    if (libelle.value.trim() === "") return;

    // Création d'un élément LI
    const li = document.createElement('li');
    const button = document.createElement('button');

    // Paramétrer le texte
    li.textContent = libelle.value + " ";
    button.innerText = "❌";

    // Ajouter l'élément LI à la liste UL
    liste.appendChild(li);
    li.appendChild(button);

    // Ajouter un événement au bouton
    button.addEventListener('click', (event) => {
        liste.removeChild(li);
        // console.log('event :>> ', event);
        // console.log('event.target.parentNode :>> ', event.target.parentNode);
        // liste.removeChild(event.target.parentNode);
    });

    libelle.value = "";
    libelle.focus();
}
