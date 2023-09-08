// first name
const fNameEl = document.getElementById("fname");
const firstIconEl = document.getElementById("first-icon");
const firstMsgEl = document.getElementById("first-msg");

function firstName() {
  if (fNameEl.value === "") {
    firstMsgEl.innerHTML = "First Name can't be empty";
    firstIconEl.style.display = "block";
    fNameEl.style.border = "2px solid hsl(0, 100%, 74%)";
    return false;
  }
  firstMsgEl.innerHTML = "";
  firstIconEl.style.display = "none";
  fNameEl.style.border = "1px solid hsl(246, 25%, 77%)";
  return true;
}

// last name
const lNameEl = document.getElementById("lname");
const lastIconEl = document.getElementById("last-icon");
const lastMsgEl = document.getElementById("last-msg");
function lastName() {
  if (lNameEl.value === "") {
    lastMsgEl.innerHTML = "Last Name can't be empty";
    lastIconEl.style.display = "block";
    lNameEl.style.border = "2px solid hsl(0, 100%, 74%)";
    return false;
  }
  lastMsgEl.innerHTML = "";
  lastIconEl.style.display = "none";
  lNameEl.style.border = "1px solid hsl(246, 25%, 77%)";
  return true;
}

// email validation
const email = document.getElementById("email");
const errorIconEl = document.getElementById("error-icon");
const errorMsgEl = document.getElementById("error-msg");
const emailRegex = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;

function validateEmail() {
  if (!email.value.match(emailRegex)) {
    errorMsgEl.innerHTML = "Looks like this is not an empty";
    errorIconEl.style.display = "block";
    email.style.border = "2px solid hsl(0, 100%, 74%)";
    return false;
  }
  errorMsgEl.innerHTML = "";
  errorIconEl.style.display = "none";
  email.style.border = "1px solid hsl(246, 25%, 77%)";
  return true;
}

// password validation

const password = document.getElementById("password");
const passwordIconEl = document.getElementById("password-icon");
const passwordMsgEl = document.getElementById("password-msg");
const passwordRegex = /^^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

function validatePassword() {
  if (!password.value.match(passwordRegex)) {
    passwordMsgEl.innerHTML = "Password can't be empty";
    passwordIconEl.style.display = "block";
    password.style.border = "2px solid hsl(0, 100%, 74%)";
    return false;
  }
  passwordMsgEl.innerHTML = "";
  passwordIconEl.style.display = "none";
  password.style.border = "1px solid hsl(246, 25%, 77%)";
  return true;
}

/*
else if (password.value === "") {
  passwordMsgEl.innerHTML = "Password can't be empty";
  passwordIconEl.style.display = "block";
  password.style.border = "2px solid hsl(0, 93%, 68%)";
  return false;
}
*/
