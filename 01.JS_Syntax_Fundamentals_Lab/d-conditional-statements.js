// Arithmetic operators

console.log(5 + 10) // addition operator 5
console.log(5 + '10') // concatenation operator 510
console.log(1 + 2 + '3') // 33
console.log('1' + 2 + 3) // 123

// division
console.log(9 / 2) //

// modulo operator
console.log(9 % 2) // 1

//Exponentiation
console.log(10 ** 2) // 100

// equality operators
let a = 20
let b = '20'

console.log(a == b) // equality operator, result: true, equality  with enabled coercion
console.log(a === b) // identity operator, result false equality disabled coercion
console.log(a != b) // inequality operator, result: false, inequality with enabled coercion
console.log(a !== b) // strict inequality operator, result: true, inequality without disabled coercion

// ternary operator
console.log(a > b ? 'a is greater than b' : 'b is greater than a')