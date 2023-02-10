Q.1 Create a variable marks and assign any number. If marks are greater than 60 then print Pass else print Fail.?
let markes = 59;
if (markes >= 60) {
  console.log("PASS");
} else {
  console.log("FAIL");
}
{OUTPUT:- FAIL}


Q.2 Take two numbers and check if both numbers are odd or not. If yes then print Odd otherwise print Even?
let number = 50;
if (number % 2 === 0) {
  console.log("EVEN");
} else {
  console.log("ODD");
}
{OUTPUT:- EVEN}


Q.3 Take 4 variables a, b, c, d and assign their values in the way mentioned below and check output: a = b b = c c = d d = a?
let a = 1;
let b = 2;
let c = 3;
let d = 4;
a = b;
b = c;
c = d;
d = a; 
console.log(a, b, c, d);
{OUTPUT:- 2342}


Q.4 Check output of following and validate your answers
2+5*10-20**2 {OUTPUT:- -348}
20/5*10+10  {OUTPUT:- 50}
10 && 20 + 10 * 10  {OUTPUT:- 120}
30 > 20 && 10 + 4 < 15  {OUTPUT:- TRUE }
30 > 20 && 10 + 4 < 15 || 10  {OUTPUT:- TRUE}
30 < 20 || 10 + 5 < 15 || 10  {OUTPUT:- 10}
30 < 20 || 10 + 5 < 15 && 10  {OUTPUT:- FALSE}


Q.5 Take a number and check if number is odd or not. If number is Odd then print Yes else print No?
let number = 51;
if (number % 2 === 0) {
  console.log("NO");
} else {
  console.log("YES");
}
{OUTPUT:- YES}


Q.6 Take a number and check if number is divisible by 10 && 5. If yes then print Yes else print no?
let number = 5;
if (number % 5 === 0 && number % 10 === 0) {
  console.log("YES");
} else {
  console.log("NO");
}
{OUTPUT:- NO}


Q.7 Take a number and check if number * 20 makes it 100 or not. If yes the print Yes else print No?
let a = 4;
if (a * 20 === 100) {
  console.log("YES");
} else {
  console.log("NO");
}
{OUTPUT:- NO}


Q.8 Calculate your 10th percentage and print Pass or Fail if marks are more than 70 then print Pass else print Fail?
let percentage = 42;
if (percentage >= 70) {
  console.log("PASS");
} else {
  console.log("FAIL");
}
{OUTPUT:- FAIL}


Q.9 Take your age and check if your age is greater than 21 then print Adult else print Minor?
let age = 19;
if (age >= 18) {
  console.log("ADULT");
} else {
  console.log("MINOR");
}
{OUTPUT:- ADULT}


Q.10 Convert all if-else solutions to ternary operator solution. So instead of using if-else, use ternary operator.?
let age = 17
age >= 18 ? console.log("ADULT") : console.log("MINOR");
{OUTPUT:- MINOR}


Q.11 Implement mark-sheet logic
Take a field percentage
If percentage is >= 80 then print Distinction
If percentage is >= 60 and < 80 then print First division
If percentage >= 33 and < 60 then print Second division
if percentage < 33 then print Fail
let percantage = 32;
if (percantage >= 80) {
  console.log("DISTINCTION");
} else if (percantage < 80 && percantage >= 60) {
  console.log("FIRST DIVISION");
} else if (percantage < 60 && percantage >= 33) {
  console.log("SECOUND DIVISION");
} else {
  console.log("FAIL");
}
{OUTPUT:- FAIL}


Q.12 Find maximum of 2 numbers?
let a = 16;
let b = 13;
if (a > b && b > a) {
  console.log(a);
} else {
  console.log(b);
}
{OUTPUT:- 16}


Q.13 Find maximum of 3 numbers?
let a = 19;
let b = 18;
let c = 21;
if (a > b && a > c) {
  console.log(a);
} else if (b > a && b > c) {
  console.log(b);
} else {
  console.log(c);
}
{OUTPUT:- 21}
