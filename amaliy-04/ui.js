// js/ui.js

// ==========================================
// 1. TUNGI REJIM (LocalStorage bilan)
// ==========================================
const themeBtn = document.getElementById("theme-toggle");

function rejimniQollash(rejim) {
  if (rejim === "dark") {
    document.body.classList.add("dark-mode");
    if (themeBtn) themeBtn.textContent = "☀️ Kunduzgi rejim";
  } else {
    document.body.classList.remove("dark-mode");
    if (themeBtn) themeBtn.textContent = "🌙 Tungi rejim";
  }
}

// Sahifa yuklanganda saqlangan rejimni o'qish
const saqlanganRejim = localStorage.getItem("blog-theme") || "light";
rejimniQollash(saqlanganRejim);

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    const hozirgi = document.body.classList.contains("dark-mode") ? "light" : "dark";
    localStorage.setItem("blog-theme", hozirgi);
    rejimniQollash(hozirgi);
  });
}

// ==========================================
// 2. MODAL OYNA VA EVENT DELEGATION
// ==========================================
const maqolalarKonteyner = document.getElementById("maqolalar-konteyner");
const modalOyna = document.getElementById("modal-oyna");
const modalYopish = document.getElementById("modal-yopish");

function modalniOch(id) {
  // find metodi bilan tanlangan maqolani topish
  const tanlangan = maqolalar.find(m => m.id === Number(id));
  if (!tanlangan) return;

  document.getElementById("modal-rasm").src = tanlangan.rasm;
  document.getElementById("modal-rasm").alt = tanlangan.nomi;
  document.getElementById("modal-kategoriya").textContent = tanlangan.kategoriya;
  document.getElementById("modal-sarlavha").textContent = tanlangan.nomi;
  document.getElementById("modal-vaqt").textContent = `O'qish vaqti: ${tanlangan.oqishVaqti} daqiqa`;
  document.getElementById("modal-matn").textContent = tanlangan.matn;

  const teglarDiv = document.getElementById("modal-teglar");
  teglarDiv.textContent = "Teglar: " + tanlangan.teglar.map(t => `#${t}`).join(", ");

  modalOyna.hidden = false;
}

function modalniYop() {
  if (modalOyna) modalOyna.hidden = true;
}

// Event delegation: bitta ota konteynerga tinglovchi qo'yiladi
if (maqolalarKonteyner && modalOyna) {
  maqolalarKonteyner.addEventListener("click", (e) => {
    const tugma = e.target.closest(".btn-detail");
    if (!tugma) return;

    const karta = tugma.closest(".card");
    if (karta) {
      modalniOch(karta.dataset.id);
    }
  });

  // X tugmasi bosilganda yopish
  modalYopish.addEventListener("click", modalniYop);

  // Qora fon ustiga bosilganda yopish
  modalOyna.addEventListener("click", (e) => {
    if (e.target === modalOyna) {
      modalniYop();
    }
  });

  // Escape tugmasi bosilganda yopish
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modalOyna.hidden) {
      modalniYop();
    }
  });
}

// ==========================================
// 3. ALOQA FORMASI TEKSHIRUVI (aloqa.html)
// ==========================================
const aloqaForm = document.getElementById("aloqa-form");

if (aloqaForm) {
  aloqaForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Sahifa yangilanishini to'xtatish

    const ism = document.getElementById("ism");
    const email = document.getElementById("email");
    const tel = document.getElementById("tel");
    const xabar = document.getElementById("xabar");
    const rozilik = document.getElementById("rozilik");
    const muvaffaqiyat = document.getElementById("form-success");

    // Oldingi xatolarni tozalash
    document.querySelectorAll(".error-text").forEach(el => el.textContent = "");
    muvaffaqiyat.textContent = "";

    let xatoBor = false;

    // 1. Ism tekshiruvi
    if (ism.value.trim().length < 3) {
      document.getElementById("err-ism").textContent = "Ism kamida 3 ta belgidan iborat bo'lishi kerak.";
      xatoBor = true;
    }

    // 2. Email formati tekshiruvi
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      document.getElementById("err-email").textContent = "To'g'ri email manzilini kiriting (masalan: ali@mail.uz).";
      xatoBor = true;
    }

    // 3. Telefon (+998XXXXXXXXX) tekshiruvi
    const telRegex = /^\+998[0-9]{9}$/;
    if (!telRegex.test(tel.value.trim())) {
      document.getElementById("err-tel").textContent = "Telefon raqami +998901234567 formatida bo'lishi shart.";
      xatoBor = true;
    }

    // 4. Xabar uzunligi tekshiruvi
    if (xabar.value.trim().length < 10) {
      document.getElementById("err-xabar").textContent = "Xabar matni kamida 10 ta belgidan iborat bo'lsin.";
      xatoBor = true;
    }

    // 5. Rozilik checkbox tekshiruvi
    if (rozilik && !rozilik.checked) {
      document.getElementById("err-rozilik").textContent = "Ma'lumotlar to'g'riligini tasdiqlashingiz shart.";
      xatoBor = true;
    }

    // Hammasi to'g'ri bo'lsa
    if (!xatoBor) {
      muvaffaqiyat.textContent = "✅ Murojaatingiz muvaffaqiyatli yuborildi! Tez orada javob beramiz.";
      aloqaForm.reset();
    }
  });
}