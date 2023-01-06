// Declaring temperature in Kelvin is 293
const kelvin = 0
console.log(`Kelvin is: ${kelvin}`);

// Converting kelvin to celsius
const celsius = kelvin - 273
console.log(`Celsius is: ${celsius}`);

//Coverting Celsius to fahrenheit
const fahrenheit = celsius * (9 / 5) + 32
console.log(`Fahrenheit is: ${fahrenheit}`);

//Round down the Fahrenheit result
const floorFahrenheit = Math.floor(fahrenheit);
console.log(`Floored fahrenheit: ${floorFahrenheit}`);

//Console.log temperature in Fahrenheit with string interpolation
console.log(`The temperature is ${floorFahrenheit} degrees Fahrenheit.`);

// Convert celsius to newton
const newton = Math.floor(celsius * (33 / 100));
console.log(`Floored Newton is: ${newton}`);

