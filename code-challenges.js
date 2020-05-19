// ASSESSMENT 2: Coding Practical Questions

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
// Use the test variables provided.

var num1 = 15
// Expected output: "15 is divisible by three"

var num2 = 0
// Expected output: "0 is divisible by three"

var num3 = -7
// Expected output: "-7 is not divisble by three"

// create the function that takes a number as argument
const divisibleByThree = (num) => {
    // condional that checks if it is divisible by 3
    // return whether num is divisible by three or not
   return (num % 3 === 0 ? `${num} is divisible by three` : `${num} is not divisible by three`)
}
// log it to the console to test
 console.log(divisibleByThree(num3));
 
// --------------------2) Create a function that takes in the randomNouns variable and returns an array with all the words capitalized.

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]


// write a function that takes in an array as an argument
// use .map to iterate through the array and 
// inside the map we will use the charAt and to upper case method to get the first character and capitalize it
// add it to the rest of the letters that were split using the slice method

// return and log to console

const firstLetterCapitalized = (arry) => {
    return arry.map(value => {
        return value.charAt(0).toUpperCase() + value.slice(1)
    })
}

console.log(firstLetterCapitalized(randomNouns));


// --------------------3) Create a function that takes in the mixedDataArray array and returns an array with ONLY NUMBERS sorted from least to greatest.

var mixedDataArray = [true, 8, "hello", 90, -8, null, 0, 46, 59, 107, "hey!"]
// Expected output: [-8, 0, 8, 46, 59, 90, 107]


// create a funciton that takes in an array 
// use a filter method and filter out the non numbers 
// use the sort method to sort from least to greatest

const numbersOnly = (arry) => {
    return arry.filter(value => typeof value === "number").sort((a,b)=>a-b)
}

console.log(numbersOnly(mixedDataArray));


// --------------------4) Create a function that takes in a string and logs the index of the first vowel.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "throw"
// Expected output: 3


//create a function that passes in a string as an argurment
// split the string into an array of letters and lowercase them
// iterate through the array and return the index of the vowel using the find Index method

const firstVowelFinder = (str) => {
    let stringsToArray = str.toLowerCase().split('')
    return stringsToArray.findIndex(value => {
         
    return(value == 'a' || value == 'e' || value == 'i' || value == 'o' || value == 'u')
    })
}


console.log(firstVowelFinder(vowelTester2));


// --------------------5) Create a function that takes three arguments - two numbers and a mathematical operation (+, -, *, /) and performs the given calculation. If the input tries to divide by 0, return: "Can't divide by 0!"

// create the function
// order the parameters in a way that the operation will work
// return can't divide by zero if tries to divide by zero

const calculator = (num1, op, num2) => {
    if(num1 === 0 || num2 === 0 && op === "/") {
        return "Can't divide by zero"
    } else if (op === "+"){
        return num1 + num2
    } else if (op === "-"){
        return num1 - num2
    } else if (op === "*"){
        return num1 * num2
    } else if (op === "/"){
        return num1 / num2
    } else {
        return "error"
    }
}



// Uncomment and use the following console logs to test your function
console.log(calculator(3, "*", 9))
// Expected output: 27

console.log(calculator(16, "+", 3))
// Expected output: 19

console.log(calculator(89, "/", 0))
// Expected output: "Can't divide by 0!"
