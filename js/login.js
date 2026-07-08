const form = document.getElementById("loginForm");
const card = document.getElementById("loginCard");
const button = document.getElementById("loginButton");
const errorMessage = document.getElementById("errorMessage");
const backgroundLayer = document.getElementById("backgroundLayer");

const VALID_USERNAME = "aniv";
const VALID_PASSWORD = "1625";

// Membuat background hati, sparkle, dan bubble secara dinamis.
function createLoginBackground() {
  const hearts = ["♡", "♥", "💕", "✨"];

  for (let i = 0; i < 28; i++) {
    const item = document.createElement("span");
    item.className = "float-item";
    item.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    item.style.left = `${Math.random() * 100}%`;
    item.style.fontSize = `${Math.random() * 18 + 12}px`;
    item.style.animationDuration = `${Math.random() * 8 + 8}s`;
    item.style.animationDelay = `${Math.random() * 8}s`;
    backgroundLayer.appendChild(item);
  }

  for (let i = 0; i < 40; i++) {
    const sparkle = document.createElement("span");
    sparkle.className = "sparkle";
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.top = `${Math.random() * 100}%`;
    sparkle.style.animationDelay = `${Math.random() * 3}s`;
    backgroundLayer.appendChild(sparkle);
  }

  for (let i = 0; i < 16; i++) {
    const bubble = document.createElement("span");
    const size = Math.random() * 46 + 18;
    bubble.className = "bubble";
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.bottom = `-${size}px`;
    bubble.style.animationDuration = `${Math.random() * 10 + 10}s`;
    bubble.style.animationDelay = `${Math.random() * 8}s`;
    backgroundLayer.appendChild(bubble);
  }
}

function showError() {
  errorMessage.classList.add("show");
  card.classList.remove("shake");
  void card.offsetWidth;
  card.classList.add("shake");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === VALID_USERNAME && password === VALID_PASSWORD) {
    errorMessage.classList.remove("show");
    button.classList.add("loading");
    button.disabled = true;

    localStorage.setItem("semesterCelebrationLoggedIn", "true");
    localStorage.setItem("semesterCelebrationPlayMusic", "true");

    setTimeout(() => {
      window.location.href = "loading.html";
    }, 1200);
  } else {
    showError();
  }
});

createLoginBackground();
