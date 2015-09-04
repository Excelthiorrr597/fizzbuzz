/**
 * PART 0
 *
 * Write a function that calculates the sum of all the numbers in an array
 */

function sumOfArray(arr){
    var sum = 0
    for (var i=0; i<arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

console.assert(sumOfArray([1, 2]) === 3);
console.assert(sumOfArray([]) === 0);
console.assert(sumOfArray([1, 2, 3]) === 6);
console.assert(sumOfArray([10, 9, 8]) === 27);

/**
 * PART 1
 *
 * Write a function that takes two numbers as
 * arguments and computes the sum of those two numbers.
 */

function sum(a, b){
    return a + b
}

console.assert(sum(8, 11) === 19);
console.assert(sum(4, 100) === 104);

/**
 * PART 2
 *
 * write a function that finds the Greatest Common Denominator of two numbers
 * - if no GCD exists, return 1
 */

function GCD(a, b){
    var maxFactor = 0
    for (var i=0; i<a; i++) {
        if (a%i===0 && b%i===0) {
            maxFactor = i
        }
    }
    return maxFactor
}

// function GCD(a, b) {
//     var aFax = []
//     var bFax = []
//     var comFax = []
//     for (var div = 1;div <= a; div++) {
//         if (a%div===0) {
//             aFax.push(div)
//         }
//     }
//     for (var div = 1; div <= b; div++) {
//         if (b%div===0) {
//             bFax.push(div)
//         }
//     }
//     for (var i = 0; i < aFax.length; i++) {
//         var aFact = aFax[i]
//         if (bFax.indexOf(aFact)!==-1) {
//             comFax.push(aFact)
//         }
//     }
//     console.log(comFax)
//     return Math.max(comFax)
// }

console.assert(GCD(5,1) === 1);
console.assert(GCD(15,3) === 3);
console.assert(GCD(15,5) === 5);
console.assert(GCD(50,20) === 10);
console.assert(GCD(20,50) === 10);

/**
 * PART 3
 *
 * write a function that prints out the Least Common Multiple of two numbers
 */

function LCM(a, b){
    if (a>b) {
    	var big = a
    	var small = b
    }
    else {
    	var big = b
    	var small = a
    }
    if (big===small) {
    	return big
    }
    else if (small===0) {
    	return big
    }
    else if (big%small===0) {
    	return big
    }
    else {
    	var total = big*small
    	return total
    }
}

console.assert(LCM(10,10) === 10)
console.assert(LCM(2,5) === 10)
console.assert(LCM(3,6) === 6)
console.assert(LCM(0,1) === 1)

/**
 * Part 4
 *
 * write a function the returns a FizzBuzz string for some number N (counting up from 1).
 * - for every number that isn't a multiple of 3 or 5, return a period "."
 * - for every number that is a multiple of 3 (but not 5), return "fizz"
 * - for every number that is a multiple of 5 (but not 3), return "buzz"
 * - for every number that is a multiple of 3 and 5, return "fizzbuzz"
 */

function fizzbuzz(N){
    var integ = 0;
    var result = ""
    while (integ < N) {
    	integ += 1;
    	if (integ%3!==0 && integ%5!==0) {
    		result += "."
    	} 
    	else if (integ%3===0 && integ%5!==0) {
    		result += "fizz"
    	}
    	else if (integ%3!==0 && integ%5===0) {
    		result += "buzz"
    	}
    	else {
    		result += "fizzbuzz"
    	}
    }
    return result
}

console.assert(fizzbuzz(1) === ".")
console.assert(fizzbuzz(2) === "..")
console.assert(fizzbuzz(3) === "..fizz")
console.assert(fizzbuzz(5) === "..fizz.buzz")
console.assert(fizzbuzz(10) === "..fizz.buzzfizz..fizzbuzz")