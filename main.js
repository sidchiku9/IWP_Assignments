let pwdInput = document.getElementById("pwdinput");

const weakPwd = /^[a-z]/
const weakPedTwo = /^[\d]/
const modPwd = /^[a-z\d]{5,}$/
const strongPwd = /^[A-Z\d]/
const ucPwd = /^[A-Z\d\!@#\$%&\*]{10,}$/

function testFun() {
    if (modPwd.test(pwdInput.value)) {

        document.getElementById("pwdbar").style.width = "40%";
        document.getElementById("pwdbar").style.backgroundColor = "Orange";
        document.getElementById("pwdnumber").innerHTML = "40%";
        document.getElementById("pwdtitle").innerHTML = "Moderate Password";
        document.getElementById("pwdNew").style.display = "block";
        document.getElementById("newpwd").innerHTML = generatePassword();

    } else if (weakPwd.test(pwdInput.value) || weakPedTwo.test(pwdInput.value)) {
        document.getElementById("pwdbar").style.width = "20%";
        document.getElementById("pwdbar").style.backgroundColor = "red";
        document.getElementById("pwdnumber").innerHTML = "20%";
        document.getElementById("pwdtitle").innerHTML = "Weak Password";

        document.getElementById("pwdNew").style.display = "block";
        document.getElementById("newpwd").innerHTML = generatePassword();


    } else if (strongPwd.test(pwdInput.value)) {

        document.getElementById("pwdbar").style.width = "60%";
        document.getElementById("pwdbar").style.backgroundColor = "Blue";
        document.getElementById("pwdnumber").innerHTML = "60%";
        document.getElementById("pwdtitle").innerHTML = "Strong Password";

    } else if (ucPwd.test(pwdInput.value)) {

        document.getElementById("pwdbar").style.width = "80%";
        document.getElementById("pwdbar").style.backgroundColor = "Green";
        document.getElementById("pwdnumber").innerHTML = "80%";
        document.getElementById("pwdtitle").innerHTML = "Uncrackable Password";
    } else {

        document.getElementById("pwdtitle").innerHTML = "Invalid password";
        document.getElementById("pwdbar").style.width = "0px";
        document.getElementById("pwdbar").style.backgroundColor = "#FBEEC1";
        document.getElementById("pwdnumber").innerHTML = "";
    }
}

function generatePassword() {
    var pass = '';
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
        'abcdefghijklmnopqrstuvwxyz0123456789@#$';

    for (i = 1; i <= 8; i++) {
        var char = Math.floor(Math.random() *
            str.length + 1);

        pass += str.charAt(char)
    }

    return pass;
}