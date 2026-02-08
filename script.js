let currentPage = 0;
const pages = document.querySelectorAll(".page");

function typeText(el) {
  const text = el.innerHTML;
  el.innerHTML = "";
  let i = 0;
  const timer = setInterval(() => {
    el.innerHTML += text[i++];
    if (i >= text.length) clearInterval(timer);
  }, 20);
}

function nextPage() {
  const current = pages[currentPage];
  current.classList.remove("active");
  currentPage++;
  const next = pages[currentPage];
  next.classList.add("active");

  const nextText = next.querySelector(".type");
  if (nextText) typeText(nextText);
}

function sayYes() {
  document.getElementById("popup").classList.add("show");
}

function closePopup() {
  document.getElementById("popup").classList.remove("show");
}
