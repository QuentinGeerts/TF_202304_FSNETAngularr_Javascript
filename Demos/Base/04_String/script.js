// -- String --

let prenom = "Quentin";
let nom = 'Geerts';
let nomComplet = `${prenom} ${nom}`;

let pokeName = prompt('Entrez le nom d\'un pokémon en anglais : ');

const URL = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;

console.log(URL);