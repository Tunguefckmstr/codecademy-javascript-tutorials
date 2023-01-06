// Constant variables are immutable
const myAge = 30;

// Using 'let' instead of 'const' to keep the age mutable
let earlyYears = 2;
earlyYears *= 10.5;
console.log(`Early years: ${earlyYears}`);
A
// Because myAge is a constant, it cannot be reassigned. So cannot use the assignment operators on it.
let laterYears = myAge - 2
console.log(`Later years: ${laterYears}`);

laterYears *= 4;

//
let myAgeInDogYears = earlyYears + laterYears; 
console.log(`My age in dog years: ${myAgeInDogYears}`);

const myName = 'TEVIN'.toLowerCase();
console.log(myName);

console.log(`My name is ${myName}, I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);