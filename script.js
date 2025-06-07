// script.js

// Scroll-to-top button functionality
document.addEventListener("DOMContentLoaded", () => {
  const toTopButton = document.createElement("button");
  toTopButton.innerText = "⬆️ Top";
  toTopButton.style.position = "fixed";
  toTopButton.style.bottom = "20px";
  toTopButton.style.right = "20px";
  toTopButton.style.padding = "0.5rem 1rem";
  toTopButton.style.background = "#222";
  toTopButton.style.color = "white";
  toTopButton.style.border = "none";
  toTopButton.style.borderRadius = "5px";
  toTopButton.style.cursor = "pointer";
  toTopButton.style.display = "none";

  document.body.appendChild(toTopButton);

  window.addEventListener("scroll", () => {
    toTopButton.style.display = window.scrollY > 300 ? "block" : "none";
  });

  toTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
