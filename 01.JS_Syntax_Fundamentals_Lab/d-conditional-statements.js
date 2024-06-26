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

// if else statement

let number = 211;
if (number <= 20) {
    console.log('Number is less or equal to 20');
} else if (number < 30){
    console.log('Number is less than 30');
} else {
    console.log('Number is greater than 2 0');
}

// switch

let color = 'pink'
switch (color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue');
}
// Logical operators
console.log(!true); // Not operator, result: false
console.log(!!true); // Not operator, result: true

true && false // AND operator, result: false
true || false // OR operator, result: true

let aa = 3
let bb = -4
console.log(aa < bb && aa > 0) // AND operator, result: false
console.log(aa < bb || aa > 0) // OR operator, result: true

// Type of
console.log(typeof 5);
console.log(typeof 'pesho');
console.log(typeof true);
console.log(typeof 100001n);
console.log(typeof undefined);
console.log(typeof Symbol('test'));
console.log(typeof null);
console.log(typeof NaN);

// Truthy
console.log(Boolean('Pesho')); // convert any value to boolean, result: true
console.log(Boolean([])) // convert any value to boolean, result: true
console.log(Boolean({})) // convert any value to boolean, result: true

//Falsy
console.log(Boolean(0)); // convert any value to boolean, result: false
console.log(Boolean(NaN)); // convert any value to boolean, result: false
console.log(Boolean('')); // convert any value to boolean, result: false
console.log(Boolean(false)) ;// convert any value to boolean, result: false
console.log(Boolean(null));
console.log(Boolean(undefined));

