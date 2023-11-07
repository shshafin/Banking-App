document.getElementById("login-btn").addEventListener("click", function () {
  // email
  const emailField = document.getElementById("email");
  const emailValue = emailField.value;

  //   password
  const passField = document.getElementById("password");
  const passValue = passField.value;

  // validity check
  if (emailValue === "admin@gmail.com" && passValue === "1234") {
    // how to go other html page
    window.location.href = "bank.html";
  } else {
    alert("invalid user");
  }
  emailField.value = " ";
});
