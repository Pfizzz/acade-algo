// recursion = the function will call itself from within the function
// combine with a 'case case'; an exit condition

function factFun(number){
    if (number === 1) { //1
        return 1; //1 
    }
    return number * factFun(number - 1); //1 and over and over

}
// in every function call => O(1)
// but we trigger multiple function calls => n function calls
// T = n * O(1)  => O(n)
// T = O(n)

console.log(factFun(3));
console.log(factFun(4));
console.log(factFun(5));