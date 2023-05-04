// -- Classes (attributs) --

const title = document.getElementById('title');

// Récupération de la liste des classes (attributs) de l'élément HTML
console.log('title.classList :>> ', title.classList);

// Ajouter une classe à l'élément HTML
title.classList.add("title", "h1", "text-red");
console.log('title.classList :>> ', title.classList);

// Supprimer une classe de l'élément HTML
title.classList.remove("h1", "title");
console.log('title.classList :>> ', title.classList);

// Vérifier si un élément HTML contient une classe
console.log(title.classList.contains('h1')); // false 
console.log(title.classList.contains('text-red')); // true 

// Permet d'ajouter s'il ne possède pas la classe et retirer inversément
title.classList.toggle('bold');
console.log('title.classList :>> ', title.classList);
title.classList.toggle('bold');
console.log('title.classList :>> ', title.classList);

// Permet de remplacer une classe par une autre
console.log(title.classList.replace("text-red", "text-blue")); // true
console.log(title.classList.replace("text-green", "text-blue")); // false