// variable declaration
let age = 20;
let firstName = 'Gosho';
let isMale = true;

console.log(age);
console.log(firstName);
console.log(isMale);


// basic solve function
function solve (num1, num2) {
    console.log(num1 + num2);

}
// execute function
solve(1,2);

// print on the console
console.log('My name is, ' + firstName + '!');
console.log(`My name is, ${firstName}!`);

// fix numbers
let num1 = 0.1;
let num2 = 0.2;
console.log(num1 + num2);

let num3 = 3;
let num4 = 3.14;
console.log(num3.toFixed(2));
console.log(num4.toFixed(2));

// using const
const lastName = 'Rachev';

// Block scope
if (true) {
    let schoolName = 'SoftUni'; // variable has block scope
    console.log(schoolName);
}
// console.log(schoolName); // throws an error

// Outer block scope
if (true) {
    let outerVariable = 100; // variable has block scope
    if (true) {
        let innerVariable = 200; // variable has block scope
        console.log(outerVariable)
    }
    console.log(outerVariable);

    // console.log(innerVariable); // throws an error

}

