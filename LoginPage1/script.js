const users = [
      { "username": "admin", "password": "12345" },
      { "username": "john", "password": "doe123" },
      { "username": "nathaniel", "password": "mypassword" }
    ];

    function login() {
      const uname = document.getElementById("username").value;
      const pword = document.getElementById("password").value;
      const message = document.getElementById("message");

      // Check user in JSON
      const user = users.find(u => u.username === uname && u.password === pword);

      if (user) {
        message.style.color = "green";
        message.textContent = "✅ Login Successful! Welcome " + uname;
      } else {
        message.style.color = "red";
        message.textContent = "❌ Invalid username or password!";
      }
    }