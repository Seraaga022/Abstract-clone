const user = {
  email: "",
  password: "",
  fullName: "",
};

let isAuthenticated = false;

// document.addEventListener("DOMContentLoaded", (event) => {
//   document.querySelector("#loginForm")?.addEventListener("submit", (e) => {
//     e.preventDefault();
//     // localStorage.setItem("User", JSON.stringify(user));
//     // console.log(JSON.parse(localStorage.getItem("User")));
//     console.log(document.querySelector("#fullName").value);
//     console.log(document.querySelector("#upEmail").value);
//   });
// });

document.addEventListener("DOMContentLoaded", (event) => {
  document.querySelector("#signUpForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      user.password = Math.round(Math.random() + 2);
      localStorage.setItem("User", JSON.stringify(user));
      my_modal_2.showModal();
      returnThis("fullName");
      // console.log(JSON.parse(localStorage.getItem("User")));
      isAuthenticated = true;
    }
  });
});

function returnThis(value) {
  let user = JSON.parse(localStorage.getItem("User"));
  document.querySelector("#userName").textContent = user[value];
}

function ChangeHandler(e) {
  user[e.target.name] = e.target.value;
}
