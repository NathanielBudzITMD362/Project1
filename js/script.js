window.addEventListener('load', function() {
    const form = document.getElementById('signupForm');

    form.addEventListener('submit', function(event) {
        const emailInput = document.getElementById('email');
        const emailValue = emailInput.value.trim();

        if (!isValidEmail(emailValue)) {
            event.preventDefault(); 
            alert('Please enter a valid email address.');
        }
    });

    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});