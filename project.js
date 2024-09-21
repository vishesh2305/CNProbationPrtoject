document.addEventListener("DOMContentLoaded", () => {
    const dayscount = document.getElementById("days")
    const hourscount = document.getElementById("hours")
    const minutescount = document.getElementById("minutes")
    const secondcount = document.getElementById("seconds")
    const countdownDate = new Date('2024-09-21T00:00:00');


// Function for functioning of Countdown:::::
// When the Countdown is Complete then the Countdown will show the Current time Whatever time is there
    function Countdown() {
        const presentdate = new Date();
        const timeleft = countdownDate - presentdate;
        const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const  minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
        const  seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

        if (timeleft <= 0) {
            // Countdown has completed, display current time
            const currentTime = presentdate.toLocaleTimeString();
            dayscount.textContent = currentTime;
            hourscount.textContent = "";
            minutescount.textContent = "";
            secondcount.textContent = "";
            document.querySelectorAll(".coluns-countdown").forEach(element => element.style.display = "none");
            



        } else {
            dayscount.textContent = days;
            hourscount.textContent = hours;
            minutescount.textContent = minutes;
            secondcount.textContent = seconds;
        }
    }

    setInterval(Countdown, 1000);



    function updateAgenda() {
        const agendas = document.getElementsByClassName("agendas-title");
        const currentTime = new Date().getHours() + ":" + new Date().getMinutes();
    
        for (let agenda = 0; agenda < agendas.length; agenda++) {
            const agendaTime = agendas[agenda].getAttribute("data-time");
            if (currentTime >= agendaTime) {
                agendas[agenda].style.backgroundColor = "rgb(71, 188, 71)";
                agendas[agenda].style.color = "white"
            } else {
                agendas[agenda].style.backgroundColor = "";
            }
        }
    }


    setInterval(updateAgenda, 1000);




})