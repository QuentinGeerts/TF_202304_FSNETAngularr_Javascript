const GENDERIZE_URL = 'https://api.genderize.io?name=__NAME__&country_id=__COUNTRY__';
const RESTCOUNTRIES_URL = 'https://restcountries.com/v2/all';

const searchBtn = document.getElementById('searchButton');
searchBtn.onclick = getGenderize;

window.onload = getCountries;


function getCountries () {

    const countrySelect = document.getElementById('country');

    fetch(RESTCOUNTRIES_URL)
        .then(response => response.json())
        .then(countries => {

            console.log('countries :>> ', countries);

            for (const country of countries) {

                console.log('country :>> ', country);

                const option = document.createElement('option');
                option.setAttribute('value', country.alpha2Code);
                option.innerText = country.translations.fr;
                countrySelect.appendChild(option);

            }

        });
    // .catch(error => console.log("Une erreur est survenue"))
    // .finally(() => console.log("Requête terminée."));

}

function getGenderize () {
    fetch(
        GENDERIZE_URL
            .replace('__NAME__', document.getElementById('firstname').value)
            .replace('__COUNTRY__', document.getElementById('country').value)
    )
        .then(response => response.json())
        .then(result => display(result));
}

function display (result) {
    console.log('result :>> ', result);
    const resultDiv = document.getElementById('result');
    resultDiv.innerText = '';

    // Création des éléments HTML
    const name = document.createElement('p');
    const gender = document.createElement('p');
    const probability = document.createElement('p');
    const count = document.createElement('p');
    const country_id = document.createElement('p');

    // Paramétrer les éléments HTML
    name.innerText = 'Nom : ' + result.name;
    gender.innerText = 'Genre : ' + result.gender;
    probability.innerText = 'Probabilité : ' + result.probability * 100 + ' %';
    count.innerText = 'Nombre : ' + result.count;
    country_id.innerText = 'ID pays : ' + result.country_id;

    resultDiv.appendChild(name);
    resultDiv.appendChild(gender);
    resultDiv.appendChild(probability);
    resultDiv.appendChild(count);
    resultDiv.appendChild(country_id);
}