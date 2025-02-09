document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the username and password
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Hash the username and password (for demonstration purposes only)
    const hashedUsername = btoa(username); // Base64 encoding
    const hashedPassword = btoa(password); // Base64 encoding

    // Example credentials (hashed)
    const correctUsername = btoa('super'); // Base64 encoding of 'user'
    const correctPassword = btoa('star'); // Base64 encoding of 'pass'

    // Check if the hashed credentials match
    if (hashedUsername === correctUsername && hashedPassword === correctPassword) {
        document.getElementById('message').textContent = 'Login successful!';
        document.getElementById('audio1').play();
    } else {
        document.getElementById('message').textContent = 'Invalid username or password.';
        document.getElementById('audio2').play();
    }

    // Clear the input fields
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
});