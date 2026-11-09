// 4-masala. sozlarSanogi(s)
// Yechim: Satrni kichik harfga keltirib so'zlarga ajratamiz (split).
// Obyektda har bir so'z nechtadan kelganini hisoblab chiqamiz.
function sozlarSanogi(s) {
  const natija = {};
  const tozalanganSatr = s.toLowerCase().trim();

  if (tozalanganSatr === "") {
    return natija;
  }

  const sozlar = tozalanganSatr.split(/\s+/);

  for (let i = 0; i < sozlar.length; i++) {
    const soz = sozlar[i];
    if (natija[soz]) {
      natija[soz] += 1;
    } else {
      natija[soz] = 1;
    }
  }

  return natija;
}

// Tekshiruvlar
console.log("--- 4-masala ---");
console.log(sozlarSanogi("olma nok Olma uzum nok olma")); // kutilgan: { olma: 3, nok: 2, uzum: 1 }
console.log(sozlarSanogi("salom dunyo salom"));           // kutilgan: { salom: 2, dunyo: 1 } (o'z misolim)
console.log(sozlarSanogi("kod"));                         // kutilgan: { kod: 1 } (bitta so'z)
console.log(sozlarSanogi(""));                            // kutilgan: {} (chegaraviy holat)
