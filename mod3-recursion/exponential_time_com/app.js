// Exponential Time Complexity

// recusrion is not always best.
// recursive fibonacci

function fib(number) {
  // base case
  if (number === 0 || number === 1) {
    return 1;
  }
  return fib(number - 1) + fib(number - 2);
}

console.log(fib(4));
console.log(fib(5));

// this works, but we build up a tree of nested function calls. "recursvie tree"
// fib(4) has 9 function executions.
// fib (5) has 15 executions (and addition of 6 executions for a n inscrease of only 1)
// fib(6) has 25!

// TIME COMPLEXITY:
// the executions grow exponentially, they do not grow in a linear way
// it's not quadratic, the jump isn't as large in quadratic time
// EXPONENTIAL TIME
// O(2^n)

// for every function execution, we start two NEW function executions. That's the exponential growth.
// thus, the loop solution is better for fib.

// QUADRATIC TIME COMPLEXITY VS EXPONENTIAL TIME COMPLEXITY

// to check the complexity:
// add a counter variable

let counter = 0;
function fibCount(number) {
  counter++;
  // base case
  if (number === 0 || number === 1) {
    return 1;
  }
  return fibCount(number - 1) + fibCount(number - 2);
}

// dont forget to reset the counter
console.log(fibCount(5), `count: ${counter}`);
counter = 0;
console.log(fibCount(10), `count: ${counter}`);
counter = 0;
console.log(fibCount(20), `count: ${counter}`);
counter = 0;
console.log(fibCount(30), `count: ${counter}`);
counter = 0;
console.log(`reset, ${counter} `);

// quadractic time would be four times the operations. this is much more.
// cubic time with an n of 20 = 20*20*20 = 8000 but we get 21,891.
// for relatively slow increases of n, we get growth of operations that are way faster than quadratic or cubic time.
// thus O(2^n)

// you can eyeball of this.

// DYNAMIC PROGRAMMING
// Dynamic Programming combines Memoization (keeping some data around for the execution of something) and recursion.

// Recursion is great for repeated computations but can lead to duplicate work. This duplicate work leads to the exponential growth rate.
// Stored data (Memoization) avoids unnecessary recursive steps by storing data.
// intermediate results are stored and re used.

// DYNAMIC PROGRAMMING IN ACTION

// create a global storage. it will initially be empty but will populate

// add second argument

let counterTwo = 0;
function fibDyn(n, memo) {
    counterTwo++;
  // introduce result helper variable
  let result;
  // check to see if we already have an entry, if so, it skips tons of function executions.
  if (memo[n]){
      return memo[n];
  }
  if (n === 0 || n === 1) {
    result = 1;
  } else {
    result = fibDyn(n - 1, memo) + fibDyn(n - 2, memo);
  }
  // memo is a js object, so we can dynamically add properties.
  // use a variable in square bracket notation to name the key for the value
  memo[n] = result;
  return result;
}

// 1, 1, 3, 5, 8, 13
// pass empty object as second argument, this object will be populated as the recursive process runs to store the intermediate results.
console.log(fibDyn(5, {}));
console.log(`count: ${counterTwo}`);
counterTwo= 0;
console.log(fibDyn(10, {}));
console.log(`count: ${counterTwo}`);
counterTwo= 0;
console.log(fibDyn(6, {}));
console.log(`count: ${counterTwo}`);
counterTwo= 0;
console.log(fibDyn(30, {}));
console.log(`count: ${counterTwo}`);
// 59 vs almost 3 million!
counterTwo= 0;

// prints the sequence.
const memo={};
fibDyn(5, memo);
console.log(memo);
fibDyn(6, memo);
console.log(memo);

// the new time complexity = O(n); linear time complexity.
// for an increase in n of 1, we add 2 iterations. O(2n) is reduced to O(n)
// with skip entire branches using this technique.

// OR 

// USE THE 'BOTTOM-UP APPROACH' as an alternative (also has an O(n) )
function fibBot(n){
    const numbers = [1,1];
    for (let i = 2; i < n + 1; i++){
        numbers.push(numbers[i-2] + numbers[i-1]);
    }
    return numbers[n];
}

console.log(fibBot(5));

// builds the data all the way up to what we need. 