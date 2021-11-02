let pwdInput = document.getElementById("pwdinput");

const weakPwd = /[a-z | 0-9]*/
const modPwd = /[a-z0-9]*/
const strongPwd = /[A-Z0-9]*/
const ucPwd = /[A-Z0-9$!_%]*/

function testFun() {
    if (weakPwd.test(pwdInput.value)) {
        document.getElementById("pwdbar").style.width = "20%";
        document.getElementById("pwdbar").style.color = "red";
        document.getElementById("pwdnumber").innerHTML = "20%";
        document.getElementById("pwdtitle").innerHTML = "Weak Password";
    } else {
        document.getElementById("pwdtitle").innerHTML = "Not a weak password";
    }
}