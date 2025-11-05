function login() {
    const loginId = document.getElementById('loginId').value;
    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('message');

    // Retrieve user data from local storage (or your data source)
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Find user by username or email
    const user = users.find(u => u.username === loginId || u.email === loginId);

    if (users.length === 0) {
      messageElement.textContent = 'No users registered. Please register.';
      messageElement.className = 'mt-4 text-red-500';
    } else if (user && user.password === password) {
      messageElement.textContent = 'Login successful!';
      messageElement.className = 'mt-4 text-green-500';
      // Redirect or perform other actions upon successful login
      // window.location.href = 'dashboard.html'; // Example redirect
    } else {
      messageElement.textContent = 'Invalid username/email or password. Please register if you do not have an account.';
      messageElement.className = 'mt-4 text-red-500';
    }
  }
