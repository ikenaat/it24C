let numOne = 55;
let numTwo = 90;
let string = "MADAM";

// Process
function showOperation(numOne, numTwo, operation) {
    let result;
    let operationUsed;

    switch (operation) {
        case 'Sum':
            result = numOne + numTwo;
            operationUsed = 'Sum';
            break;
        case 'Difference':
            result = numOne - numTwo;
            operationUsed = 'Difference';
            break;
        case 'Product':
            result = numOne * numTwo;
            operationUsed = 'Product';
            break;
        case 'Quotient':
            result = numTwo !== 0 ? numOne / numTwo : 'Error: Division by zero';
            operationUsed = 'Quotient';
            break;
        default:
            result = 'Error: Unknown operation';
            operationUsed = 'Unknown operation';
    }

    return `${operationUsed}: ${result}`;
}

function checkOddOrEven(num) {
    if (num % 2 === 0) {
        return `${num} is an EVEN NUMBER.`;
    } else {
        return `${num} is an ODD NUMBER.`;
    }
}

function checkPrime(num) {
    if (num <= 1) {
        return `${num} is neither prime nor composite.`;
    } else if (num === 2) {
        return `${num} is a prime number.`;
    } else if (num % 2 === 0) {
        return `${num} is not a prime number.`;
    } else {
        for (let i = 3; i * i <= num; i += 2) {
            if (num % i === 0) {
                return `${num} is not a prime number.`;
            }
        }
        return `${num} is a prime number.`;
    }
}

function checkPalindrome(string) {
    let cleanedString = string.toLowerCase(); 
    let len = cleanedString.length;
    for (let i = 0; i < len / 2; i++) {
        if (cleanedString[i] !== cleanedString[len - 1 - i]) {
            return `'${string}' is not a palindrome.`;
        }
    }
    return `'${string}' is a palindrome.`;
}

// Output
console.log(showOperation(numOne, numTwo, 'Sum')); 
console.log(showOperation(numOne, numTwo, 'Difference'));
console.log(showOperation(numOne, numTwo, 'Product')); 
console.log(showOperation(numOne, numTwo, 'Quotient')); 
console.log(checkOddOrEven(numOne));
console.log(checkOddOrEven(numTwo));
console.log(checkPrime(numOne));
console.log(checkPrime(numTwo));
console.log(checkPalindrome(string));