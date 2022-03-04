const btnLogin = document.forms["login-form"]["button-login"];
const notifier = document.getElementById("notifier");

let username = document.forms["login-form"]["username"];
let password = document.forms["login-form"]["password"];

function checkUsername() {
    let uName = username.value.trim();
    if (uName.length < 5 || uName.length > 16) {
        notifier.innerText += "Username must be between 5 and 16 characters. "
        return false;
    } else return true;
};

function checkPassword() {
    let pWord = password.value.trim();
    let pwRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!pwRegex.test(pWord)) {
        notifier.innerText += 'Password must be at least 8 characters long, and contain at least 1 digit, 1 uppercase letter, and 1 lowercase letter.';
        return false;
    } else return true;
}

function checkLogin() {
    if (checkUsername() && checkPassword()) {
        localStorage.setItem("Username", JSON.stringify(username.value)); // store username in localStorage
        window.location = "patientInfo.html"; // load next page
    } 
}

btnLogin.addEventListener('click', (event) => {
    event.preventDefault();
    checkLogin();
})