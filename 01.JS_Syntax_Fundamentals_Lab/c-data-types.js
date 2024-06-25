//Number

let integerNumber = 10;
let decimalNumber = 3.14;
let negativeIntegerNumber = -10;
let maxPreciseNumber = Number.MAX_SAFE_INTEGER;
let maxDoublePrecisionNumber = Number.MAX_VALUE;
let notANumber = NaN;
let infinity = Infinity;
let negativeInfinity = -Infinity;

//String
let singleQuoteLiteral = 'single quote';
let doubleQuoteLiteral = "double quote";
let backTickedString = `back tick`;

// Undefined
let undf = undefined;

// Null
let empty = null;

// BigInt
let bigInt = BigInt('1234567890123456789012345678901234567890');
console.log(bigInt)
let bigInt2 = 1234567890123456789012345678901234567890n;
console.log(bigInt2)

// Cast string to number
let intNumber = parseInt('10')
let floatNumber = parseFloat('3.14')
let parseNumber = Number('100000')
console.log(intNumber)
console.log(floatNumber)
console.log(parseNumber)
console.log( typeof intNumber)

// NaN aka not a number
console.log(Number('not a number'))
