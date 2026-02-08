let currentPage = 0;
const pages = document.querySelectorAll(".page");

function nextPage() {
  if (currentPage < pages.length - 1) {
    pages[currentPage].classList.remove("active");
    currentPage++;
    pages[currentPage].classList.add("active");
  }
}

function sayYes() {
  document.getElementById("popup").classList.add("show");
}

function closePopup() {
  document.getElementById("popup").classList.remove("show");
}
