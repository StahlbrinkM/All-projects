/* ----Random password generation---- */
function genPassword() {
  let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let passwordLength = document.getElementById("slider");
  let password = "";

  for (let i = 1; i <= passwordLength.value; i++) {
    let randomNumber = Math.floor(Math.random() * characters.length);
    password += characters.substring(randomNumber, randomNumber + 1);
  }
  return password;
}

/* ----Changing the text of the inputs---- */
function renderPassword() {
  document.getElementById("pwd-el-one").value = genPassword();
  document.getElementById("pwd-el-two").value = genPassword();
  document.getElementById("pwd-el-three").value = genPassword();
  document.getElementById("pwd-el-four").value = genPassword();
}
/* ----Coping the text to clipboard---- */
function copyText(clicked_id) {
  let copyText = document.getElementById(clicked_id);
  navigator.clipboard.writeText(copyText.value);
}