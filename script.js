let firstNumber = Number(prompt('Insira um número'))
let secondNumber = Number(prompt('Insira mais um número'))

let sum = firstNumber + secondNumber;
let sub = firstNumber - secondNumber;
let multi = firstNumber * secondNumber;
let division = firstNumber / secondNumber;
let rest = firstNumber % secondNumber;
let evenOrOdd = 'odd'
let equalOrDifferent = 'different'; 

if(sum % 2 === 0) {
    evenOrOdd = 'even'
}

if(firstNumber === secondNumber) {
    equalOrDifferent = 'equal'
}

let finalReturn = `The first number is: ${firstNumber}. The second number is: ${secondNumber}. The numbers you chose are ${equalOrDifferent}. 
The sum of both numbers is: ${sum}. It's an ${evenOrOdd} number.
The subtraction of the numbers is: ${sub}
Both numbers multiplied equals to: ${multi}
Both numbers divided equals to: ${division}
The rest of both numbers division is: ${rest}
 `

alert(finalReturn)