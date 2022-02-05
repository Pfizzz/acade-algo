// Determine whether an input number is a power of two or not
// Divide number and future division results by two until 1 is reached and check if remainder is always 0.

function isPowerofTwo(number){
    if (number < 1){
        return false;
    }
    let dividedNumber = number;
    while (dividedNumber !== 1) {
        console.log('executing');
        if (dividedNumber % 2 !== 0){
            return false;
        }
        dividedNumber = dividedNumber / 2;
    }
    return true;
}

console.log(isPowerofTwo(8)); // true;
console.log(isPowerofTwo(5)); // false
console.log(isPowerofTwo(20));
console.log(isPowerofTwo(16));
console.log(isPowerofTwo(1125899906842624));
console.log(isPowerofTwo(13));

// Best case = number 13 = O(n)
// it grows but it doesnt grow a lot. We can tell by checking the console.log for the while loop.
// worst case: 1,125,899,906,842,624 => executes only 50 times => O(log2 n) => simplify to O(log n)

// IMPROVED POWER OF TWO
//bitwise &
// a single &
//BINARY

// 4 => 0100
// 8 => 1000
// powers of two will never have a 1 in the same place lined up, so the & operator will return a 0. 

// & operator compares these numbers in binary notation and compares them.

// this is uncommon but a nifty trick

function isPowerofTwoTwo(number){
    if (number < 1) {
        return false;
    }
    return (number & (number - 1)) === 0;
}

console.log(isPowerofTwoTwo(8)); // true;
console.log(isPowerofTwoTwo(5)); // false
console.log(isPowerofTwoTwo(20));
console.log(isPowerofTwoTwo(16));
console.log(isPowerofTwoTwo(1125899906842624));
console.log(isPowerofTwoTwo(13));


// for of loop
const names = ["michael", "raphael", "gabriel"];
for (const n of names){
    
    console.log(n);
}

// for in loop
const symbols = {
    yt: "Youtube",
    fb: "Facebook",
    nf: "Netflix"
};

// gives us the keys
for(const n in symbols){
    console.log(n);
}

// gives us the values
for(const n in symbols){
    console.log(symbols[n]);
}

for(const n in symbols){
    console.log(`Key is ${n}, Value is ${symbols[n]}`)
}


// noodling around
const names2 = ['me', 'myself', 'irene'];

const upperName = names2.map(names2 => names2.toUpperCase());
console.log(upperName);