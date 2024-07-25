const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function validate(username, email, password, repassword) {
  if (username.value.length < 3) {
    alert("username 3 ta belgindan kam bolmasin");
    username.focus();
    username.style.outlineColor = "red";
    return false;
  }

  if (email.value.length < 3) {
    alert("email 3 ta belgindan kam bolmasin");
    email.focus();
    email.style.outlineColor = "red";
    return false;
  }

  if (password.value.length < 3) {
    alert("password 3 ta belgindan kam bolmasin");
    password.focus();
    password.style.outlineColor = "red";
    return false;
  }

  if (password.value == repassword.value) {
    alert("kod mos kemlayapti");
    repassword.value = "";
    password.focus;
    return false;
  }

  if (!validateEmail(email.value)) {
    alert("email xato");
    email.focus();
    return false;
  }

  return true;
}
export { validate };
