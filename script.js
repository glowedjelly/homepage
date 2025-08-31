document.addEventListener('DOMContentLoaded', function() {
    const greetBtn = document.getElementById('greetBtn');
    const greetMessage = document.getElementById('greetMessage');

    greetBtn.addEventListener('click', async function() {
        // Fetch a greeting from the backend
        try {
            const res = await fetch('/api/greet');
            const data = await res.json();
            greetMessage.textContent = data.message;
        } catch (err) {
            greetMessage.textContent = "Oops! Couldn't fetch greeting.";
        }
    });
});
