# Shaxsiy Blog — Dasturlash va Texnologiyalar (4-amaliy ish)

**Muallif:** Sardorbek Sadullayev (Urganch davlat universiteti, Dasturiy injiniring)  
**Fan:** Web dasturlashga kirish (5-semestr)

## 1. Loyiha mavzusi
Ushbu loyiha 2-amaliy ishda boshlangan **Shaxsiy Blog** veb-saytining davomi bo‘lib, sahifani JavaScript yordamida dinamik va interaktiv holatga keltirishga qaratilgan[cite: 1]. Loyihada dasturlash, frontend, backend va ma'lumotlar bazalariga oid 10 ta maqoladan iborat katalog yaratilgan[cite: 1].

## 2. Qo'shilgan imkoniyatlar ro'yxati
* **Dinamik kontent (`js/data.js`, `js/katalog.js`):** Maqola kartalari HTML-da qo‘lda yozilmasdan, JavaScript massividan `document.createElement` va `textContent` orqali xavfsiz (XSS-siz) generatsiya qilinadi[cite: 1, 2].
* **Statistika paneli (`js/katalog.js`):** Jami maqolalar soni, o‘rtacha o‘qish vaqti va eng uzun maqola nomi avtomatik hisoblab chiqariladi[cite: 1].
* **Jonli qidiruv, filtr va saralash (`js/katalog.js`):** Maqola nomi bo‘yicha real vaqtda qidirish (`input`), kategoriya bo‘yicha filtrlash (`change`) hamda o‘qish vaqti va alifbo bo‘yicha saralash birgalikda ishlaydi[cite: 2].
* **Modal oyna va Event Delegation (`js/ui.js`):** «Batafsil» tugmasi bosilganda maqola haqida to‘liq ma'lumot beruvchi modal oyna ochiladi (uni `×` tugmasi, fon ustiga bosish yoki `Escape` tugmasi bilan yopish mumkin)[cite: 2]. Hodisa har bir kartaga emas, bitta umumiy ota konteynerga biriktirilgan[cite: 3].
* **Forma tekshiruvi (`aloqa.html`, `js/ui.js`):** Foydalanuvchi ma'lumotlari (ism, email, `+998XXXXXXXXX` telefon raqami va xabar uzunligi) tekshiriladi va xatolar har bir maydon ostida ko‘rsatiladi[cite: 3].
* **Tungi rejim (`js/ui.js`):** Sayt mavzusini kunduzgi va tungi rejimga o‘tkazish hamda tanlovni `localStorage` da saqlab qolish imkoniyati[cite: 3].

## 3. Ishlatilgan massiv metodlari va ularning o'rni
* **`reduce()`** — `js/katalog.js` faylida barcha maqolalarning umumiy o‘qish vaqtini qo‘shib o‘rtacha qiymatni topishda hamda eng katta o‘qish vaqtini aniqlashda ishlatildi[cite: 1].
* **`find()`** — `js/katalog.js` faylida eng uzun maqola obyektini topishda va `js/ui.js` faylida «Batafsil» tugmasi bosilganda `id` bo‘yicha kerakli maqolani qidirib topishda ishlatildi[cite: 1, 2].
* **`filter()`** — `js/katalog.js` faylida qidiruv matni va tanlangan kategoriya bo‘yicha mos keluvchi maqolalarni saralab olishda ishlatildi[cite: 1, 2].
* **`sort()`** — `js/katalog.js` faylida maqolalarni o‘qish vaqti (o‘sish/kamayish) hamda nomi bo‘yicha alifbo tartibida joylashtirishda ishlatildi[cite: 1, 2].
* **`map()`** — `js/katalog.js` va `js/ui.js` fayllarida har bir maqolaning `teglar` massividagi so‘zlar oldiga `#` belgisini qo‘shib formatlashda ishlatildi[cite: 1].