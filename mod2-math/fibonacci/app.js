// return nth element in the fibonacci sequence

function fib(n) {
  // start this with the first two elements of the fibo sequence in an array.
  let numbers = [1, 1];
  // set i to 2 because we want to start adding at the 2 index, not before.
  // n + 1 because we want to stop at n, not iterate any further.
  for (let i = 2; i < n + 1; i++) {
    numbers.push(numbers[i - 2] + numbers[i - 1]);
  }
  // return the number at the index we are searching for
  return numbers[n];
}
console.log(fib(4));


// FIBO TIME COMPLEXITY:

// linear O(n)