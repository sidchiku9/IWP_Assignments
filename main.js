let pwdInput = document.getElementById("pwdinput");

const weakPwdOne = /[a-z]/
const weakPwdTwo = /[0-9]/
const modPwd = /[a-z0-9]/
const strongPwd = /[A-Z0-9]{6,}/
const ucPwd = /^[A-Z\d\!@#\$%&\*]{10,}$/

function testFun() {
    if (ucPwd.test(pwdInput.value)) {
        document.getElementById("pwdbar").style.width = "80px";
        document.getElementById("pwdbar").style.backgroundColor = "Green";
        document.getElementById("pwdnumber").innerHTML = "80%";
        document.getElementById("pwdtitle").innerHTML = "Uncrackable Password";
    } else if (modPwd.test(pwdInput.value)) {
        document.getElementById("pwdbar").style.width = "40px";
        document.getElementById("pwdbar").style.backgroundColor = "Orange";
        document.getElementById("pwdnumber").innerHTML = "40%";
        document.getElementById("pwdtitle").innerHTML = "Moderate Password";

    } else if (strongPwd.test(pwdInput.value)) {
        document.getElementById("pwdbar").style.width = "60px";
        document.getElementById("pwdbar").style.backgroundColor = "Blue";
        document.getElementById("pwdnumber").innerHTML = "60%";
        document.getElementById("pwdtitle").innerHTML = "Strong Password";

    } else if (((weakPwdOne.test(pwdInput.value) && !weakPwdTwo.test(pwdInput.value)) || (!weakPwdOne.test(pwdInput.value) && weakPwdTwo.test(pwdInput.value)))) {
        document.getElementById("pwdbar").style.width = "20px";
        document.getElementById("pwdbar").style.backgroundColor = "red";
        document.getElementById("pwdnumber").innerHTML = "20%";
        document.getElementById("pwdtitle").innerHTML = "Weak Password";
    } else {
        document.getElementById("pwdtitle").innerHTML = "Invalid password";
        document.getElementById("pwdbar").style.width = "0px";
        document.getElementById("pwdbar").style.backgroundColor = "#FBEEC1";
        document.getElementById("pwdnumber").innerHTML = "";
    }
}