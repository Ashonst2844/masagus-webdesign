var i = 0;
var txt = 'Ash-Design';

function typeWriter() {
  const title = document.getElementById("title");
  if (i < txt.length) {
    title.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
document.addEventListener("DOMContentLoaded", typeWriter);