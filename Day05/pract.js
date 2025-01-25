console.log("Hello World");

var a = 100;
var b = 20;

console.log("Addition: " + (a + b));
console.log("Subtraction: " + (a - b));
console.log("Multiplication: " + a * b);
console.log("Divison: " + a / b);
console.log("4 to power 4: " + 4 ** 4);

// Kilometers to miles

var km = 2;
var miles = km * 0.621371;
console.log("Kilometers to miles: " + miles);

// degrees to fahrenheit

var celsius = 50;
var fahrenheit = (celsius * 9) / 5 + 32;
console.log("Degrees to Fahrenheit: " + fahrenheit);

// kg to pound

var kg = 5;
var pound = kg * 2.20462;
console.log("Kg to pound: " + pound);

// simple interest

// BMI 

var weight = 45;
var height =  1.7272;
var bmi = weight/(height**2);

console.log("BMI: "+bmi);

if (bmi<18.5){
    console.log("Underweight");
}
else if(bmi>=18.5 || bmi<25){
    console.log("Normal Weight");
}
else if(bmi>=25 || bmi<30){
    console.log("Overweight");
}
else{
    console.log("Obese");
}

//electricity bill

var bill = prompt("Enter Electricity units: ");
bill= Number(bill);

if(bill<100){
    console.log("Bill is free");
}
else if(bill>100 && bill<=200){
    bill*=5;
    console.log("Bill: "+bill);
}
else{
    bill*=10;
    console.log("Bill: "+bill);
}

 