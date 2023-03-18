##Q1 Create an array called fruits that contains the following elements: "apple", "banana", "orange". Now check if "orange" is in the fruits array.

```
let arr = ["apple", "orange", "banana"];
console.log(arr.includes("orange"));
```

##Q2 Given an array of numbers, write a function that returns the sum of all the even numbers in the array.

```
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function test(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }
  return sum;
}
console.log(test(arr1));

```

##Q3 Given two arrays of numbers, write a function that returns a new array that contains only the unique elements from both arrays.

```

```

##Q4 Given an array of strings, write a function that returns the longest string in the array.

```
let arr = ["apple", "banana", "kiwi", "devendra"];
function test(str) {
  let ans = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i].length > ans.length) {
      ans = str[i];
    }
  }
  return ans;
}
console.log(test(arr));
```

##Q5 Write a function that takes an array of numbers and returns the largest number in the array.

```
let arr = [2, 3, 4, 5, 6, 7, 84, 7, 8, 9];
function test(num) {
  let ans = 0;

  for (let i = 0; i < num.length; i++) {
    if (num[i] > ans) {
      ans = num[i];
    }
  }
  return ans;
}
console.log(test(arr));
```

##Q6 Write a function that takes an array of numbers and returns a new array that only contains the even numbers from the original array.

```
let arr = [2, 3, 4, 5, 6, 7, 84, 7, 8, 9];
function test(num) {
  let ans = [];

  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 != 1) {
      ans.push(num[i]);
    }
  }
  return ans;
}
console.log(test(arr));
```

##Q7 Write a function that takes an array of strings and returns a new array that only contains strings with more than 5 characters.

```let arr = ["apple", "banana", "kiwi", "devendra"];
function test(str) {
  let ans = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i].length >= 5) {
      ans.push(str[i]);
    }
  }
  return ans;
}
console.log(test(arr));
```

##Q8 Write a function that takes two arrays of numbers and returns a new array that contains the intersection of the two arrays (i.e. only the numbers that appear in both arrays).

```
let arr = [1, 5, 45, 9];
let arr1 = [2, 3, 45, 1, 5, 6];
function test(value1, value2) {
  let ans = [];
  for (let k = 0; k < value2.length; k++)
    for (let i of value1) {
      if (i === value2[k]) {
        ans.push(i);
      }
    }
  return ans;
}
console.log(test(arr, arr1));
```

##Q9 Write a function that takes an array of numbers and returns a new array where each element is the square of the original element

```
let arr = [5];
function test(value) {
  let ans = [];
  for (let i = 0; i < value.length; i++) {
    ans.push(value[i] * value[i]);
  }
  return ans;
}
console.log(test(arr));
```

##Q10 Write a function that takes an array of numbers and returns the average of all the numbers in the array.

```
let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
function test(value) {
  let ans = [];

  ans.push(value.length / 2);

  return value[ans];
}
console.log(test(arr));
```

##Q11 Write a function that takes an array of numbers and returns a new array that only contains numbers that are greater than 5. Use filter function

```
let arr = [2, 1, 20, 30, 40, 50, 60, 70, 80, 90, 100];
function test(value) {
  return 5 < value;
}

console.log(arr.filter(test));

```

##Q12 Write a function that takes an array of numbers and returns a new array where each element is the original element plus 1. use map function

```

```
