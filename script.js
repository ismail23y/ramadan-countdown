const ndays = document.getElementById('days');
const nhours = document.getElementById('hours');
const nminutes = document.getElementById('minutes');
const nseconds = document.getElementById('seconds');


const ramadan = 'Apr 12 2021';

function countdown() {
    const ramadanDate = new Date(ramadan);
    const currentDate = new Date();

    const totalSeconds = (ramadanDate - currentDate) / 1000;

    days = Math.floor(totalSeconds / 60 / 60 / 24 );
    hours = Math.floor(totalSeconds / 60 / 60 % 24 );
    minutes = Math.floor(totalSeconds / 60 % 60 );
    seconds = Math.floor(totalSeconds % 60 );


    ndays.innerHTML = days;
    nhours.innerHTML = formatTime(hours);
    nminutes.innerHTML = formatTime(minutes);
    nseconds.innerHTML = formatTime(seconds);

}

function formatTime(time) {
    if (time < 10) {
        return `0${time}`;
    } else {
        return time;
    }
}

countdown();

setInterval (countdown, 1000);