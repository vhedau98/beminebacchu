let currentPage = 0;
const pages = document.querySelectorAll(".page");

/* ---------- TYPEWRITER (FIXED) ---------- */
/* Uses innerText so <br> never breaks */
function typeText(el) {
  const text = el.innerText;
  el.innerText = "";
  let i = 0;

  const timer = setInterval(() => {
    el.innerText += text.charAt(i);
    i++;
    if (i >= text.length) {
      clearInterval(timer);
    }
  }, 18);
}

/* ---------- PAGE NAVIGATION ---------- */
function nextPage() {
  // remove current
  pages[currentPage].classList.remove("active");

  currentPage++;

  if (currentPage >= pages.length) return;

  const next = pages[currentPage];
  next.classList.add("active");

  // trigger typewriter on new page
  const textEl = next.querySelector(".type");
  if (textEl) {
    typeText(textEl);
  }

  // scroll card to top on mobile
  const card = next.querySelector(".card");
  if (card) {
    card.scrollTop = 0;
  }
}

/* ---------- POPUP ---------- */
function sayYes() {
  document.getElementById("popup").classList.add("show");
}

function closePopup() {
  document.getElementById("popup").classList.remove("show");
}

/* ---------- START TYPEWRITER ON FIRST PAGE ---------- */
window.addEventListener("load", () => {
  const firstText = document.querySelector(".page.active .type");
  if (firstText) {
    typeText(firstText);
  }
});
