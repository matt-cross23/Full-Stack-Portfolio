console.log("How are u")

const displayNav = document.querySelector('#DropDown')
const navBtn = document.getElementById('user-menu-button');


function toggleText() {
  if (displayNav.style.display === "block") {
    displayNav.style.display = "none";
  
  } else {
    displayNav.style.display = "block";

  }
}

