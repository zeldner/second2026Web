// Register Logic Implementation (Section A)[cite: 4]
const registerForm = document.getElementById("register-form");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("error-message");

function displayError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.remove("hidden");
}

registerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    errorMessage.classList.add("hidden");

    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;

    // 1. Retrieve existing users from LocalStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // 2. Validate uniqueness
    const exists = users.some(user => 
        user.username.toLowerCase() === username.toLowerCase() || 
        user.email.toLowerCase() === email.toLowerCase()
    );

    if (exists) {
        displayError("Username or email already registered.");
        return;
    }

    // 3. Section A Requirement: First user gets 'admin', others get 'user'[cite: 4]
    const role = (users.length === 0) ? "admin" : "user";

    // 4. Construct user object
    const newUser = {
        id: Date.now(),
        username: username,
        email: email,
        password: password,
        role: role
    };

    // 5. Save back to LocalStorage
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    // Redirect to login page
    window.location.href = "login.html";
});