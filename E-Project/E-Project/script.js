function sendEmail() {
    const name = document.getElementById('user_name').value.trim();
    const email = document.getElementById('user_email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill in your name, email, and question!');
        return;
    }


    const btn = document.querySelector('.qform button');
    btn.textContent = 'Sending...';
    btn.disabled = true;

    setTimeout(function () {
        btn.textContent = 'Message Sent!';
        btn.style.background = 'green';
        document.getElementById('contactForm').reset();

        setTimeout(function () {
            btn.textContent = 'Submit Question →';
            btn.disabled = false;
            btn.style.background = '#c8a96e';
        }, 3000);

    }, 2000);

}