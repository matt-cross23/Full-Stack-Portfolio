const displayNav = document.querySelector("#DropDown");
const navBtn = document.getElementById("user-menu-button");
const dropBtn = document.getElementById("btn-drop");
const dropMenu = document.querySelector("first");
var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

function toggleText() {
  if (displayNav.style.display === "block") {
    displayNav.style.display = "none";
  } else {
    displayNav.style.display = "block";
  }
}

const displayP = document.querySelector("#btnText");
let p = document.getElementById("clickText");

function toggleP() {
  if (p.style.display === "block") {
    p.style.display = "none";
    displayP.textContent = "Click for details";
  } else {
    p.style.display = "block";

    displayP.textContent = "Click to minimize";
  }
}

if (viewportWidth > 650) {
  console.log("Wide viewport");
} else {
  console.log("Small viewport");
  // dropSvg.addEventListener("keydown", append());
}

// function append() {
//   dropMenu.append(displayNav);
// }

// Dark mode vs light
window.addEventListener("load", () => {
  if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme", "light");
  }

  const themeSelector = document.querySelector("#themeSelector");
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    // themeSelector.textContent = "☀️";
    console.log("dark mode");
  } else {
    console.log("light mode");

    // themeSelector.textContent = "🌙️";
  }

  themeSelector.addEventListener("click", () => {
    if (localStorage.getItem("theme") === "light") {
      localStorage.setItem("theme", "dark");
      // themeSelector.textContent = "☀️";
    } else {
      localStorage.setItem("theme", "light");
      // themeSelector.textContent = "🌙️";
    }

    document.body.classList.toggle("dark");
  });
});
