// js/katalog.js

// DOM elementlarni tanlab olish
const konteyner = document.getElementById("maqolalar-konteyner");
const qidiruvInput = document.getElementById("qidiruv");
const kategoriyaSelect = document.getElementById("kategoriya-filtr");
const saralashSelect = document.getElementById("saralash");
const korsatilganSoni = document.getElementById("korsatilgan-soni");

// 1. A QISM: Statistika blokini hisoblash (reduce va find)
function statistikaniChiqar() {
  if (!konteyner) return; // Boshqa sahifada xato bermasligi uchun

  const jami = maqolalar.length;

  // reduce: o'rtacha o'qish vaqtini hisoblash
  const jamiVaqt = maqolalar.reduce((summa, m) => summa + m.oqishVaqti, 0);
  const ortacha = (jamiVaqt / jami).toFixed(1);

  // reduce + find: eng uzun maqolani topish
  const engKopVaqt = maqolalar.reduce((max, m) => (m.oqishVaqti > max ? m.oqishVaqti : max), 0);
  const engUzunMaqola = maqolalar.find(m => m.oqishVaqti === engKopVaqt);

  document.getElementById("stat-jami").textContent = `${jami} ta`;
  document.getElementById("stat-ortacha").textContent = `${ortacha} daqiqa`;
  document.getElementById("stat-eng-uzun").textContent = engUzunMaqola ? `${engUzunMaqola.nomi} (${engUzunMaqola.oqishVaqti} daq)` : "-";
}

// 2. B QISM: Kartalarni DOM orqali yaratish (createElement va textContent)
function kartalarniChiqar(royxat) {
  konteyner.innerHTML = "";
  korsatilganSoni.textContent = royxat.length;

  // Natija bo'lmasa xabar chiqarish
  if (royxat.length === 0) {
    const xabar = document.createElement("p");
    xabar.className = "empty-message";
    xabar.textContent = "Hech narsa topilmadi.";
    konteyner.append(xabar);
    return;
  }

  royxat.forEach(m => {
    const karta = document.createElement("article");
    karta.className = "card";
    karta.dataset.id = m.id;

    // Kategoriya badge
    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = m.kategoriya;

    // Rasm
    const rasm = document.createElement("img");
    rasm.src = m.rasm;
    rasm.alt = m.nomi;
    rasm.className = "card-img";

    // Sarlavha
    const h3 = document.createElement("h3");
    h3.textContent = m.nomi;

    // O'qish vaqti va holati
    const malumot = document.createElement("p");
    malumot.className = "card-meta";
    const holatMatni = m.mavjud ? "O'qish uchun ochiq" : "Tez kunda";
    malumot.textContent = `⏱ ${m.oqishVaqti} daqiqa • ${holatMatni}`;

    // Teglar (map metodi ishlatilgan joy)
    const teglarMatni = document.createElement("p");
    teglarMatni.className = "card-tags";
    teglarMatni.textContent = m.teglar.map(teg => `#${teg}`).join(" ");

    // Batafsil tugmasi
    const tugma = document.createElement("button");
    tugma.type = "button";
    tugma.className = "btn-detail";
    tugma.textContent = "Batafsil";

    karta.append(badge, rasm, h3, malumot, teglarMatni, tugma);
    konteyner.append(karta);
  });
}

// 3. B QISM: Qidiruv, filtr va saralashni birgalikda ishlatish
function yangila() {
  const qidiruvMatni = qidiruvInput.value.toLowerCase().trim();
  const tanlanganKategoriya = kategoriyaSelect.value;
  const saralashTuri = saralashSelect.value;

  // filter: qidiruv va kategoriya bo'yicha birga filtrlash
  let natija = maqolalar.filter(m => {
    const nomMos = m.nomi.toLowerCase().includes(qidiruvMatni);
    const katMos = tanlanganKategoriya === "barchasi" || m.kategoriya === tanlanganKategoriya;
    return nomMos && katMos;
  });

  // sort: nusxa olib saralash (asl massiv buzilmasligi uchun)
  natija = [...natija];
  if (saralashTuri === "vaqt-osish") {
    natija.sort((a, b) => a.oqishVaqti - b.oqishVaqti);
  } else if (saralashTuri === "vaqt-kamayish") {
    natija.sort((a, b) => b.oqishVaqti - a.oqishVaqti);
  } else if (saralashTuri === "nom-alifbo") {
    natija.sort((a, b) => a.nomi.localeCompare(b.nomi));
  }

  kartalarniChiqar(natija);
}

// Hodisalarni ulash
if (konteyner) {
  statistikaniChiqar();
  kartalarniChiqar(maqolalar);

  qidiruvInput.addEventListener("input", yangila);
  kategoriyaSelect.addEventListener("change", yangila);
  saralashSelect.addEventListener("change", yangila);
}