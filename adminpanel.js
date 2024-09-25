document.addEventListener("DOMContentLoaded", () => {


    const countdownManagementSection = document.getElementById('countdown-management');
    const dateTimeSelector = document.getElementById('date-time-selector');
    const updateButton = document.getElementById("update-button-date-time");
    const dateTimeInput = document.getElementById("date-time-changer");


    updateButton.addEventListener('click', updateCountdown);

    function updateCountdown() {
        const selectedDateTime = dateTimeInput.value;
        const message = {
            type: 'updateCountdown',
            dateTime: selectedDateTime
        };
        window.opener.postMessage(message, '*');
    };

    document.getElementById('open-project-page').addEventListener('click', () => {
        window.open('project.html', '_blank');
    });
    


});