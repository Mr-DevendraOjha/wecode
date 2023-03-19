Q1. Write a JavaScript program to check whether a string "Code" presents at 5th (index 4) position in a given string, if "Code" presents in the string return the string without "Code" otherwise return the original one.

```

```

Q2. Write a JavaScript program to capitalize the first letter of each word of a given string.

```
let a = "the quick brown fox";
function captizle(str) {
  let spl = str.split(" ");
  for (let i = 0; i < spl.length; i++) {
    spl[i] = spl[i].slice(0, 1).toUpperCase() + spl[i].slice(1);
  }
  let ans = spl.join(" ");
  return ans;
}
console.log(captizle(a));
```

Q.3 Write a JavaScript program to check whether all the digits in a given number are the same or not.

```
let a = 2345;
function test(num) {
  let str = num.toString();
  let spl = str.split("");

  for (let i = 0; i < spl.length; i++) {
    if (spl[i] !== spl[0]) {
      return false;
    }
  }
  return true;
}

console.log(test(a));

```

Q4. Write a JavaScript function that reverse a number.

```
let a = 2345;
function test(num) {
  let str = num.toString();
  let spl = str.split("");
  let ans = "";

  for (let i = spl.length - 1; i >= 0; i--) {
    ans = ans + spl[i];
  }
  return ans;
}

console.log(test(a));
```

Q5. Write a JavaScript function to extract unique characters from a string.

```
let a = "my name devendra my";
function test(str) {
  let spl = str.split(" ");
  let ans = "";
  for (let i = 0; i < spl.length; i++) {
    if (spl[i] === spl[0]) {
    } else {
      ans += " " + spl[i];
    }
  }
  return ans;
}

console.log(test(a));
```

Q6. Write a JavaScript function to chop a string into chunks of a given length. Test Data :

```
let a = "mynamedevendra";
let b = 2;

function test(str, cut) {
  let ans = " ";
  let w = " ";
  for (let i = 0; i < str.length; i++) {
    w.push((ans[i] = str[i].slice(0, cut)));
  }
  console.log(ans);
}

console.log(test(a, b));

```

Q7. Write a JavaScript function to find a word within a string. Test Data :

```
let a = "my name devendra my";
let b = "my";
function test(str, serch) {
  let spl = str.split(" ");
  let ans = 0;

  for (let i = 0; i < spl.length; i++) {
    if (serch === spl[i]) {
      ans++;
    } else {
    }
  }
  return `${serch} was found ${ans} times `;
}

console.log(test(a, b));
```
