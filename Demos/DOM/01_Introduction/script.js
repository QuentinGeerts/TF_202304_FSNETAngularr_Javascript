const info = document.getElementById('info');

const object = document;

for (const property in object) {
    info.innerHTML += `${property} ::> ${object[property]} <br>`;
    console.log(property + ' :>> ', object[property]);
}