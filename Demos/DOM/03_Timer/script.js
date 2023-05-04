const startTimeoutButton = document.getElementById('startTimeoutButton');
const stopTimeoutButton = document.getElementById('stopTimeoutButton');
const startIntervalButton = document.getElementById('startIntervalButton');
const stopIntervalButton = document.getElementById('stopIntervalButton');

const dialogTimeout = document.getElementById('dialogTimeout');
const dialogInterval = document.getElementById('dialogInterval');

startTimeoutButton.addEventListener('click', startTimeOut);
stopTimeoutButton.addEventListener('click', stopTimeOut);
startIntervalButton.addEventListener('click', startInterval);
stopIntervalButton.addEventListener('click', stopInterval);

let timerTimeout;
let timerInterval;

let compteur = 0;

function startTimeOut () {
    timerTimeout = setTimeout(() => {
        dialogTimeout.innerText = 'Généré après une seconde. ';
    }, 1000);
}

function stopTimeOut () {
    clearTimeout(timerTimeout);
    dialogTimeout.innerText = 'Stoppé avant l\'exécution du setTimeout.';
}

function startInterval () {

    timerInterval = setInterval(() => {
        dialogInterval.innerText = 'Compteur : ' + compteur++;
    }, 2000);
}

function stopInterval () {
    clearInterval(timerInterval);
    dialogInterval.innerText = 'Stoppé avant l\'exécution du setInterval.';
}
