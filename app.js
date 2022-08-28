let svg = document.querySelector("svg");
let span = document.querySelector("span");
let icon = document.querySelector("i");
let passwordInput = document.querySelector("#password");
let boxPass = document.querySelector(".passwordBox");
let root = document.querySelector(":root");

svg.addEventListener("click", clickSvg);

function clickSvg() {
  // set Show or hidden pass
  const type =
    passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);

  // show light
  getComputedStyle(root).getPropertyValue("--pseudo-display") === "none"
    ? root.style.setProperty("--pseudo-display", "block")
    : root.style.setProperty("--pseudo-display", "none");

  if (passwordInput.getAttribute("type") === "password") {
    icon.style.color = "#8a8a8a";
    passwordInput.style.color = "#8a8a8a";
  } else {
    icon.style.color = "#34495e";
    passwordInput.style.color = "#34495e";
  }
}
