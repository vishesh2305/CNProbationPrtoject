let projectWindow = null; // Declare a variable to hold the project window reference

document.addEventListener("DOMContentLoaded", () => {
    const updateButton = document.getElementById("update-button-date-time");
    const dateTimeInput = document.getElementById("date-time-changer");
    const openProjectButton = document.getElementById('open-project-page');

    // When the "Open Project Page" button is clicked, open the project page and store the reference
    openProjectButton.addEventListener('click', () => {
        projectWindow = window.open('project.html', '_blank');
    });

    updateButton.addEventListener('click', () => {
        const selectedDateTime = dateTimeInput.value;
        const message = {
            type: 'updateCountdown',
            dateTime: selectedDateTime
        };

        // Check if the project window is open before sending the message
        if (projectWindow && !projectWindow.closed) {
            projectWindow.postMessage(message, '*');
            console.log('Message sent to project page:', message);
        } else {
            alert('Please open the project page first.');
        }
    });
});
