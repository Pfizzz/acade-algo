// SEARCH ALGORITHMS

// Linear Search

// Works on ordered and unordered lists and checks all items until it finds the element your searching.
// Goes through the array, step by step, and stops ONCE it finds the value it was looking for and returns that value or index.


// arguments = array of data and the element you are looking for.
function linearSearch(array, element){
    let index = 0;
    for(const item of array) {
        if(item == element){
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

function linSearch(array, element){
    for(let i = 0; i < array.length; i++){
        if(array[i] === element){
            return i;
        }
    }
}

console.log(linSearch(array2, 14)); // prints 3
console.log(linSearch(array2, 23)); // prints 5

// an array of strings would work the same way (numbers and strings are primitive values) but not objects (which are reference values)

// if we know the object with have a name key

const players = [{ name: 'Jill', score: 100 }, { name: 'Michael', score: 100 }, { name: 'Fred', score: 90 }];
function linearSearchObj(array, element){
    let index = 0;
    for(const item of array) {
        if(
        typeof element === 'object' &&
        element !== null &&
        element.name === item.name){
            return index;
        }
        if(item == element){
           return index;
        }
        index++;
    }
}

console.log(linearSearchObj(players, { name: 'Michael' })); // prints 1

// TIME COMPLEXITY:
