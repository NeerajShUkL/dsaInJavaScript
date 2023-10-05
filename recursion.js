// this is fibonacci sequence in recursive

// find n^th element in fibonacci sequence

function recursiveFibonacci(n) {
    if(n < 2) {
        return n;
    }
    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2);
}


console.log(recursiveFibonacci(2)); // 1
console.log(recursiveFibonacci(3)); // 2
console.log(recursiveFibonacci(6)); // 8

// Big-O = O(2^n)


// recursive factorial of a number

function recursiveFactorial(n) {
    if(n === 0) {
        return 1
    }
    return n* recursiveFactorial(n-1)
}


console.log(recursiveFactorial(2)); // 2
console.log(recursiveFactorial(3)); // 6
console.log(recursiveFactorial(5)); // 120

// Big-O = O(n)