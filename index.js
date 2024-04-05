document.querySelector(".menu-bar").addEventListener("click", function () {
  document.querySelector(".nav-links").classList.toggle("active");
});

document.querySelector(".menu-bar").addEventListener("click", function () {
  this.classList.toggle("cross");
});
