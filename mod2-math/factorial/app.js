// Goal: calculate factorial of a numer
// FACTORIAL = multiplication with the umber -1, with that number -1, etc

// fact(3);  3 * 2 * 1 = 6
// fact(5); 5 * 4 * 3 * 2 * 1 = 120

// Algo needs to do one thing:
// (1) Go through all smaller numbers and multiply them with each other (and with the input numbers)

// here is mine, this works
function fact(number){
    let factNum = number;
    number = number - 1;
 while (number !== 0){
    factNum = factNum * number;
    number--;
 }
 return factNum;
}

console.log(fact(3));
console.log(fact(5));
console.log(fact(10));

// instructor's code:

function factFun(number) {
    let result = 1;
    for(let i = 2; i <= number; i++){
        result = result * i;
    }
    return result;
}
// O(n) = linear time complexity

console.log(factFun(3));
console.log(factFun(4));
console.log(factFun(5));