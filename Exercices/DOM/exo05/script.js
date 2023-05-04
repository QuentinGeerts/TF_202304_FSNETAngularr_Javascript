
window.onload = () => {
    displayHours();
    displayDate();

    function displayHours () {

        const dh = document.getElementById('displayHours');

        const now = new Date();

        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        let milliseconds = now.getMilliseconds();

        if (hours < 10) hours = '0' + hours;
        if (minutes < 10) minutes = '0' + minutes;
        if (seconds < 10) seconds = '0' + seconds;

        milliseconds = parseInt(milliseconds / 10);

        let formattedHours = `${hours}:${minutes}:${seconds}.${milliseconds}`;

        document.title = formattedHours;

        if (hours == 0 && minutes == 0 && seconds == 0) {
            displayDate();
        }

        dh.innerText = formattedHours;

        setTimeout(displayHours, 100);
    }

    function displayDate () {

        const dd = document.getElementById('displayDate');
        const now = new Date();

        const dayOfWeek = [
            'Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'
        ];

        const months = [
            "Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août",
            "Septembre", "Octobre", "Novembre", "Décembre"
        ];

        let day = dayOfWeek[now.getDay()];
        let date = now.getDate();
        let month = months[now.getMonth()];
        let year = now.getFullYear();

        const formattedDate = `${day}, le ${date} ${month} ${year}`;

        dd.innerText = formattedDate;

        // dd.innerText = now.toLocaleDateString('fr-Fr', { weekday: 'long', day: 'numeric', month: 'long' });

    }
};