const passwordBox = document.getElementById("password");
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "qwertyuiopasdfghjklzxcvbnm";
const numbers = "0123456789";
const symbol = "!@#$%^&*()?<>{}[],.+-~";
const allChar = upperCase + lowerCase + numbers + symbol;

function generatePassword() {
    let password = "";

    // Fix random function calls (added parentheses)
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (length > password.length) {
        password += allChar[Math.floor(Math.random() * allChar.length)];
    }

    passwordBox.value = password;
}


function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}
