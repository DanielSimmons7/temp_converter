function convertToCelsius(fahrenheit){
    const celsius = (fahrenheit - 32) * (5/9);
    return celsius;
}

function createMessage(fahrenheit, celsius){
    return `The temperature is ${fahrenheit} degrees Fahrenheit. This is ${celsius} degrees Celsius.`;
}

const inputFahrenheit = window.prompt('What is the temperature in Fahrenheit?');

const convertedCelsius = convertToCelsius(inputFahrenheit);

console.log(createMessage(inputFahrenheit, convertedCelsius));