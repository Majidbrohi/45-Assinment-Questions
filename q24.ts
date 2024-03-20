// Question no.24(Some more equality tests)
let num1:number = 4;
let num2:number = 8;

//*let's test some.s
//*Tests for equality and inequality with strings
console.log("Equality test:" , "Majid" == "Majid");
console.log("Equality test:" , "Majid" != "Majid");

//*Tests using the lower case function;
console.log("Equality test lowerCase:" , "Majid".toLowerCase() == "Majid");


//*Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Numarical test, equality" , num1 == num2);
console.log("Numarical test, inEquality" , num1 != num2);
console.log("Numarical test, greater" , num1 > num2);
console.log("Numarical test, less" , num1 < num2);
console.log("Numarical test, greaterThenEqualTo" , num1 >= num2);
console.log("Numarical test, lesThenEqualTo" , num1 <= num2); 

//*Tests using "and" and "or" operators
console.log("Test using and" , (num1 === 4) && (num2 === 8));
console.log("Test using or" , (num1 === 12) || (num2 === 18));


//* Wheather an item is in a array
let currency:string[] = ["PKR" , "INR" , "USD" , "ASD" , "TL" , "SD"];
console.log("Arrays inclueds test:" , currency.indexOf("USD") );
console.log("Arrays isn't inclueds test:" , !currency.indexOf("USD") );

//*variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
let alien_color:string =("green")
// Write an if statement to test whether the alien’s color is green. If it is, print, a message that the player just earned 5 points.
if(alien_color == "green"){
    console.log("Congrats , you have earned 5 points.")
}