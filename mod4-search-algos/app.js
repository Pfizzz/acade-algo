// SEARCH ALGORITHMS

// Linear Search

// Works on ordered and unordered lists and checks all items until it finds the element your searching.
// Goes through the array, step by step, and stops ONCE it finds the value it was looking for and returns that value or index.

// arguments = array of data and the element you are looking for.
function linearSearch(array, element) {
  let index = 0;
  for (const item of array) {
    if (item == element) {
      return index;
    }
    index++;
  }
}

const array = [5, 3, 10, -10, 33, 51];

// return the position of that value.
console.log(linearSearch(array, 10)); // prints 2
console.log(linearSearch(array, 33)); // prints 4

// my attempt with a for loop:

const array2 = [1, 5, 93, 14, 7, 23];

function linSearch(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      return i;
    }
  }
}

console.log(linSearch(array2, 14)); // prints 3
console.log(linSearch(array2, 23)); // prints 5

// an array of strings would work the same way (numbers and strings are primitive values) but not objects (which are reference values)

// if we know the object with have a name key

const players = [
  { name: "Jill", score: 100 },
  { name: "Michael", score: 100 },
  { name: "Fred", score: 90 },
];
function linearSearchObj(array, element) {
  let index = 0;
  for (const item of array) {
    if (
      typeof element === "object" &&
      element !== null &&
      element.name === item.name
    ) {
      return index;
    }
    if (item == element) {
      return index;
    }
    index++;
  }
}

console.log(linearSearchObj(players, { name: "Michael" })); // prints 1

// now to make this more flexible by adding a third camparator parameter.
// comparison function returns true or false
// comparitor is called from within the function to make the function more flexible, but our call needs to be adjusted.

const players2 = [
  { name: "Jill", score: 100 },
  { name: "Michael", score: 100 },
  { name: "Fred", score: 90 },
];
function linearSearchComp(array, element, comparatorFn) {
  let index = 0;
  for (const item of array) {
    if (
      typeof element === "object" &&
      element !== null &&
      comparatorFn(element, item)
    ) {
      return index;
    }
    if (item == element) {
      return index;
    }
    index++;
  }
}

// notice the third part
console.log(
  linearSearchComp(players2, { name: "Michael" }, function (el, it) {
    return el.name === it.name;
  })
); // prints 1

// TIME COMPLEXITY:

// BEST CASE: The item we are searching for the first item in the list. O(1)
// AVERAGE CASE: Random order, we don't know where the item is O(n).
// WORST CASE: The item is the last item in the list. O(n).

// FIND METHOD
// arrays have the find() method and the findIndex() methods.

// The find() method returns the value of the first element that passes a test.
// The find() method executes a function for each array element.
// The find() method retuns undefined if no elements are found.
// The find() method does not execute the function for empty elements.
// The find() method does not change the original array.
// FInd the value of the first element with a value over 18:

const ages = [3, 20, 18, 20];

function checkAge(age) {
    return age > 18;
}

console.log(ages.find(checkAge)); // runs the checkAge function on each element in ages, prints 20, 20 is greater than 18.
console.log(ages.findIndex(checkAge)); // prints 1, 20 is the first elements over 18 in the array.