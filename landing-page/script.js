const toggleBtn = document.querySelector(".toggle-btn");
const dropDown = document.querySelector(".dropdown");
const toggleBtnIcon = document.querySelector(".toggle-btn i");

toggleBtn.addEventListener("click", function () {
  dropDown.classList.toggle("open")
  const isOpen = dropDown.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"
});
