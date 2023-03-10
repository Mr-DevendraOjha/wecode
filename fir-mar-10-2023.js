//Q1.Create an array with three elements and print out the second element.
let arr = [2, 3, 4];
console.log(arr[1]);

//Q2.Create an array with five elements and print out the length of the array.
let array = [2, 3, 4, 3, 4];
console.log(arr.length);
//Q.3Create an array with four elements and print out each element using a for loop.
let arr = [2, 3, 4, 3];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
//Q.4Create an array with six elements and print out each element using a forEach loop.
let arr = [2, 3, 4, 3, 3, 2];
let ans = arr.forEach(test);
function test(num, index) {
  console.log(num, index);
}
//Q.5Create an array with three elements and add a fourth element to the end of the array.
let arr = [2, 3, 4];
arr.push(2);
let ans = arr.forEach(test);
function test(num, index) {
  console.log(num, index);
}

//Q.6Create an array with four elements and remove the second element

//Q.7Create an array with five elements and remove the last element.
let arr = [2, 3, 4, 3, 3];
arr.pop();

console.log(arr);

//Q.8Create an array with three elements and check if the array includes a specific value.

//Q.9Create an array with four elements and sort the array in ascending order.
let arr = [2, 3, 4, 3];
let ans = arr.sort();

console.log(ans);

//Q.10Create an array with five elements and sort the array in descending order.

let arr = [2, 3, 4, 3];
function test(val1, val2) {
  return val2 - val1;
}
let ans = arr.sort(test);

console.log(ans);

//Q.11Create two arrays, concatenate them and print out the resulting array.
let arr = [3, 4, 5];
let arr1 = [6, 7, 8];
console.log(arr.concat(arr1));

//Q.12Create an array with three elements and convert it to a string.

let arr = [3, 4, 5];
let ans = arr.toString();

console.log(ans);

//Q.13Create an array with four elements and reverse the order of the elements.
let arr = [3, 4, 5, 6];
let ans = arr.reverse();

console.log(ans);

//Q.14Create an array with five elements and find the index of a specific value.
