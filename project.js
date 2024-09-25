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
























let countdownDate = null; // Initially, no countdown date is set

document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener('message', (event) => {


        console.log('Message received from admin panel:', event.data);

        if (event.data.type === 'updateCountdown') {
            const newCountdownDate = new Date(event.data.dateTime); // Parse the received date

            if (!isNaN(newCountdownDate.getTime())) { // Ensure the date is valid
                countdownDate = newCountdownDate; // Update the countdown date
                console.log('New countdown date set:', countdownDate);
            } else {
                console.log('Invalid date received:', event.data.dateTime);
            }
        }
    });

    // Function to update the countdown display
    function Countdown() {
        const presentDate = new Date(); // Get the current date and time

        if (countdownDate === null) {
            // No date has been set yet
            document.getElementById('days').textContent = "Awaiting date";
            document.getElementById('hours').textContent = "";
            document.getElementById('minutes').textContent = "";
            document.getElementById('seconds').textContent = "";
        } else {
            const timeLeft = countdownDate.getTime() - presentDate.getTime(); // Calculate the time left

            if (timeLeft <= 0) {
                // Countdown finished or date passed
                document.getElementById('days').textContent = "Event Over";
                document.getElementById('hours').textContent = "";
                document.getElementById('minutes').textContent = "";
                document.getElementById('seconds').textContent = "";
            } else {
                // Calculate remaining time components
                const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

                // Update the HTML elements
                document.getElementById('days').textContent = days;
                document.getElementById('hours').textContent = hours;
                document.getElementById('minutes').textContent = minutes;
                document.getElementById('seconds').textContent = seconds;
            }
        }
    }

    setInterval(Countdown, 1000); // Run the countdown every second
});
