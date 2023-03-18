Q 1. What is an object in JavaScript?
```
object ek memory he jisme hum kis bhi data ko uske title ke sath store kar sakth h jisko java script ki language key or value keht h
```
Q 2. What is the difference between dot notation and bracket notation for accessing object properties?
```
let object = {
  name: "devendra",
  mobile: 9057484952,
  bankName: "bankofbaroda",
  city: "merta city",
};
console.log(object.name); //ye dot notation
console.log(object["name"]); //ye bracket notation
```
Q 3. How do you loop through the properties of an object in JavaScript?
```
let object = {
  name: "devendra",
  bank: "bankofbaroda",
  mobile: 9057484952,
  address: "merta city",
};

let arr = Object.entries(object);

for (let x of arr) {
  console.log(x);
}
```
Q 5. Write a JavaScript function to convert an object into a list of [key, value] pairs.
```
let object = {
  name: "devendra",
  livelocation: "jaipur",
  mobile: 9057484952,
  address: "merta city",
};
console.log(Object.entries(object));
```
Q 6. Write a function that takes an object representing a person and returns their full name.
```
let object = {
  firstName: "devendra",
 
  bankAccount: 2345678909,
  address: "jaipur",
};
console.log(
  "my name is " +
    object.firstName +
    
    ".and my bank account detiles " +object.bankAccount+
    "i live in " +
    object.address
);
```
Q 7. Create an Object with your personal details. Now print all the keys of the object in ascending order.
```
let object = {
  name: "devendra",
  mobile: 9057484952,
  bankName: "bankofbaroda",
  city: "merta city",
};
let ans = Object.keys(object);
console.log(ans.sort());
```