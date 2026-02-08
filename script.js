let current = 0;
const pages = document.querySelectorAll(".page");

function nextPage() {
  pages[current].classList.remove("active");
  current++;
  if (current < pages.length) {
    pages[current].classList.add("active");
  }
}

function sayYes() {
  document.getElementById("popup").classList.add("show");
}

function closePopup() {
  document.getElementById("popup").classList.remove("show");
}
