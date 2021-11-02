const pwdName = document.getElementById(pwdtitle);
const pwdNumber = document.getElementById(pwdumber);
const pwdBar = document.getElementById(pwdbar);
const pwdInput = document.getElementById(pwdinput);

const weakPwd = /[a-z]|[A-Z]|[0-9]/;
const modPwd = /[a-z0-9]/;
const strongPwd = /[A-Z0-9]/;
const ucPwd = /[]/;