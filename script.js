// Agregá tus fotos en la carpeta "fotos" y escribí sus nombres aquí.
const photos = [
  
const recuerdos = [
   { src: "fotos/foto 1.jpeg", caption: "Un recuerdo bonito ❤️" },
  { src: "fotos/foto 2.jpeg", caption: "De esos momentos que guardo ✨" },
  { src: "fotos/foto 3.jpeg", caption: "Mi parte favorita: compartir con vos 💗" },
  { src: "fotos/foto 4.jpeg", caption: "Y que vengan muchos más recuerdos 🌷" },
  { src: "fotos/foto 5.jpeg", caption: "Haces que cualquier día común se vuelva especial ✨" },
  { src: "fotos/foto 6.jpeg", caption: "Un recuerdo que me saca una sonrisa cada vez que lo veo 😊" },
  { src: "fotos/foto 7.jpeg", caption: "Mi lugar favorito en el mundo siempre es a tu lado 📍❤️" },
  { src: "fotos/foto 8.jpeg", caption: "Seguimos creando nuestra historia favorita 🌷" }

];

let currentPhoto = 0;
const photo = document.getElementById("photo");
const caption = document.getElementById("photoCaption");
const placeholder = document.getElementById("photoPlaceholder");
const dots = document.getElementById("dots");

function showPhoto(index) {
  currentPhoto = (index + photos.length) % photos.length;
  const item = photos[currentPhoto];
  photo.style.display = "block";
  placeholder.style.display = "none";
  photo.src = item.src;
  caption.textContent = item.caption;

  // Si todavía no existe el archivo, muestra una indicación en lugar de una imagen rota.
  photo.onerror = () => {
    photo.style.display = "none";
    placeholder.style.display = "flex";
  };

  [...dots.children].forEach((dot, i) => dot.classList.toggle("active", i === currentPhoto));
}

photos.forEach((item, index) => {
  const dot = document.createElement("button");
  dot.className = "dot" + (index === 0 ? " active" : "");
  dot.setAttribute("aria-label", `Ver foto ${index + 1}`);
  dot.addEventListener("click", () => showPhoto(index));
  dots.appendChild(dot);
});

document.getElementById("prevBtn").addEventListener("click", () => showPhoto(currentPhoto - 1));
document.getElementById("nextBtn").addEventListener("click", () => showPhoto(currentPhoto + 1));

document.getElementById("startBtn").addEventListener("click", () => {
  const memories = document.getElementById("recuerdos");
  const letter = document.getElementById("carta");
  memories.classList.remove("section-hidden");
  memories.classList.add("section-visible");
  letter.classList.remove("section-hidden");
  letter.classList.add("section-visible");
  memories.scrollIntoView({ behavior: "smooth", block: "start" });
});

document.getElementById("envelopeBtn").addEventListener("click", () => {
  const envelope = document.getElementById("envelope");
  const content = document.getElementById("letterContent");
  const instruction = document.getElementById("envelopeInstruction");
  const isOpen = envelope.classList.toggle("open");
  if (isOpen) {
    instruction.textContent = "Con cariño, para vos ❤️";
    window.setTimeout(() => {
      content.classList.add("show");
      content.setAttribute("aria-hidden", "false");
      content.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 500);
  } else {
    content.classList.remove("show");
    content.setAttribute("aria-hidden", "true");
    instruction.textContent = "Tocá el sello para abrir";
  }
});

// Corazones suaves en el fondo.
const heartLayer = document.querySelector(".floating-hearts");
function makeHeart() {
  const heart = document.createElement("span");
  heart.className = "heart";
  heart.textContent = Math.random() > 0.5 ? "♡" : "♥";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (12 + Math.random() * 16) + "px";
  const duration = 8 + Math.random() * 8;
  heart.style.animationDuration = duration + "s";
  heartLayer.appendChild(heart);
  window.setTimeout(() => heart.remove(), duration * 1000);
}
for (let i = 0; i < 8; i++) window.setTimeout(makeHeart, i * 450);
window.setInterval(makeHeart, 1200);

// Inicia con las secciones escondidas hasta tocar el botón de portada.
