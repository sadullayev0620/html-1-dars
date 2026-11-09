// 5-masala. yangiKitoblar(kitoblar, yil)
// Yechim: Berilgan yildan katta yoki teng bo'lgan kitoblarni tanlab olib,
// chiqish yili bo'yicha saralaymiz va faqat nomlaridan iborat massiv qaytaramiz.
function yangiKitoblar(kitoblar, yil) {
  const tanlanganKitoblar = [];

  for (let i = 0; i < kitoblar.length; i++) {
    if (kitoblar[i].yil >= yil) {
      tanlanganKitoblar.push(kitoblar[i]);
    }
  }

  // Yili bo'yicha o'sish tartibida saralash
  tanlanganKitoblar.sort((a, b) => a.yil - b.yil);

  // Faqat kitob nomlarini ajratib olish
  const kitobNomlari = [];
  for (let i = 0; i < tanlanganKitoblar.length; i++) {
    kitobNomlari.push(tanlanganKitoblar[i].nomi);
  }

  return kitobNomlari;
}

// Tekshiruvlar
console.log("--- 5-masala ---");
const kitoblarRoyxati = [
  { nomi: "Clean Code", yil: 2008 },
  { nomi: "Eloquent JavaScript", yil: 2024 },
  { nomi: "Pro Git", yil: 2014 },
  { nomi: "Refactoring", yil: 1999 }
];

console.log(yangiKitoblar(kitoblarRoyxati, 2005)); // kutilgan: ["Clean Code", "Pro Git", "Eloquent JavaScript"]
console.log(yangiKitoblar(kitoblarRoyxati, 2015)); // kutilgan: ["Eloquent JavaScript"] (o'z misolim)
console.log(yangiKitoblar(kitoblarRoyxati, 2025)); // kutilgan: [] (chegaraviy: mos kitob yo'q)
console.log(yangiKitoblar([], 2020));              // kutilgan: [] (chegaraviy: bo'sh massiv)
