// 2-masala. harfSanash(s, harf)
// Yechim: Katta-kichik harf farq qilmasligi uchun toLowerCase() qilamiz.
// Sikl bilan satrni aylanib, berilgan harfga teng kelganlarini sanaymiz.
function harfSanash(s, harf) {
  const kichikSatr = s.toLowerCase();
  const nishonHarf = harf.toLowerCase();
  let hisoblagich = 0;

  for (let i = 0; i < kichikSatr.length; i++) {
    if (kichikSatr[i] === nishonHarf) {
      hisoblagich++;
    }
  }

  return hisoblagich;
}

// Tekshiruvlar
console.log("--- 2-masala ---");
console.log(harfSanash("Assalomu alaykum", "a")); // kutilgan: 4
console.log(harfSanash("Kitob", "x"));            // kutilgan: 0
console.log(harfSanash("Urganch Davlat", "a"));   // kutilgan: 3 (o'z misolim)
console.log(harfSanash("", "a"));                // kutilgan: 0 (chegaraviy holat)
