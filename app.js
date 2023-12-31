const newYears = '1 Jan 2024'
const dia = document.getElementById('days');
const horas = document.getElementById('hours');
const minutos = document.getElementById('mins');
const segundos = document.getElementById('seconds');



function countdown() {
    const newYearDate = new Date(newYears); //1 de enero del 2024
    const currentDate = new Date(); //Fecha actual

    const totalSeconds = (newYearDate - currentDate)/1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;


    dia.innerHTML = formatTime(days);
    horas.innerHTML = formatTime(hours);
    minutos.innerHTML = formatTime(minutes);
    segundos.innerHTML = formatTime(seconds);




function formatTime(time) {
    return time<10 ? (`0 ${time}`) : time;
}

}

countdown();

setInterval(countdown,1000);