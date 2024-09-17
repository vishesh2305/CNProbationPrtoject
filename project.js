document.addEventListener("DOMContentLoaded", () => {
    const dayscount = document.getElementById("days")
    const hourscount = document.getElementById("hours")
    const minutescount = document.getElementById("minutes")
    const secondcount = document.getElementById("seconds")
    const countdownDate = new Date('2024-09-23T00:00:00');



    function Countdown() {
        const presentdate = new Date();
        const timeleft = countdownDate - presentdate;
        const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const  minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
        const  seconds = Math.floor((timeleft % (1000 * 60)) / 1000);








        dayscount.textContent = days;
        hourscount.textContent = hours;
        minutescount.textContent = minutes;
        secondcount.textContent = seconds;

    }

    setInterval(Countdown, 1000);






})