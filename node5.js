// // Function to calculate factorial of a number
// function factorial(n) {
//     if (n < 0) {
//         return -1; // Factorial for negative numbers is not defined
//     }
//     if (n === 0) {
//         return 1; // Factorial of 0 is 1
//     }
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }

module.exports = fibonacci;
function fibonacci(n) {
    if (n <= 0) {
        return [];
    }
    if (n === 1) {
        return [0];
    }

    let arr = [0, 1];
    for (let i = 2; i < n; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }
    return arr;
}


// // Export the factorial function
// module.exports = factorial;
