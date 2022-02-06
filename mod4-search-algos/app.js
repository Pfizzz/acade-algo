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
console.log(linearSearch(array, 10));
console.log(linearSearch(array, 33));

// an array of strings would work the same way (numbers and strings are primitive values) but not objects