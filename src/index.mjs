// setTimeout
for (let i = 1; i <= 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000 * i);
}

//setInterval

function main() {
  console.log("Hello");
}

let timer = setInterval(main, 1000);

setTimeout(() => {
  clearInterval(timer);
}, 5000);

let str = "programming";
let obj = {};

function occurance() {
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      obj[str[i]]++;
    } else {
      obj[str[i]] = 1;
    }
  }
  return obj;
}
occurance();

let key = Object.keys(obj);
let ans = "";
for (let i = 0; i < key.length; i++) {
  ans += `${key[i]}${obj[key[i]]}`;
}
console.log(ans);

for (let t in obj) {
  console.log(`${t}${obj[t]}`);
}

let str2 = "Hello World!";

let uppercase = 0;
let lowercase = 0;

function CountStr() {
  for (let i = 0; i < str2.length; i++) {
    if (str2[i] !== " " && str2[i] !== "!") {
      if (str2[i] === str2[i].toUpperCase()) {
        uppercase++;
      } else {
        lowercase++;
      }
    }
  }
  console.log(`uppercase = ${uppercase}`);
  console.log(`lowercase = ${lowercase}`);
}

CountStr();

//find first and last index of target value
let arr = [5, 2, 0, 1, 4, 1, 6, 2, 8, 2, 1, 1, 2];
let target = 2;

function num() {
  let first = -1;
  let last = -1;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      count++;
      if (first == -1) {
        first = i;
      }
      last = i;
    }
  }
  if (count == 1) return [first];
  return [first, last];
}
console.log(num());

let arr = [2, 1, 3, 4, 5, 6, 7, 8, 9, 0];

function num() {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]]++;
    } else {
      obj[arr[i]] = 1;
    }
  }
  for (let t in obj) {
    if (obj[t] > 2) {
      return false;
    }
  }
  return true;
}
console.log(num());

//duplicate number
let arr = [2, 4, 3, 1, 9, 3, 2, 0, 1, 8];

function dup() {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        console.log(arr[j]);
      }
    }
  }
}
dup();

function sqrt(n) {
  let i = 1;
  while (i * i <= n) {
    if (i * i == n) return i;
    i++;
  }
  return i - 1;
}
console.log(sqrt(99));

function evenNum(n) {
  let i = 1;
  while (i < n) {
    if (i % 2 == 0) {
      console.log(i);
    }
    i++;
  }
}

evenNum(10);

let n = 123456789;

function even() {
  let i = 1;
  while (i <= n) {
    let last = n % 10;
    if (last % 2 == 0) {
      console.log(last);
    }
    n = (n - (n % 10)) / 10;
    i++;
  }
}
even();

let n = 12121;
function palindrome() {
  let rev = 0;
  let dup = n;
  while (n > 0) {
    let last = n % 10; //1212
    rev = rev * 10 + last; //0+1
    n = (n - (n % 10)) / 10;
  }
  if (dup === rev) {
    console.log("palindrome");
  } else {
    console.log("not palindrome");
  }
}
palindrome();

//missing number
let arr = [4, 0, 1, 5, 2, 3, 7, 6];
function num() {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  let n = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == n) {
      n++;
    }
  }
  return n;
}
console.log(num());
