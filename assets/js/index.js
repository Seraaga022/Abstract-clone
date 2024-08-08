let dropDownState = parseInt(localStorage.getItem("dropDownState")) || 1;

var $ = document;

document.addEventListener("DOMContentLoaded", () => {
  $.querySelector(".drop-down-menu__container").style.display = isOdd(
    dropDownState
  )
    ? "block"
    : "none";

  const dynamicValue =
    JSON.parse(localStorage.getItem("User")).fullName || "Sign in";
  $.querySelector(".signIn__Up").textContent = dynamicValue;
});

function toggleSearchContainer(toggle) {
  $.querySelector(".search__container").style.display = toggle
    ? "block"
    : "none";
  $.querySelector(".search__bar").focus();
}

function toggleDropDownMenu() {
  dropDownState = parseInt(dropDownState + 1);
  localStorage.setItem("dropDownState", dropDownState.toString());
  console.log("dropDownMenu state", dropDownState);

  $.querySelector(".drop-down-menu__container").style.display = isOdd(
    dropDownState
  )
    ? "block"
    : "none";
}

function isOdd(number) {
  return number % 2 === 0 ? true : false;
}
