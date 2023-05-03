// -- 07 - Boucles --


// FOR (index)
// for (let index = 0; index < 10; index++) {
//     console.log('index :>> ', index);
// }

const person = { nom: 'Geerts', prenom: 'Quentin' };

const persons = [
    { nom: 'Geerts', prenom: 'Quentin' },
    { nom: 'Geerts', prenom: 'Benjamin' },
    { nom: 'Geerts', prenom: 'William' },
    { nom: 'Geerts', prenom: 'Antoine' },
]

// FOR IN
for (const prop in person) {
    console.log(person[prop]);
}

for (const index in persons) {
    console.log('index :>> ', index);
    console.log('persons[index] :>> ', persons[index]);
}

// FOR OF
for (const person of persons) {
    console.log('person :>> ', person);
}

for (const letter of "Bonjour") {
    console.log('letter :>> ', letter);
}