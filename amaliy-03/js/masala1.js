// 1-masala. raqamlarYigindisi(n)
// Yechim: Son manfiy bo'lsa ham to'g'ri ishlashi uchun Math.abs bilan musbat qilamiz,
// satrga aylantirib, har bir raqamni siklda yig'indiga qo'shib chiqamiz.
function raqamlarYigindisi(n) {
  const musbatSatr = String(Math.abs(n));
  let yigindi = 0;

  for (let i = 0; i < musbatSatr.length; i++) {
    yigindi += Number(musbatSatr[i]);
  }

  return yigindi;
}

// Tekshiruvlar
console.log("--- 1-masala ---");
console.log(raqamlarYigindisi(4729));   // kutilgan: 22
console.log(raqamlarYigindisi(-305));   // kutilgan: 8
console.log(raqamlarYigindisi(12345));  // kutilgan: 15 (o'z misolim)
console.log(raqamlarYigindisi(0));      // kutilgan: 0 (chegaraviy holat)
