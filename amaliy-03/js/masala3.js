// 3-masala. yigindiVaKopaytma(arr)
// Yechim: Bitta sikl yordamida massivdagi barcha sonlarning yig'indisi
// va ko'paytmasini hisoblab, obyekt ko'rinishida qaytaramiz.
function yigindiVaKopaytma(arr) {
  if (arr.length === 0) {
    return { yigindi: 0, kopaytma: 0 };
  }

  let yigindi = 0;
  let kopaytma = 1;

  for (let i = 0; i < arr.length; i++) {
    yigindi += arr[i];
    kopaytma *= arr[i];
  }

  return { yigindi: yigindi, kopaytma: kopaytma };
}

// Tekshiruvlar
console.log("--- 3-masala ---");
console.log(yigindiVaKopaytma([1, 2, 3, 4])); // kutilgan: { yigindi: 10, kopaytma: 24 }
console.log(yigindiVaKopaytma([5]));          // kutilgan: { yigindi: 5, kopaytma: 5 }
console.log(yigindiVaKopaytma([2, 4, 6]));    // kutilgan: { yigindi: 12, kopaytma: 48 } (o'z misolim)
console.log(yigindiVaKopaytma([]));           // kutilgan: { yigindi: 0, kopaytma: 0 } (chegaraviy holat)
