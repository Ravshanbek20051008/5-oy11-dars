const Email = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function validate(username, email, password, rePassword) {
  if (username.value.length < 3) {
    alert("username 3 ta belgidan kop bolishi kerak");
    username.focus();
    username.style.outlineColor = "red";
    return false;
  }
  if (email.value.length < 3) {
    alert("email 3 ta belgidan kop bolishi kerak");
    email.focus();
    email.style.outlineColor = "red";
    return false;
  }
  if (password.value.length < 4) {
    alert("parolda 4 ta belgidan kop bolishi kerak");
    password.focus();
    password.style.outlineColor = "red";
    return false;
  }

  if (password.value != rePassword.value) {
    alert("parollar mos kelmadi");
    password.value = "";
    rePassword.focus();
    rePassword.style.outlineColor = "red";
    return false;
  }
  if (!Email(email.value)) {
    alert("email xato kiritildi");
    email.focus();
    return false;
  }

  return true;
}

function validate1(username, password) {
  if (username.value.length < 3) {
    alert("username 3ta be;gidan kop bolishi kerak");
    username.focus();
    username.style.outlineColor = "red";
    return false;
  }
  if (password.value.length < 1) {
    alert("parolda 4ta be;gidan kop bolishi kerak");
    password.focus();
    password.style.outlineColor = "red";
    return false;
  }

  return true;
}

export { validate, validate1 };
