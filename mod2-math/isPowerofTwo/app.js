// Determine whether an input number is a power of two or not
// Divide number and future division results by two until 1 is reached and check if remainder is always 0.

function isPowerofTwo(number){
    if (number < 1){
        return false;
    }
    let dividedNumber = number;
    while (dividedNumber !== 1) {
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
console.log(isPowerofTwo(13));

// for of loop
const names = ["michael", "raphael", "gabriel"];

for(const angels of names) {
    console.log(angels);
}

// for in loop
const symbols = {
    yt: "Youtube",
    fb: "Facebook",
    nf: "Netflix"
};

for(const n in symbols){
    console.log(n);
}