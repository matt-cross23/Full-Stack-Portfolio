document.querySelector('.drop').style.display = 'none';

const displayNav = document.querySelector('#DropDown');
const navBtn = document.getElementById('user-menu-button');
const dropBtn = document.getElementById('btn-drop') ;
const dropMenu = document.querySelector('first');
const toggleDark = document.querySelector('colors')
var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

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

if (viewportWidth > 650) {
	console.log('Wide viewport');

} else {
	console.log('Small viewport');
  dropSvg.addEventListener('keydown', append())
}


function append(){
  dropMenu.append(displayNav);
}

toggleDark.addEventListener('click', function(){ 
    document.body.classList.toggle('dark_mode');
});
