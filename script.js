// question 1
// const product = {
//     name : "Parker jotter standard ball pen",
//     ratings : 7000,
//     price : 270,
//     discount : 5,
// }

// console.log(product);

// question 2
// const profile = {
//     username : "@Rishab_1024",
//     followers :4321,
//     following :1234,
//     posts : 123,
//     isfollow : true,
// }
// console.log(profile)

// operators and conditional statements

// arithmetic operators

// +,-,*,/,modulus,expontential,increment and decrement
// these are four major arithmetic operators

// let a = 5;
// let b = 3;

// console.log("a + b = ", a + b)
// console.log("a - b = ", a - b)
// console.log("a * b = ", a * b)
// console.log("a / b = ", a / b)
// console.log("a % b = ", a % b)
// console.log("a ** b = ", a ** b)

// unary operators
// increment and decrement 

// console.log("a = ", a, "b = ", b)
// a++; // also can be written as a = a + 1 this is called post increment
// ++a is call pre increment
// console.log("a = ", a) //a = 6

// b--; // also can be written as b = b - 1 this is called post decrement
// --b is called pre decrement 
// console.log("b = ", b) // b = 2

// assignment operators

// =,+=,-=,*=,/=,%=,**=

// a = 5;
// b = 3;
// c = 6;
// d = 1;
// e = 9;
// f = 2;


// a += 4; //this means a = a + 4
// b -= 2; // b = b - 2
// c *= 2; // c = c * 2
// d /= 2; // d = d / 2
// e %= 2; // e = e % 3
// f **= 2 // f = f ** 2

// console.log(a) //9
// console.log(b) //1
// console.log(c) //12
// console.log(d) //0.5
// console.log(e) //1
// console.log(f) //4

// comparision operators
// ==,===,!=,!==,>,>=,<,<=

// a = 5
// b = 4


// console.log(a==b) //false only checks the value
// console.log(a===b) //also checks the data types
// console.log(a!=b) //true not equal to
// console.log(a!==b) //also checks the data types

// logical operators

// logical and && 
// logical or ||
// logical not !

// a = 5
// b = 4

// console.log(a < b && a == 5) //false because both conditions are not true this is logical and operator
// console.log(a < b || a == 5) //true because aleast one condition is ture this is logical or operator
// console.log(!(a < b) , !(a == 5)) //con1 is false and con2 is true but because of not operator results are the opposite of the original results

// conditional statements

// if statement 

// let marks = 45;
// if(marks >= 33 ){
//     student_is = "pass";
// }
// if(marks < 33 ){
//     student_is = "fail";
// }
// console.log(student_is);

// if else statement 

// let marks = 34;

// if (marks < 33 ) {
//     studentis = "fail";
// } else{
//     studentis = "pass";
// }

// console.log("student is", studentis)


// check if the number is odd or even 

// let number =25;
// if (number % 2 === 0) {
//     console.log(number, "is even");
// } else{
//     console.log(number, "is odd");
// }


// else if statement it is used to check multiple conditions to give the final answer

// let age = 18;

// if (age < 18) {
//     console.log( "person is minor");
// } else if (age > 60){
//     console.log( "person is senior citizen");
// } else {
//     console.log( "person is adult");
// }

// ternary operators  or compact or simpler form of if else condition

// mdn docs this website can be helpful for theory part


// practice question 1
// let number = prompt("enter a number");

// if (number % 3 === 0) {
//     console.log(number, "is a multiple of 3")
// } else {
//     console.log(number, "is not a multiple of 3")
// }

// practice question 2
// let score = 61;
// if(score >= 80 && score <=100){
//     console.log("you got A grade")
// } else if(score >= 70 && score <=89){
//     console.log("you got B grade")
// } else if(score >= 60 && score <=69){
//     console.log("you got C grade")
// } else if(score >= 50 && score <=59){
//     console.log("you got D grade")
// } else {
//     console.log("you got F grade")
// }

// loops

// for loop

// for(let con=1;con<=10;con++){
//     console.log("rishab")
// }

// for loop statement to find the sum of n numbers

// let sum = 0;

// for(let i=1;i<=5;i++){
//     sum = sum + i 
// }

// console.log("sum is", sum)

// for loop statement to print no 1 to 100

// for(let i = 1; i <= 100; i++){
//     console.log("i is", i)
// }

//while loops
