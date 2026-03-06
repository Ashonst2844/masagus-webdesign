var i = 0;
var txt = 'Mas-Design';

function typeWriter() {
  const title = document.getElementById("title");
  if (i < txt.length) {
    title.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
document.addEventListener("DOMContentLoaded", typeWriter);

let swipeState = false;
const swiperCheck = document.getElementById("swiperCheck");
function toggleSwipe() {
  swipeState = !swipeState;
  const title = document.querySelector(".sectTitle");
  const info = document.querySelector(".sectInfo");
  const button = document.querySelector(".sectButton");
  if (swipeState) {
    title.innerHTML = "Hello, Friend!";
    info.innerHTML = "Enter your personal details and start journey with us";
    button.innerHTML = "Sign Up";
  } else {
    title.innerHTML = "Welcome Back!";
    info.innerHTML = "To keep connected with us please login with your personal info";
    button.innerHTML = "Login";
  }
}
