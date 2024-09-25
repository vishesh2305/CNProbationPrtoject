// let countdownDate = new Date('2024-09-21T00:00:00');  // Default countdown date

// document.addEventListener("DOMContentLoaded", () => {
//     // Listener for messages from the admin panel
//     window.addEventListener('message', (event) => {
//         if (event.data.type === 'updateCountdown') {
//             countdownDate = new Date(event.data.dateTime);  // Update countdownDate when a new date is received
//             console.log('New countdown date received:', countdownDate);  // Log the new countdown date
//         }
//     });

//     // Function to update the countdown display
//     function Countdown() {
//         const presentDate = new Date();  // Get the current date and time
//         const timeLeft = countdownDate.getTime() - presentDate.getTime();  // Calculate the time left in milliseconds

//         // Log the present date, countdown date, and time left for debugging
//         console.log('Countdown Date:', countdownDate);
//         console.log('Current Date:', presentDate);
//         console.log('Time left in ms:', timeLeft);

//         if (timeLeft <= 0) {
//             // Countdown finished or date passed
//             document.getElementById('days').textContent = "Event Over";
//             document.getElementById('hours').textContent = "";
//             document.getElementById('minutes').textContent = "";
//             document.getElementById('seconds').textContent = "";
//             document.querySelectorAll('.coluns-countdown').forEach(element => element.style.display = 'none');
//         } else {
//             // Otherwise, calculate and display the remaining time
//             const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
//             const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//             const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
//             const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

//             // Update the HTML with the time remaining
//             document.getElementById('days').textContent = days;
//             document.getElementById('hours').textContent = hours;
//             document.getElementById('minutes').textContent = minutes;
//             document.getElementById('seconds').textContent = seconds;
//         }
//     }

//     setInterval(Countdown, 1000);  // Run the countdown every second
// });




















// let countdownDate = new Date('2024-09-21T00:00:00');  // Default countdown date

// document.addEventListener("DOMContentLoaded", () => {
//     // Listener for messages from the admin panel
//     window.addEventListener('message', (event) => {
//         if (event.data.type === 'updateCountdown') {
//             const newCountdownDate = new Date(event.data.dateTime);  // Update countdownDate when a new date is received
            
//             if (!isNaN(newCountdownDate.getTime())) {  // Ensure the date is valid
//                 countdownDate = newCountdownDate;  // Set the new countdown date
//                 console.log('New countdown date received:', countdownDate);
//             } else {
//                 console.log('Invalid date received');
//             }
//         }
//     });

//     // Function to update the countdown display
//     function Countdown() {
//         const presentDate = new Date();  // Get the current date and time
//         const timeLeft = countdownDate.getTime() - presentDate.getTime();  // Calculate the time left in milliseconds

//         if (timeLeft <= 0) {
//             document.getElementById('days').textContent = "Event Over";
//             document.getElementById('hours').textContent = "";
//             document.getElementById('minutes').textContent = "";
//             document.getElementById('seconds').textContent = "";
//         } else {
//             const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
//             const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//             const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
//             const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

//             document.getElementById('days').textContent = days;
//             document.getElementById('hours').textContent = hours;
//             document.getElementById('minutes').textContent = minutes;
//             document.getElementById('seconds').textContent = seconds;
//         }
//     }

//     setInterval(Countdown, 1000);  // Run the countdown every second
// });













// let countdownDate = null;  // Initially, no countdown date is set

// document.addEventListener("DOMContentLoaded", () => {
//     // Listener for messages from the admin panel
//     window.addEventListener('message', (event) => {
//         if (event.data.type === 'updateCountdown') {
//             const newCountdownDate = new Date(event.data.dateTime);  // Update countdownDate when a new date is received

//             if (!isNaN(newCountdownDate.getTime())) {  // Ensure the date is valid
//                 countdownDate = newCountdownDate;  // Set the new countdown date
//                 console.log('New countdown date received:', countdownDate);
//             } else {
//                 console.log('Invalid date received');
//             }
//         }
//     });

//     // Function to update the countdown display
//     function Countdown() {
//         const presentDate = new Date();  // Get the current date and time

//         if (countdownDate === null) {
//             // If no date has been set yet, show a message saying we're awaiting the date
//             document.getElementById('days').textContent = "Awaiting date";
//             document.getElementById('hours').textContent = "";
//             document.getElementById('minutes').textContent = "";
//             document.getElementById('seconds').textContent = "";
//         } else {
//             const timeLeft = countdownDate.getTime() - presentDate.getTime();  // Calculate the time left in milliseconds

//             if (timeLeft <= 0) {
//                 // Countdown finished or date passed
//                 document.getElementById('days').textContent = "Event Over";
//                 document.getElementById('hours').textContent = "";
//                 document.getElementById('minutes').textContent = "";
//                 document.getElementById('seconds').textContent = "";
//             } else {
//                 // Otherwise, calculate and display the remaining time
//                 const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
//                 const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//                 const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
//                 const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

//                 document.getElementById('days').textContent = days;
//                 document.getElementById('hours').textContent = hours;
//                 document.getElementById('minutes').textContent = minutes;
//                 document.getElementById('seconds').textContent = seconds;
//             }
//         }
//     }

//     setInterval(Countdown, 1000);  // Run the countdown every second
// });





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
