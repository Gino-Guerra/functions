function divide(num1, num2){
    const result = num1 / num2 
    const result2 = num1 + " ÷ " + num2 + " = " + result
    return result2
}

function remainder(num1, num2){
    const sum = num1 % num2
    return sum
}

function square(num1){
    const answer = num1 ** 2
    return answer
}

function drinkingAge(num1){
    if(21 <= num1){
    
   const wow = "Have fun"
return wow
    }
    else {
const bow = "please come back after you turn 21"
   return bow
    }
}

console.log(divide(20, 3))
console.log(remainder(20, 3))
console.log(square(20))
console.log(drinkingAge(21))