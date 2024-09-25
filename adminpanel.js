document.addEventListener("DOMContentLoaded", () => {
    const updateButton = document.getElementById("update-button-date-time");
    const dateTimeInput = document.getElementById("date-time-changer");
    const openProjectButton = document.getElementById('open-project-page');
    let projectWindow = null;

    openProjectButton.addEventListener('click', () => {
        projectWindow = window.open('project.html', '_blank');
    });

    updateButton.addEventListener('click', () => {
        const selectedDateTime = dateTimeInput.value;
        const message = {
            type: 'updateCountdown',
            dateTime: selectedDateTime
        };

        if (projectWindow && !projectWindow.closed) {
            projectWindow.postMessage(message, '*');
            console.log('Message sent to project page:', message);
        } else {
            alert('Please open the project page first.');
        }
    });

    // Handling the Agenda Update
    const updateagendaname = document.getElementById("agenda-update");
    const agendatime = document.getElementById("agenda-date-time");
    const agendaupdatebutton = document.getElementById("update-button-agenda");

    agendaupdatebutton.addEventListener('click', () => {
        const agendaName = updateagendaname.value;
        const agendaDateTime = agendatime.value;

        if (!agendaName || !agendaDateTime) {
            alert('Please enter a valid agenda name and date/time.');
            return;
        }

        const message = {
            type: 'updateAgenda',
            agendaName: agendaName,
            agendaDateTime: agendaDateTime
        };

        if (projectWindow && !projectWindow.closed) {
            projectWindow.postMessage(message, '*');
            console.log('Agenda update sent:', message);
        } else {
            alert('Please open the project page first.');
        }
    });
});
