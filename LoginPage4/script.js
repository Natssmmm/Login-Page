// Example JSON users (you could load this from server or file)
const users = [
  { username: "admin", password: "admin123", role: "Admin" },
  { username: "user", password: "user123", role: "User" }
];

document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  // Check user in JSON
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    message.style.color = "green";
    message.textContent = `Welcome ${user.role}: ${user.username}`;
    // Redirect depending on role
    if (user.role === "Admin") {
      setTimeout(() => window.location.href = "admin.html", 1000);
    } else {
      setTimeout(() => window.location.href = "user.html", 1000);
    }
  } else {
    message.style.color = "red";
    message.textContent = "Invalid username or password!";
  }
});
