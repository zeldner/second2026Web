document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const dob = document.getElementById('dob').value;
    const messageElement = document.getElementById('registerMessage');

    if (password !== confirmPassword) {
        messageElement.textContent = 'Passwords do not match.';
        messageElement.className = 'text-red-500';
        return;
    }

    // Retrieve existing users from local storage
    let users = JSON.parse(localStorage.getItem('users')) || []; // Ensure users is an array

    // Check if username or email already exists
    const existingUser = users.find(user => user.username === username || user.email === email);
    if (existingUser) {
        messageElement.textContent = 'Username or email already exists.';
        messageElement.className = 'text-red-500';
        return;
    }

    // Add new user
    users.push({ username, email, password, dob });

    // Save updated users to local storage
    localStorage.setItem('users', JSON.stringify(users));

    messageElement.textContent = 'Registration successful!';
    messageElement.className = 'text-green-500';

    // Optional: Redirect to login page after successful registration
    setTimeout(() => {
        window.location.href = 'loginT.html';
    }, 2000); // Redirect after 2 seconds
});