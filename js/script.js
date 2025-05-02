
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
  const showLogin = document.getElementById("showLogin");
  const showRegister = document.getElementById("showRegister");
  const message = document.getElementById("message");

  // Mostrar formularios
  showLogin.addEventListener("click", () => {
    loginForm.classList.remove("hidden");
    registerForm.classList.add("hidden");
    message.textContent = "";
  });

  showRegister.addEventListener("click", () => {
    registerForm.classList.remove("hidden");
    loginForm.classList.add("hidden");
    message.textContent = "";
  });

  // Registro de usuario
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("regUsername").value.trim();
    const password = document.getElementById("regPassword").value;
    const role = document.getElementById("regRole").value;

    if (!username || !password || !role) {
      message.textContent = "Todos los campos son obligatorios.";
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.find(user => user.username === username)) {
      message.textContent = "El usuario ya existe.";
      return;
    }

    users.push({ username, password, role });
    localStorage.setItem("users", JSON.stringify(users));

    message.textContent = "Registro exitoso. Ahora inicia sesión.";
    registerForm.reset();
  });

  // Inicio de sesión de usuario
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("loginUsername").value.trim();
    const password = document.getElementById("loginPassword").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
      localStorage.setItem("loggedUser", JSON.stringify(user));

      alert(`Bienvenido ${user.role === "admin" ? "administrador" : "usuario"} ${user.username}`);

      // Redirección según el rol que quiera elegir el usuario
      if (user.role === "admin") {
        window.location.href = "../paginas-admin/home-admin.html";
      } 
      else if (user.role === "user") { 
        window.location.href = "../paginas/home.html";
      }
    } else {
      message.textContent = "Credenciales incorrectas.";
    }
  });  
});
