// 3D background effect with particles
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];
const numberOfParticles = 200;

for (let i = 0; i < numberOfParticles; i++) {
  particlesArray.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 3 + 1,
    speedX: Math.random() * 1 - 0.5,
    speedY: Math.random() * 1 - 0.5
  });
}

function animate() {
  ctx.fillStyle = "#0d0d0d";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#00ffe1";
  particlesArray.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
    p.x += p.speedX;
    p.y += p.speedY;
    if (p.x < 0 || p.x > canvas.width || p.y < 0 || p.y > canvas.height) {
      p.x = Math.random() * canvas.width;
      p.y = Math.random() * canvas.height;
    }
  });
  requestAnimationFrame(animate);
}

animate();

// Live Price Updater every 10 seconds
async function fetchCryptoPrices() {
  try {
    const proxyUrl = "https://corsproxy.io/?";
    const apiUrl = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,binancecoin,ethereum&vs_currencies=usd";
    const response = await fetch(proxyUrl + encodeURIComponent(apiUrl));
    const data = await response.json();
    document.getElementById("btc-price").textContent = data.bitcoin.usd;
    document.getElementById("bnb-price").textContent = data.binancecoin.usd;
    document.getElementById("eth-price").textContent = data.ethereum.usd;
  } catch (error) {
    console.error("Error fetching crypto prices:", error);
  }
}

fetchCryptoPrices();
setInterval(fetchCryptoPrices, 10000);
