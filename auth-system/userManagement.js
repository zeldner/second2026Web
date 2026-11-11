// User Management Logic with Protected Render Guard

const currentUser = JSON.parse(localStorage.getItem("currentUser"));

// 1. Authorization Guard
if (!currentUser || currentUser.role !== "admin") {
    alert("Unauthorized access. Admin privileges required.");
    // window.location.replace removes the unauthorized entry from browser history
    window.location.replace("login.html");
} else {
    // 2. Reveal UI container once verified
    const adminContent = document.getElementById("admin-content");
    adminContent.classList.remove("hidden");

    // 3. Populate Welcome greeting
    const welcomeElement = document.getElementById("welcome-message");
    welcomeElement.textContent = `Welcome, ${currentUser.username}`;

    // 4. Render user directory table
    const usersTableBody = document.getElementById("users-table-rows");
    const allUsers = JSON.parse(localStorage.getItem("users")) || [];

    if (allUsers.length === 0) {
        usersTableBody.innerHTML = `
            <tr>
                <td colspan="4" class="py-6 text-center text-slate-500 italic">No users currently registered.</td>
            </tr>
        `;
    } else {
        usersTableBody.innerHTML = allUsers.map(user => {
            const roleBadgeClass = (user.role === "admin")
                ? "bg-purple-950 text-purple-300 border border-purple-800"
                : "bg-slate-700 text-slate-300 border border-slate-600";

            return `
                <tr class="hover:bg-slate-700/30 transition">
                    <td class="py-3 px-6 font-mono text-xs text-slate-400">${user.id}</td>
                    <td class="py-3 px-6 font-semibold text-slate-200">${user.username}</td>
                    <td class="py-3 px-6 text-slate-300">${user.email}</td>
                    <td class="py-3 px-6">
                        <span class="px-2.5 py-0.5 text-xs rounded-full font-medium ${roleBadgeClass}">
                            ${user.role}
                        </span>
                    </td>
                </tr>
            `;
        }).join("");
    }

    // 5. Logout handler
    document.getElementById("btn-logout").addEventListener("click", () => {
        localStorage.removeItem("currentUser");
        window.location.replace("login.html");
    });
}