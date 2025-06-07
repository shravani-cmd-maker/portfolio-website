// Theme toggle and scroll to top
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-toggle");
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
  });

  // Scroll-to-top button
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
  toTopButton.style.zIndex = "1000";

  document.body.appendChild(toTopButton);

  window.addEventListener("scroll", () => {
    toTopButton.style.display = window.scrollY > 300 ? "block" : "none";
  });

  toTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Typing animation re-trigger (optional)
  const nameEl = document.querySelector(".typing-text");
  nameEl.classList.remove("typing-text");
  void nameEl.offsetWidth; // reflow
  nameEl.classList.add("typing-text");
});

