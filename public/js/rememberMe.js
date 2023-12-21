const rmCheck = document.getElementById("rememberMe"),
      passInput = document.getElementById("password"),
      emailInput = document.getElementById("email");

if (localStorage.checkbox && localStorage.checkbox !== "") {
    rmCheck.setAttribute("checked", "checked");
    passInput.value = localStorage.password;
    emailInput.value = localStorage.email;
} else {
    rmCheck.removeAttribute("checked");
    passInput.value = "";
    emailInput.value = "";
}

function RememberMe() {
    if (rmCheck.checked && emailInput.value !== "" && passInput.value !== "") {
        localStorage.email = emailInput.value;
        localStorage.password = passInput.value;
        localStorage.checkbox = rmCheck.value;
    } else {
        localStorage.email = "";
        localStorage.password = "";
        localStorage.checkbox = "";
    }
}