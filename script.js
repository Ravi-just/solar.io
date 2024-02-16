
function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username === 'demo' && password === 'password') {
        alert('Login successful!');
        // Redirect to the homepage after login
        window.location.href = 'index.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }

    return false; // Prevents the form from submitting
}
