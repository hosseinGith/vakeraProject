const container = document.querySelector("#container");
function resizeWin() {
  if (container.scrollHeight > innerHeight) {
    document.body.style.display = "block";
  } else {
    document.body.style.display = "flex";
  }
}
window.addEventListener("resize", resizeWin);
document.addEventListener("DOMContentLoaded", resizeWin);
