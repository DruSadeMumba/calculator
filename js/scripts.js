var add = function(number1, number2) {
    return number1 + number2;
};
var number1 = parseInt(prompt("enter a number:"));
var number2 = parseInt(prompt("enter another number:"));
var result = add(number1, number2);
alert(result); 
var subtract = function(number1, number2) {
    return number1 - number2;
};
var number1 = parseInt(prompt("enter a number:"));
var number2 = parseInt(prompt("enter another number:"));
var result = subtract(number1, number2);
alert(result);  
var multiply = function(number1, number2) {
    return number1 * number2;
};
var number1 = parseInt(prompt("enter a number:"));
var number2 = parseInt(prompt("enter another number:"));
var result = multiply(number1, number2);
alert(result);
var divide = function(number1, number2) {
    return number1 / number2;
};
var number1 = parseInt(prompt("enter a number:"));
var number2 = parseInt(prompt("enter another number:"));
var result = divide(number1, number2);
alert(result);
var bmi = function(weight, height) {
    return weight / height * height;
};
var weight = parseInt(prompt("enter your weight in kgs"));
var height = parseFloat(prompt("enter your height in meters"));
var result1 = multiply(height, height);
var result = divide(weight, result1);
alert(result);
