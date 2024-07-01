function solve (firstNumber , secondNumber, operator) {
    let result;
    switch (operator) {
        case '+':
            result = (firstNumber + secondNumber);
            break;
        case '-':
            result = (firstNumber - secondNumber);
            break;
        case '*':
            result = (firstNumber * secondNumber);
            break;
        case '/':
            result = (firstNumber / secondNumber);
            break;
        case '%':
            result = (firstNumber % secondNumber);
            break;
        case '**':
            result = (firstNumber ** secondNumber);
            break;

    }
}
solve (5 , 6 ,'+' )

function hackySolve (firstNumber , secondNumber, operator) {
    let expression = `${firstNumber} ${operator} ${secondNumber}`;
    console.log(eval(expression));
}
hackySolve (5 , 6 ,'+' )