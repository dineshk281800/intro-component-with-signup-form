var email = document.getElementById("email");
var errorMsg = document.getElementById("error-msg");

function validateEmail() {
  if (!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    errorMsg.innerHTML = "Looks like this is not an empty";
    errorMsg.style.color = "red";
    email.style.border = "1px solid red";
    email.style.background = "#e9988b";
    return false;
  }
  errorMsg.innerHTML = "";
  errorMsg.style.color = "#000";
  email.style.border = "#36384e";
  email.style.background = "#fff";
  return true;
}

document.getElementById("myForm").addEventListener("submit", (event) => {
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var errorMessage = "";

  if (fname.match("")) {
    errorMsg.innerHTML = "First Name can't be empty\n";
  }
  if (!lname) {
    errorMessage += "Last Name can't be empty\n";
  }

  if (!email) {
    errorMessage += 'Email can"t be empty.\n';
  } else if (!validateEmail(email)) {
    errorMessage += "Looks like this is not an empty.\n";
  }
});
