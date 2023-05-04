console.dir(document);

// console.log('document.forms[0] :>> ', document.forms[0]);
// console.log('document.forms["myForm"] :>> ', document.forms["myForm"]);
// console.log('document.forms.myForm :>> ', document.forms.myForm);

// const form = document.forms['myForm'];
// console.log('form :>> ', form);

// const inputFirstname = form[0];
// const inputFirstname2 = form['firstname'];
// const inputFirstname3 = form.firstname;

// console.log(inputFirstname);
// console.log(inputFirstname2);
// console.log(inputFirstname3);

// console.log(inputFirstname.value);

const btnSend = document.getElementById('btnSend');

btnSend.addEventListener('click', (e) => {

    // Stopper la propagation de l'événement
    e.preventDefault();
    // e.stopImmediatePropagation();

    const form = document.forms['myForm'];

    const inputFirstname = form['firstname'];
    const inputLastname = form['lastname'];

    if (inputFirstname.value === '' || inputLastname.value === '') return;

    // Logique ...

    document.getElementById('info').innerText = 'Envoi de données : ' + inputFirstname.value + ' ' + inputLastname.value;
});