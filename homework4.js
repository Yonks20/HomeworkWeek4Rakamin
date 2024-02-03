//membuat fungsi untuk nilai random dari 1 sampai 50
function RandomArray(length) {
  let randomArray = [];
  for (let i = 0; i < length; i++) {
    randomArray.push(Math.floor(Math.random() * 50) + 1);
  }
  return randomArray;
}

//memecah menjadi 2 arary index genap dan ganjil
function splitArrayByIndex(arr) {
  let evenArray = [];
  let oddArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      evenArray.push(arr[i]);
    } else {
      oddArray.push(arr[i]);
    }
  }
  return [evenArray, oddArray];
}

//membuat fungsi calculateMin, max, total, dan juga average untuk menghitung nilai minimum, maximum, total dan juga rata rata dari array
function calculateMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

function calculateMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

function calculateTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

function calculateAverage(arr) {
  let total = calculateTotal(arr);
  return total / arr.length;
}

//membuat array random dengan panjang 100 dengan membuat variabel randomArray yang sudah dibuat sebelumnya
let randomArray = RandomArray(100);

//buat variabel untuk menampung array dan akan di pecah menggunakan fungsi splitArrayByIndex yaitu berasal dari variabel sebelumnya
let [evenArray, oddArray] = splitArrayByIndex(randomArray);

//hitung nilai minimum, maksimum, total dan rata rata  dari array random yang telah dibuat
let evenMin = calculateMin(evenArray);
let evenMax = calculateMax(evenArray);
let evenTotal = calculateTotal(evenArray);
let evenAverage = calculateAverage(evenArray);

let oddMin = calculateMin(oddArray);
let oddMax = calculateMax(oddArray);
let oddTotal = calculateTotal(oddArray);
let oddAverage = calculateAverage(oddArray);

//membandingkan nilai array ganjil dan genap dan disimpan di variabel comparasionResult
let comparisonResult = {
  min: evenMin > oddMin ? "Min lebih besar pada array genap" : "Min lebih besar pada array ganjil",
  max: evenMax > oddMax ? "Max lebih besar pada array genap" : "Max lebih besar pada array ganjil",
  total: evenTotal === oddTotal ? "Total memiliki nilai yang sama" : "Total memiliki nilai yang berbeda",
  average: evenAverage > oddAverage ? "Rata-rata lebih besar pada array genap" : "Rata-rata lebih besar pada array ganjil",
};

//tampilkan hasil dari array random dengan indeks ganjil dan genap
console.log("Array dengan jumlah index 100:", randomArray);
console.log("Array genap dengan jumlah index 50:", evenArray);
console.log("Array ganjil dengan jumlah index 50:", oddArray);

console.log("\nMin, Max, Total, Rata-rata pada array genap:");
console.log("Min:", evenMin);
console.log("Max:", evenMax);
console.log("Total:", evenTotal);
console.log("Rata-rata:", evenAverage);

console.log("\nMin, Max, Total, Rata-rata pada array ganjil:");
console.log("Min:", oddMin);
console.log("Max:", oddMax);
console.log("Total:", oddTotal);
console.log("Rata-rata:", oddAverage);

console.log("\nPerbandingan nilai min, max, total, dan rata-rata:");
console.log(comparisonResult);
