const loginForm = document.getElementById("loginform");
const loginButton = document.getElementById("loginform-submit");
const loginErrorMsg = document.getElementById("loginerror-msg");

loginButton.addEventListener("click", (d) => {
    d.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "1111") {
        alert("You have successfully logged in.");
        window.location.replace("/homepage.html");
    } else {
        alert("Error")
    }
})
