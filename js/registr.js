import { validate } from "./function.js";

const form = document.querySelector("form");
const username = document.querySelector("username");
const email = document.querySelector("email");
const password = document.querySelector("password");
const repassword = document.querySelector("re-password");
const btn = document.querySelector("btn");

form &&
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const isvalid = validate(username, email, password, repassword);
    if (!isvalid) {
      return;
    }
    const user = {
      username: username.value,
      email: email.value,
      password: password.value,
    };
    fetch(" https://auth-rg69.onrender.com/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-type": "aplication/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message == "Failed! Username is already in use!") {
          alert("data.message");
          username.focus();
        }
        if (data.message == "Failed! email is already in use!") {
          alert("data.message");
          email.focus();
        }
        if (data.message == "User registered successfully!") {
          window.location.assign("http://127.0.0.1:5500/page/login.html");
        }
      })
      .catch((err) => {});
  });
