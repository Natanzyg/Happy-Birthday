let yesBtn = document.getElementById("yesBtn");
let noBtn = document.getElementById("noBtn");
let audio = document.getElementById("bgm");

let scale = 1;

// Force play audio on first click if autoplay blocked
document.body.addEventListener("click", () => {
  audio.play();
}, { once: true });

// Confetti effect
for (let i = 0; i < 40; i++) {
  let confetti = document.createElement("div");
  confetti.className = "confetti";
  confetti.style.left = Math.random() * 100 + "vw";
  confetti.style.background = ["#fff", "#ff9acb", "#ffe6f2"][Math.floor(Math.random() * 3)];
  confetti.style.animationDuration = (Math.random() * 3 + 2) + "s";
  document.body.appendChild(confetti);
}

// NO button -> YES grows
noBtn.addEventListener("click", () => {
  scale += 0.2;
  yesBtn.style.transform = `scale(${scale})`;

  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 80 + "%";
  noBtn.style.top = Math.random() * 80 + "%";
});

// YES clicked -> SEND WHATSAPP NOTIFICATION
yesBtn.addEventListener("click", () => {
  let usernameIG = "namachi_natxyz"; // GANTI USERNAME IG

  let pesan = "Aku sudah klik YES di website kamu 💖🎉";

  // Buka IG profile kamu
  window.open(`https://instagram.com/${usernameIG}`, "_blank");

  // Tampilkan pesan di website
  document.body.innerHTML = `
    <div style="text-align:center; font-family:Poppins; color:#ff4d88;">
      <h1>YEAYYY 💖🎉</h1>
      <p>Makasih yaa! 💕</p>
      <p><strong>Kirim pesan ini ke IG aku ya:</strong></p>
      <p style="background:#fff; padding:10px; border-radius:10px;">
        ${pesan}
      </p>
    </div>
  `;
});
