// 1-------------------------------
// function numberToString(num) {
//   return num.toString();
// }

// console.log(numberToString(123)); // "123"
// console.log(numberToString(999)); // "999"
// console.log(numberToString(-100)); // "-100"
// 2----------------------------
// function solution(str) {
//   return str.split("").reverse().join("");
// }
// const world = "salom";
// const word = "salom";
// const reversedWorld = solution(world);
// const reversedWord = solution(word);

// console.log(reversedWorld);
// console.log(reversedWord);
// 3-----------------------------
// function makeNegative(num) {
//     if (num >= 0) {
//       return -num;
//     } else {
//       return num;
//     }
//   }

//   console.log(makeNegative(5));   // -5 ga aylanadi
//   console.log(makeNegative(-3));  // -3 bo'lib qoladi
// 4----------------------------
// function doubleInteger(num) {
//   return num * 2;
// }
// console.log(doubleInteger(5));
// 5-----------------------------------
// function highAndLow(numbers) {
//   const numArray = numbers.split(" ").map(Number);
//   const highest = Math.max.apply(null, numArray);
//   const lowest = Math.min.apply(null, numArray);
//   const result = `${highest} ${lowest}`;
//   return result;
// }
// const result1 = highAndLow("1 2 3 4 5");
// const result2 = highAndLow("1 2 -3 4 5");
// const result3 = highAndLow("1 9 3 4 -5");
// console.log(result1); // "5 1"
// console.log(result2); // "5 -3"
// console.log(result3); // "9 -5"
// 6---------------------------------
// function minMax(arr) {
//   if (arr.length === 0) {
//     return []; // Agar massiv bo'sh bo'lsa, bo'sh massiv qaytaradi
//   }

//   const min = Math.min(...arr);
//   const max = Math.max(...arr);

//   return [min, max];
// }

// console.log(minMax([1, 2, 3, 4, 5])); // [1, 5]
// console.log(minMax([2334454, 5])); // [5, 2334454]
// console.log(minMax([1])); // [1, 1]
// 7----------------------------------
// function removeSmallest(numbers) {
//   if (numbers.length === 0) return [];
//   const minRating = Math.min(...numbers);
//   const index = numbers.indexOf(minRating);
//   if (index !== -1) {
//     numbers.splice(index, 1);
//   }
//   return numbers;
// }
// const test1 = [1, 2, 3, 4, 5];
// const test2 = [5, 3, 2, 1, 4];
// const test3 = [2, 2, 1, 2, 1];
// const result1 = removeSmallest(test1);
// const result2 = removeSmallest(test2);
// const result3 = removeSmallest(test3);
// console.log("Test 1 natija:", result1);
// 8--------------------------------------
// function createPhoneNumber(numbers) {
//     if (numbers.length !== 10) {
//       throw new Error('Array 10 ta sonni o‘z ichiga olishi kerak.');
//     }
//         return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
//   }
//     console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // => (123) 456-7890
// 9------------------------------------
// function minimum(a, x) {
//   const remainder = a % x;
//   const addToNextMultiple = (x - remainder) % x;
//   const subtractToPreviousMultiple = remainder;
//   return Math.min(addToNextMultiple, subtractToPreviousMultiple);
// }
// console.log(minimum(10, 6));

// 10-------------------------------

// function multipleOfIndex(array) {
//   return array.filter((value, index) =>
//     index === 0 ? value === 0 : value % index === 0
//   );
// }

// console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]));
// console.log(multipleOfIndex([68, -1, 1, -7, 10, 10]));
// console.log(
//   multipleOfIndex([
//     -56, -85, 72, -26, -14, 76, -27, 72, 35, -21, -67, 87, 0, 21, 59, 27, -92,
//     68,
//   ])
// );

// 11----------------------------------------------
// function opposite(number) {
//   if (opposite <= 0) {
//     return number;
//   } else {
//     return -number;
//   }
// }
// console.log(opposite(-5));
// 12-----------------------------
// function makeNegative(num) {
//   if (makeNegative < 0) {
//     return num;
//   } else {
//     return -num;
//   }
// }
// console.log(makeNegative(-9));


