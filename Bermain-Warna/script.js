const tUbahWarna = document.getElementById("tUbahWarna");

// Event Handler
tUbahWarna.onclick = () => {
  document.body.classList.toggle("biru-muda");
};
// End Event Handler

// addEventListener
const tRandomWarna = document.createElement("button");
const teksTombol = document.createTextNode("Acak Warna");
tRandomWarna.appendChild(teksTombol);
tRandomWarna.setAttribute("type", "button");
tUbahWarna.after(tRandomWarna);

tRandomWarna.addEventListener("click", () => {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

const sMerah = document.querySelector('input[name="sMerah"]');
const sHijau = document.querySelector('input[name="sHijau"]');
const sBiru = document.querySelector('input[name="sBiru"]');

sMerah.addEventListener("input", () => {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});
sHijau.addEventListener("input", () => {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});
sBiru.addEventListener("input", () => {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});
// end addEventListener

// MouseMove
document.body.addEventListener("mousemove", (event) => {
  const posisiX = Math.round((event.clientX / window.innerWidth) * 255);
  const posisiY = Math.round((event.clientY / window.innerHeight) * 255);
  document.body.style.backgroundColor = `rgb(${posisiX},${posisiY},100)`;
});
// End Mousemove
