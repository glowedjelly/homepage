// Fake games data
const games = [
  {
    name: "Adopt Me!",
    img: "https://tr.rbxcdn.com/4d4cfae9c9b9b9d6f010b0b2a4f5e82a/352/352/Image/Png",
    desc: "Adopt pets, build your home, and explore with friends.",
    url: "#"
  },
  {
    name: "Brookhaven 🏡RP",
    img: "https://tr.rbxcdn.com/02c4d4b9a6e7e0f9a7a3b8a1b45d1c07/352/352/Image/Png",
    desc: "Roleplay, build, and live your dream life!",
    url: "#"
  },
  {
    name: "Blox Fruits",
    img: "https://tr.rbxcdn.com/1b0c1a6b2c7e0b9f2b6e1b4a8b1b2c4c/352/352/Image/Png",
    desc: "Train, adventure, and become the strongest.",
    url: "#"
  },
  {
    name: "Tower of Hell",
    img: "https://tr.rbxcdn.com/6b63c5e0b9e7c4f2b1d0b7a9e2d0a1f3/352/352/Image/Png",
    desc: "Parkour through devilish towers!",
    url: "#"
  },
  {
    name: "Murder Mystery 2",
    img: "https://tr.rbxcdn.com/6d5b6e7a8b4a1b2c3d4e5f6a7b8c9d0e/352/352/Image/Png",
    desc: "Be the murderer, sheriff, or innocent. Who will win?",
    url: "#"
  }
];

function renderGames() {
  const gamesList = document.getElementById('games-list');
  if (!gamesList) return;
  gamesList.innerHTML = '';
  games.forEach(game => {
    const card = document.createElement('div');
    card.className = 'rbx-game-card';
    card.innerHTML = `
      <img src="${game.img}" alt="${game.name}" />
      <h3>${game.name}</h3>
      <p>${game.desc}</p>
      <a href="${game.url}" class="rbx-play-btn">Play</a>
    `;
    gamesList.appendChild(card);
  });
}

function showModal(contentHtml) {
  const modal = document.getElementById('rbx-modal');
  const content = document.getElementById('modal-content');
  content.innerHTML = contentHtml + `<button class="close-btn" onclick="hideModal()">✕</button>`;
  modal.style.display = 'flex';
}
function hideModal() {
  document.getElementById('rbx-modal').style.display = 'none';
}

function loginForm() {
  return `
    <h2>Login to Glow</h2>
    <form onsubmit="event.preventDefault();hideModal();alert('Fake login!');">
      <label>Username</label>
      <input type="text" required style="width:100%;margin-bottom:1rem;" />
      <label>Password</label>
      <input type="password" required style="width:100%;margin-bottom:1rem;" />
      <button type="submit" style="width:100%;background:#00b06c;color:#fff;padding:0.7rem;border:none;border-radius:5px;">Login</button>
    </form>
    <p style="margin-top:1rem;">Don't have an account? <a href="#" onclick="showModal(signupForm());return false;">Sign up</a></p>
  `;
}
function signupForm() {
  return `
    <h2>Sign Up for Glow</h2>
    <form onsubmit="event.preventDefault();hideModal();alert('Fake signup!');">
      <label>Username</label>
      <input type="text" required style="width:100%;margin-bottom:1rem;" />
      <label>Password</label>
      <input type="password" required style="width:100%;margin-bottom:1rem;" />
      <label>Birthday</label>
      <input type="date" required style="width:100%;margin-bottom:1rem;" />
      <button type="submit" style="width:100%;background:#00b06c;color:#fff;padding:0.7rem;border:none;border-radius:5px;">Sign Up</button>
    </form>
    <p style="margin-top:1rem;">Already have an account? <a href="#" onclick="showModal(loginForm());return false;">Login</a></p>
  `;
}
window.showModal = showModal;
window.signupForm = signupForm;
window.loginForm = loginForm;
window.hideModal = hideModal;

document.addEventListener('DOMContentLoaded', () => {
  renderGames();
  document.getElementById('rbx-login-btn').onclick = e => {
    e.preventDefault();
    showModal(loginForm());
  };
  document.getElementById('signup-btn').onclick = e => {
    e.preventDefault();
    showModal(signupForm());
  };
  document.getElementById('rbx-modal').onclick = function(e) {
    if (e.target === this) hideModal();
  };
});