console.log("How are u")

const displayNav = document.querySelector('#DropDown')
const navBtn = document.getElementById('user-menu-button');

document.querySelector('.drop').style.display = 'none';

function toggleText() {
  if (displayNav.style.display === "block") {
    displayNav.style.display = "none";

  } else {
   
 displayNav.style.display = "block";
  }
}

const displayP = document.querySelector('#btnText')
let p = document.getElementById('clickText');


function toggleP() {
  if (p.style.display === "block") {
    p.style.display = "none";
    displayP.textContent = "Click for details";
  } else {
    p.style.display = "block";

    displayP.textContent = "Click to minimize";
  }
}

