// function isPrime(num) {
//   if (num < 2) {
//     return false;
//   }
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// function reduceArray(Arr) {
//   let result = [];
//   let currentCount = 0;
//   let count = 0;
//   for (let i of Arr) {
//     if (isPrime(i)) {
//       currentCount += i;
//     } else {
//       if (currentCount > 0) {
//         result.push(currentCount);
//         count += isPrime(i) ? 1 : 0;
//         currentCount = 0;
//       }
//       result.push(i);
//     }
//   }
//   if (currentCount > 0) {
//     result.push(currentCount);
//     count += isPrime(i) ? 1 : 0;
//   }
//   return { newArray: result, count: count };
// }
// const A = [5, 2, 6, 3, 7, 11, 20];
// const N = 7;
// const result = reduceArray(A);
// console.log(result.newArray);
// console.log(result.count);
//----------------------------------------------------------------
function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
function reduceArray(arr) {
  let totalSum = 0;
  let count = 0;
  let result = [];
  for (let i of arr) {
    if (isPrime(i)) {
      totalSum += i;
    } else {
      if (totalSum > 0) {
        result.push(totalSum);
        count += isPrime(i) ? 1 : 0;
        totalSum = 0;
      }
      result.push(i);
    }
  }
  if (totalSum > 0) {
    result.push(totalSum);
    count += isPrime(i) ? 1 : 0;
  }
  return { count: count, result: result };
}

const a = [3, 2, 6, 6, 2, 2, 4];
const b = reduceArray(a);
console.log(b.count);
console.log(b.result);
