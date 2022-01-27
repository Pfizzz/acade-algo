// write an algorithm that takes an array of numbers as input and calculates the sum of those numbers.

// function sumNumbers(numbers) {
//   let addNum = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     addNum += numbers[i];
//   }
//   return addNum;
// }

// THIS USING A FOR OF LOOP

function sumNumbers(numbers) {
  let result = 0; // runs 1 time

  for (const number of numbers) {
    // runs 1 time
    result += number; // runs 4 times => n
  }
  return result; // runs 1 times
}

// To calculate time complexity:
// T = 1 + 1 + 1 + n = 3 + n = 3 + 1*n
// find the fastest growing term
// T = 1*n
// remove coefficient
//  T = n
// O(n) ==> Linear Time Complexity

console.log(sumNumbers([1, 3, 10, 50])); // should yield 64.

// Just because we reduce our code to one line doesnt make the time complexity shorter. 
// Calling a reduce() method for example will give us linear time complexity.