// PRIMAILITY TEST:

// Determines whether an input number is a prime number

function isPrime(number) {
    for (let i = 2; i < number; i++){ // 1
        if (number % i === 0) { // n 
            return false; // 1
        }
    }
    return true; // 1
    
}


// best case : number = 1 OR number = 2 => O(1)  (constant time)
// average case: O(n) (we have to assume the worst case)
// worst case: number = 27,277 => O(n)

console.log(isPrime(2));
console.log(isPrime(9));