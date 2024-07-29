const card = document.getElementById("card");
const username = document.getElementById("username");
const email = document.getElementById("email");
const btn = document.getElementById("btn");

document.addEventListener("DOMContentLoaded", function () {
  let data = localStorage.getItem("product");
  console.log(data);
  if (!data) {
  }

  let user = JSON.parse(localStorage.getItem("user"));
  username.innerHTML = user.username;
  email.innerHTML = user.email;
});

btn &&
  btn.addEventListener("click", function (params) {
    params.preventDefault();

    localStorage.removeItem("user");
    localStorage.removeItem("product");

    let url = window.location.href.split("/index")[0];
    window.location.assign(`${url}/page/login.html`);
  });
