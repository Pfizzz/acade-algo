// take an array of numbers as input and return the minimum value in the array (smallest number)
// we need to make a compare function

function smallNum(array) { // 1
  console.log(array);
  array.sort(function (a, b) { // n
    return a - b;
  });
  console.log(array);
  return array[0];
}

console.log(smallNum([23, 2, 3]));
console.log(smallNum([45, 65, 78, 9, 34]));

// O(n);

// take a number as an input and return 'true' if it's even, 'false' if it's odd

function isEven(number) { // 1
  if (number % 2 === 0) { // 1
    return true;
  } else {
    return false;
  }
}

console.log(isEven(2));
console.log(isEven(3));
console.log(isEven(26));
console.log(isEven(301));

// this can be shortened to a one-liner:
// return number % 2 === 0;

// O(1);