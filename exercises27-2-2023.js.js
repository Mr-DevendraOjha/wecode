1. Function ko 1 number pass krna hai. jo number pass kia hai us number ki table print krni hai. for example 5 
... function table(a, b) {
  console.log(a * b);
}
let sum = 0;
for (let sum = 1; sum <= 10; ++sum) {
  table(2, sum);
}
...

2. Function ko 2 numbers pass krne hai. Numbers ko multiply krna hai 
...

function table(a, b) {
  console.log(a * b);
}
table(2, 2);
...

3. Function ko array bnana hai and array ke sare numbers ko print krna hai 
...
let array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
function arr(ar) {

  console.log(ar);
}
arr(array);
...


4. Function bnana hai. Function me ek value leni hai. agar value true hai to Yes print kro otherwise No print kro
...
function value(a) {
  let b = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
  for (let i = 0; i <= b.length - 1; i++) {
    if (a === b[i]) {
      console.log("yes");
    } else {
      console.log("no");
    }
  }
}
value(5);
...


5. Function bnana hai. Function ko 2 numbers pass krne hai min and max. for example 10 and 20 to tume 10 se leke 20 tak print krvana hai 
...

function print(a, b) {
  for (let i = a; i <= b; i++) {
    console.log(i);
  }
}
print(10, 21);
...


6. function bnana hai. Function ko 1 number pass krna hai. 0 se leke us number tak jitne b Odd numbers hai vo print krne hai.
...

function odd(b) {
  let str = "";
  for (let i = b; i > 0; i--) {
    if (i % 2 === 0) {
      str = i;
    }
    console.log(str);
  }
}
odd(15);
...

7. function bnana hai. Function ko 1 number pass krna hai. 0 se leke us number tak jitne b Even numbers hai vo print krne hai.
...
function even(b) {
  let str = "";
  for (let i = b; i > 0; i--) {
    if (i % 2 === 1) {
      str = i;
    }
    console.log(str);
  }
}
even(15);
...

8. Ek function bnana hai. Is function ko 2 number pas krne hai. phla number ek number hoga aur dusra number maximum number hoga. fir hume phle number ke multiples max number tak print krne hai.
...function multiple(fi, se) {
  let str = "";
  for (let i = 1; i <= se; i++) {
    let re = fi * i;

    if (re <= se) {
      str = str + re;
    }
  }
  console.log(str);
}
multiple(2, 100);
