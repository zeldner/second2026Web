// Login Logic Implementation (Sections B & D)[cite: 4]
const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("login-username");
const passwordInput = document.getElementById("login-password");
const loginError = document.getElementById("login-error");

function displayError(message) {
    loginError.textContent = message;
    loginError.classList.remove("hidden");
}

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    loginError.classList.add("hidden");

    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    // 1. Fetch registered users from LocalStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // 2. Validate credentials
    const matchedUser = users.find(u => u.username === username && u.password === password);

    if (!matchedUser) {
        displayError("Invalid username or password.");
        return;
    }

    // 3. Section B Requirement: Store logged-in user in LocalStorage (without password)[cite: 4]
    const sessionData = {
        id: matchedUser.id,
        username: matchedUser.username,
        email: matchedUser.email,
        role: matchedUser.role
    };
    localStorage.setItem("currentUser", JSON.stringify(sessionData));

    // 4. Section D Requirement: Route admin to userManagement, others elsewhere[cite: 4]
    if (matchedUser.role === "admin") {
        window.location.href = "userManagement.html";
    } else {
        alert("Login successful as Standard User. (UserManagement page is restricted to Admin).");
    }
});