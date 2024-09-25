let countdownDate = new Date('2024-09-21T00:00:00');  // Default countdown date

document.addEventListener("DOMContentLoaded", () => {
    // Listener for messages from the admin panel
    window.addEventListener('message', (event) => {
        if (event.data.type === 'updateCountdown') {
            countdownDate = new Date(event.data.dateTime);  // Update countdownDate when a new date is received
            console.log('New countdown date received:', countdownDate);  // Log the new countdown date
        }
    });

    // Function to update the countdown display
    function Countdown() {
        const presentDate = new Date();  // Get the current date and time
        const timeLeft = countdownDate.getTime() - presentDate.getTime();  // Calculate the time left in milliseconds

        // Log the present date, countdown date, and time left for debugging
        console.log('Countdown Date:', countdownDate);
        console.log('Current Date:', presentDate);
        console.log('Time left in ms:', timeLeft);

        if (timeLeft <= 0) {
            // Countdown finished or date passed
            document.getElementById('days').textContent = "Event Over";
            document.getElementById('hours').textContent = "";
            document.getElementById('minutes').textContent = "";
            document.getElementById('seconds').textContent = "";
            document.querySelectorAll('.coluns-countdown').forEach(element => element.style.display = 'none');
        } else {
            // Otherwise, calculate and display the remaining time
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            // Update the HTML with the time remaining
            document.getElementById('days').textContent = days;
            document.getElementById('hours').textContent = hours;
            document.getElementById('minutes').textContent = minutes;
            document.getElementById('seconds').textContent = seconds;
        }
    }

    setInterval(Countdown, 1000);  // Run the countdown every second
});
