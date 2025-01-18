var modal = document.getElementById("cookieModal");
var yesButton = document.querySelector(".accept");

window.onload = function() {
  modal.style.display = "flex";
}

yesButton.onclick = function() {
  modal.style.display = "none";
}
