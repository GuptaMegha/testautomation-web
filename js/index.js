function showUser() {
  let logout = document.getElementById("logout");

  if (logout.style.display == "flex") {
    logout.style.display = "none";
  } else {
    logout.style.display = "flex";
    logout.style.alignItems = "flex-end";
    logout.style.height = "50px";
  }
}

function logIn() {
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let errorMessage = document.getElementById("error-message");
  //error message
  let loggedIn = false;

  for (const user of users) {
    if (user.email == email.value && user.password == password.value) {
      localStorage.setItem("logged", user.email);
      // error message
      loggedIn = true;
      break;
    }
  }
  if (!loggedIn) {
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none";
  }
  checklogged();
}

function logOut() {
  localStorage.removeItem("logged");
  checklogged();
}

function checklogged() {
  let login = document.getElementById("login");
  let content = document.getElementById("content");
  let nav = document.getElementById("navigation");
  let logged = localStorage.getItem("logged");

  if (logged) {
    console.log(`User logged: ${logged}`);
    login.style.display = "none";
    content.style.display = "flex";
    nav.style.display = "flex";
  } else {
    login.style.display = "flex";
    content.style.display = "none";
    nav.style.display = "none";
  }
}

checklogged();
