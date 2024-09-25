document.addEventListener("DOMContentLoaded", () => {
    let countdownDate = null;

    window.addEventListener('message', (event) => {
        console.log('Message received from admin panel:', event.data);

        // Handle Countdown Update
        if (event.data.type === 'updateCountdown') {
            const newCountdownDate = new Date(event.data.dateTime);
            if (!isNaN(newCountdownDate.getTime())) {
                countdownDate = newCountdownDate;
                console.log('New countdown date set:', countdownDate);
            } else {
                console.log('Invalid date received:', event.data.dateTime);
            }
        }

        // Handle Agenda Update
        if (event.data.type === 'updateAgenda') {
            const agendaName = event.data.agendaName;
            const agendaDateTime = event.data.agendaDateTime;

            // Update the agenda section dynamically
            const agendaSection = document.getElementById('agenda-section');
            
            // Create a new agenda item with a data attribute for the agenda time
            const newAgenda = document.createElement('span');
            newAgenda.className = 'agendas-title';
            newAgenda.textContent = `${agendaName}`; // We no longer display the time
            newAgenda.setAttribute('data-agenda-time', agendaDateTime); // Store the agenda time in a data attribute
            
            // Append the new agenda to the agenda section
            agendaSection.appendChild(newAgenda);
            console.log(`New agenda added: ${agendaName} at ${agendaDateTime}`);
        }
    });

    // Function to update the background color of agenda items if their time has passed
    function updateAgendaBackgrounds() {
        const presentDate = new Date();
        const agendaItems = document.querySelectorAll('.agendas-title');

        agendaItems.forEach((agenda) => {
            const agendaTime = new Date(agenda.getAttribute('data-agenda-time'));

            if (agendaTime <= presentDate) {
                // If the current time is past the agenda time, change the background color
                agenda.style.backgroundColor = '#B4FF47';
                agenda.style.color = "#ffffff"
            }
        });
    }

    // Call updateAgendaBackgrounds every second
    setInterval(updateAgendaBackgrounds, 1000);

    // Countdown logic here...
    function Countdown() {
        const presentDate = new Date();
        if (countdownDate === null) {
            document.getElementById('days').textContent = "Awaiting date";
        } else {
            const timeLeft = countdownDate.getTime() - presentDate.getTime();
            if (timeLeft <= 0) {
                document.getElementById('days').textContent = "Event Over";
            } else {
                const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

                document.getElementById('days').textContent = days;
                document.getElementById('hours').textContent = hours;
                document.getElementById('minutes').textContent = minutes;
                document.getElementById('seconds').textContent = seconds;
            }
        }
    }

    setInterval(Countdown, 1000);  // Run the countdown every second
});
