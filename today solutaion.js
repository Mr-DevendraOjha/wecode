Q.1Create Bill Calculator
Ask below Questions
How many french fries (60rs per piece) do you want to order ?
How many burgers (50rs per piece) do you want to order ?
How many plates of chowmin (100rs per plate) do you want to order?
How many plates of Manchurian (80rs per plate) do you want to order?
How many Cokes (50 per piece) do you want to order ?

let french = Number(
  prompt("french fries 60rs per piece  do you want to order")
);
let burgers = Number(prompt("burgers 50rs per piece  do you want order"));
let chowmin = Number(prompt("burgers 100 per plate  do you want order"));
let Manchurian = Number(prompt("80rs per plate  do you want order"));
let cokes = Number(prompt("cokes 50 per piece  do you want order"));

let frenchtotal = french * 60;
let burgerstotal = burgers * 50;
let chowmintotal = chowmin * 100;
let Manchuriantotal = Manchurian * 80;
let cokestotal = cokes * 50;

let total =
  frenchtotal + burgerstotal + chowmintotal + Manchuriantotal + cokestotal;

console.log(` Frenchs:${french}* 60${frenchtotal}
Burgers:${burgers} * 50${burgerstotal}
Chowmin:${chowmin}*100 ${chowmintotal}
Manchurian:${Manchurian}*80${Manchuriantotal}
Cokes:${cokes}*50${cokestotal}
Total Bill:${total}`);

Q.4 Using a switch case to do this exercise

If number is odd then print Odd If number is even then print Even If number is 100 then print 100 Else print 10000
let a = Number(prompt("enter number"))
let num = a % 2;
switch (num) {
  case 0:
    console.log("its even number");
    break;
  case 1:
    console.log("its odd number");
    break;
  case 100:
    console.log("100");
    break;
  case 1000:
    console.log("1000");
}

Q.5 Ask user his/her birth year, "What is your birth year?"

If user age is greater than 18 then ask user "Do you have valid license number?" If user click on Okay then ask for his license number and finally in the alert show message "User with license number #### is ready to drive."

If user age is less than 18 then ask him question in confirm box "Do you have gaurd
let age = Number(prompt("What is your birth year?"));
if (18 <= age) {
  alert("User with license number 1234455667 is ready to drive.");
} else if (18 > age) {
  let gaurdians = prompt("Do you have gaurdians ?");
  if (gaurdians === "yes" && gaurdians === "Yes" && gaurdians === "YES");
  {
    let name = prompt("What is your gaurdian name ");
    alert("You are ready to drive with your");
  }
} else {
  alert("Sorry visit again please.");
}
