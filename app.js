// Q1
var varVariable = "this is a var variable";
let letVariable = "this is a let variable";
const constVariable = "this is a const variable";

console.log(varVariable);
console.log(letVariable);
console.log(constVariable);

console.log(window.varVariable);
console.log(window.letVariable);
console.log(window.consttVariable);

// Q2
function scope() {
  var funcVar = "this is a var function variable";
  let funcLet = "this is a let function variable";
  const funcConst = "this is a const function variable";

  console.log(funcVar);
  console.log(funcLet);
  console.log(funcConst);
}
scope();
console.log(funcVar);
console.log(funcLet);
console.log(funcConst);

// Q3
if (true) {
  var condVar = "this is a var variable in condition";
  let condLet = "this is a let variable in condition";
  const condConst = "this is a const variable in condition";

  console.log(condLet);
  console.log(condLet);
  console.log(condConst);
}
console.log(condLet);
console.log(condLet);
console.log(condConst);

// Q4
console.log(myVar);
var myVar = "this is my var variable";
console.log(myVar);

// Q5
console.log(myLet);
let myLet = "this is my let variable";
console.log(myLet);

console.log(myConst);
var myConst = "this is my const variable";
console.log(myConst);

// Q6
var deClare = "its a first variable";
var deClare = "its a first variable which i declare twice";
console.log(deClare);

// let varLet = 'its a let variable';
// let varLet = 'its a let variable which i declare twice';

// const varConst = 'its a const variable';
// const varConst = 'its a cons variable which i declare twice';

// Q7
var firsAssign = "its a first variable for reassignment";
firsAssign = "reassignment";
console.log(firsAssign);

let secAssign = "its a first let variable for reassignment";
secAssign = "reassignment";
console.log(secAssign);

const thirAssign = "its a 1st const variable for reassignment";
thirAssign = "reassignment";
console.log(thirAssign);

// Q8
{
  console.log(x);
  let x = 10;
}

{
  console.log(y);
  const y = 4;
}

// Q9
function exampleVar() {
  var x = 10;
  if (true) {
    var x = 20;
    console.log("Inside if block:", x);
  }
  console.log("Outside if block:", x);
}
exampleVar();

function exampleLet() {
  var x = 10;
  if (true) {
    var x = 20;
    console.log("Inside if block:", x);
  }
  console.log("Outside if block:", x);
}
exampleLet();

function exampleConst() {
  var x = 10;
  console.log("the value of x = ", x);
}
exampleVar();

// Q10
var firstName = "Shehzeen";
var lastName = "Ali";
console.log(`FULNAME = ${firstName + lastName}`);

// Q11
var address = `1234 street, abc apartment xyz area fb area Karachhi`;
console.log(`${address}`);

// Q12
let x = 89;
let y = 53;
console.log(`The sum of x & y = ${x + y}`);

// Q13
function product(x, y) {
  return x * y;
}
let res = product(34, 91);
console.log(res);

// Q14
function string(str) {
  return str;
}
let Str = string(`Hello, Js`);
console.log(Str);

// Q15
function func(param) {
  return param.toUpperCase();
}
let Res = func(`hello js`);
console.log(Res);

// Q16
let hour = new Date().getHours();
let message;
if (hour < 12) {
  message = `good morning:)!`;
} else {
  message = `good afternoon:))!`;
}
console.log(message);

// Q17
let ARr = ["clothes", "accessories", "shoes", "choclates", "groceries"];
document.write(`<ul><li>${ARr[0]}</li></ul>
    <ul><li>${ARr[1]}</li></ul>
    <ul><li>${ARr[2]}</li></ul>
    <ul><li>${ARr[3]}</li></ul>
    <ul><li>${ARr[4]}</li></ul>`);

// Q18
let STR = `its a template literal string: \W ```;
console.log(s);

// Q19
let digit = 2;
document.write(`${digit} x 1 = ${digit * 1} <br>
                ${digit} x 2 = ${digit * 2} <br>
                ${digit} x 3 = ${digit * 3} <br>
                ${digit} x 4 = ${digit * 4} <br>
                ${digit} x 5 = ${digit * 5} <br>
                ${digit} x 6 = ${digit * 6} <br>
                ${digit} x 7 = ${digit * 7} <br>
                ${digit} x 8 = ${digit * 8} <br>
                ${digit} x 0 = ${digit * 9} <br>
                ${digit} x 10 = ${digit * 10} <br>`);

// Q20
let age = 18;
let terOp = age >= 18 ? "Can Vote" : "Cant Vote";
console.log(terOp);

// Q21
var numBer = +prompt("Enter number");
if (numBer % 2 === 0) {
  console.log(`${numBer}: even`);
} else {
  console.log(`${numBer}: odd`);
}

// Q22
let score = +prompt("Enter your gained scores");
let grade =
  score >= 90
    ? "A"
    : score >= 80
    ? "B"
    : score >= 70
    ? "C"
    : score >= 60
    ? "D"
    : "F";
console.log(`your grade according to score is ${grade}`);

// Q23
let isLoggedIn = true;
let statusMessage = isLoggedIn ? "Welcome back!" : "Please log in";
console.log(statusMessage);

// Q24
let isMember = true;
let purchaseAmount = +prompt("Enter amount");
let discount = isMember && purchaseAmount > 100 ? purchaseAmount * 0.1 : 0;
console.log(discount);

// 25
function larger(a, b) {
  return a > b ? a : b;
}
let maxVal = larger(20, 50);
console.log(`LARGE B/W a & b: ${maxVal}`);

// Q26
function greet(name) {
  return name ? `hello ${name}` : `hello guest`;
}
let finalRes = greet(prompt("Enter your name"));
console.log(finalRes);

// Q27
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const maparr = arr.map((num) => (num % 2 === 0 ? num * 2 : num * 3));
console.log(maparr);

// Q28
const strArr = ["on", "you", "full", "apple", "caption"];
const filterArr = strArr.filter((e) => {
  return e.length > 3;
});
console.log(filterArr);

// Q29
const origninalArr = ["on", "you", "full", "apple", "caption"];
const copiedArr = [...origninalArr];
console.log("Orignal Array", origninalArr);
console.log("copied array", copiedArr);

// Q30
const arr1 = ["on", "you", "full", "apple", "caption"];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const mergeArr = [...arr1, ...arr2];
console.log('Merge Array' , mergeArr);

// Q31
let numArr = [20, 30, 40, 50, 60, 70, 80, 90];
let numArr2 = [...numArr];
numArr2.push(34, true);
console.log(numArr);
console.log(numArr2);

// Q31
let OrignalObj = [
  {
    name: "john",
    age: "24",
  },
  {
    city: 'karachi',
    country: 'Pakistan'
  },
];
let copiedObj = {...OrignalObj};
console.log(OrignalObj);
console.log(copiedObj);

// Q32
let obj1 = {
  name: "john",
  age: 25,
  city: "karachi",
};
let obj2 = {
  name: "ali",
  age: 25,
  city: "lahore",
};
let mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);

// Q33
let user = {
  name: "john",
  age: 25,
  email: "abc@gmail.com",
};
let updatedUser = {
  ...user,
  email: "john@gmail.com",
  address: "abc street",
};
console.log(user);
console.log(updatedUser);

// Q34
let arrAy = [2, 3, 4];
function sum(a, b, c) {
  return a + b + c;
}
console.log(sum(...arrAy));

// Q35
let Product = [2, 3, 4];
function multi(x, y, z) {
  return x * y * z;
}
console.log(multi(...Product));

// Q36
function multiply(numbers, ...arg) {
  return arg.map(args => args * numbers);
}
console.log(multiply(2, 3, 4, 5));

// Q37
let nestedArray = [[1, 2], [3, 4], [5, 6]];
let shallowcopy = [...nestedArray];
shallowcopy[0][0] = 10;
shallowcopy[1][1] = 20;
shallowcopy[2][2] = 30;
console.log(shallowcopy);

// Q38
function add(...more) {
  return more.reduce((e, i) =>
    e + i, 0
  );
}
console.log(add(10, 20, 30));

// Q39
function avg(...NUM) {
  let sum = NUM.reduce((e, i) => e + i, 0);
  return sum / NUM.length;
}
console.log(avg(10, 30, 50));

// Q40
let arr01 = [1, 2, 3, 4, 5];
let [first, ...rest] = arr01;
console.log(`first element: ${first}`);
console.log(`rest element: ${rest}`);

// Q41
let arr01 = ['red', 'green', 'yellow', 'blue', 'pink'];
let [, , ...rest] = arr01;
console.log(arr01);
console.log(rest);

// Q42
let objdestruc = {
  name: 'alice',
  age: 25,
  email: 'abc@gmail.com',
  address: "123 Main St, Cityville",
}
let {name, email, ...rest} = objdestruc;
console.log('name key:', name);
console.log('email key:', email);
console.log('remain keys', rest);

// Q43
let student = {
  id: 132,
  name: "ali",
  grades: "C",
  info: {
    age: 25,
    major: "Computer Science",
  },
};
let {
  id,
  name,
  info: { major },
  ...rest
} = student;
console.log("std id:", id);
console.log("std name:", name);
console.log("std major:", major);
console.log("remain keys:", rest);

// Q44
function EvenNum(...numbers) {
  let evens = numbers.filter((number) => number % 2 === 0);
  console.log(evens);
}
EvenNum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Q45
let fruitArray = ["apple", "mango", "cherry"];
let [firstFruit, secondFruit, thirdFruit] = fruitArray;
console.log(firstFruit, secondFruit, thirdFruit);

// Q46
let colors = ["red", "green", "blue", "yellow"];
let [firstcolor, , teritoryColor] = colors;
console.log(firstcolor, teritoryColor);

// Q47
let nos = [1, 2, 3, 4, 5];
let [firstNum, ...rest] = nos;
console.log(firstNum, rest);

// Q48
let person = {
  name: "john",
  age: "25",
  city: "chichago",
};
let { name, age, city } = person;
console.log(name, age, city);

// Q49
let car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
};
let updatedcarObj = ({ make: carMake, model: carModel, year: carYear } = car);
console.log(carMake, carModel, carYear);

// Q50
let settings = {
  theme: "dark",
};
let { theme, language = "urdu" } = settings;
console.log(theme, language);

// Q51
let nestedarray = [
  [1, 2],
  [3, 4],
  [5, 6],
];
let [[a], [b], [c]] = nestedarray;
console.log("a:", a);
console.log("b:", b);
console.log("c:", c);

// Q51
const profile = {
  username: "johndoe123",
  details: {
    email: "johndoe@example.com",
    address: "123 Main St, Hometown",
  },
};
let{username, details: {email, address}} = profile;
console.log(username, email, address);

// Q52
const data = {
  id: 1,
  info: [{ name: "Alice", age: 25 }],
};
let {
  id,
  info: [{ name, age }],
} = data;
console.log(id, name, age);

// Q53
function printCoordinates([x, y]) {
  console.log(`X Coordinate: ${x}`);
  console.log(`Y Coordinate: ${y}`);
}
printCoordinates([20, 30]);

// Q54
function displayUser({name, age})  {
  console.log(`NAME: ${name}`);
  console.log(`AGE: ${age}`);
}
displayUser({name: 'john', age: 25});

// Q55
const book = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960
};
let key1 = Object.keys(book);
console.log(key1);

// Q56
let student1Obj = {
  name: "afia",
  age: 14,
  grade: "B",
  school: "abc school",
};
let stdarr = Object.keys(student1Obj);
let numstdobj = stdarr.length;
console.log(numstdobj);
console.log(stdarr);

// Q57
let student2Obj = {
  name: "afia",
  age: 14,
  grade: "B",
  school: "abc school",
};
let std2arr = Object.keys(student2Obj);
console.log(std2arr);
for (let keys in student2Obj) {
  console.log(keys, ":", student2Obj[keys]);
}

// Q58
const movie = {
  title: "Inception",
  director: "Christopher Nolan",
  year: 2010,
  genre: "Science Fiction",
};
let movieArr = Object.values(movie);
console.log(movieArr);

// Q59
const scores = {
  math: 85,
  science: 92,
  english: 88
};
let scoresArr = Object.values(scores);
console.log(scoresArr);

let sumOfscores = scoresArr.reduce((acc, val) => acc + val, 0);
console.log('sum of scores:', sumOfscores);

// Q60
const user = {
  username: "john_doe",
  email: "john.doe@example.com",
  location: "New York",
};
let userarr = Object.values(user);
console.log(userarr);

userarr.forEach((val) => {
  console.log(val);
});

// Q61
const car = {
  make: "Toyota",
  model: "Camry",
  year: 2022,
};
let carArr = Object.entries(car);
console.log(carArr);

// Q62
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};
let personArr = Object.entries(person);
console.log(personArr);

// Q63
const settings = {
  theme: "dark",
  notifications: true,
  privacy: "high"
};
let settingsArr = Object.entries(settings);
console.log(settingsArr);

settingsArr.forEach(([keys, values]) => {
  console.log(keys,":", values);
});

// Q64
const inventory = {
  apples: 30,
  bananas: 50,
  oranges: 40,
  grapes: 60
};
let inventoryArr = Object.keys(inventory);
console.log(inventoryArr);
let newArr =  inventoryArr.filter(val => inventory[val] > 10)
console.log(newArr);

// Q65
const temperatures = {
  morning: 18,
  afternoon: 25,
  evening: 20
};

const temperaturesInFahrenheit = Object.entries(temperatures)
  .map(([time, temp]) => [time, (temp * 9/5) + 32]);

const temperaturesObject = Object.fromEntries(temperaturesInFahrenheit);

console.log(temperaturesObject);

// Q66
const roles = {
  admin: "Has full access to all settings and data.",
  editor: "Can edit content but has limited access to settings.",
  viewer: "Can only view content without any editing permissions."
};
let rolesArr = Object.entries(roles).map(([key, val]) => [key, val]);
let swappedRoles = Object.fromEntries(rolesArr);
console.log(swappedRoles);

// Q67
let digitsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function filterAndMap(array, filterfunc, mapfunc) {
  return array.filter(filterfunc).map(mapfunc);
}
let result = filterAndMap(digitsArray, number => number % 2 !== 0, number => number ** 2);
console.log(result);

// Q68
const words = ["apple", "banana", "cherry", "date"];

function sortAndReduce(Array, sortfunc, redfunc) {
  return Array.sort(sortfunc).reduce(redfunc);
}

const result = sortAndReduce(
  words,
  (a, b) => a.localeCompare(b),
  (acc, word) => acc + word
);

console.log(result);

// Q69
function greet(name, callback) {
  let message = `hello ${name}!:/`;
  callback(message);
}
function printGreeting(message) {
  console.log(message);
}
greet("shezeen", printGreeting);

// Q70
function fetchData(callback) {
  setTimeout(() => {
    let data = {
      name: "shezeen",
      institute: "SAIMS",
    };
    callback(data);
  }3000);
}
function displayData(data) {
  console.log(data);
}
fetchData(displayData);

// Q71
let add = ((a, b) => {
  return a + b;
})
console.log(add(3, 5));

// Q72
let numbers = [1, 2, 3, 4, 5];
let mapmoethod = numbers.map((e) => {
  return e ** 2;
});
console.log(mapmoethod);

// Q73
function outer() {
  let x = 4;
  function inner() {
    console.log("value of  x:", x);
  }
  inner();
}
outer();

// Q74
function createCounter() {
  let y = 7;
  return function () {
    y++;
    console.log("val of x:", y);
  };
}
let counter1 = createCounter();
let counter2 = createCounter();
counter1();
counter1();
counter2();
counter2();
counter2();

// Q75
function greet(name, msg = 'hello') {
  console.log(`${name} ${msg}`);

}
greet('shezeen');
greet('shezeen', 'hello JavaScript');

// Q76
function calculateArea(width = 10, height = 5) {
return width * height;
}
let area = calculateArea();
console.log(area);
let area2 = calculateArea(18, 7);
console.log(area2);

// Q77
let numbers = [1, 2, 3, 4, 5];
let newNumberArr = numbers.map((e, i) => {
  return e ** 2;
});
console.log(newNumberArr);

// Q78
let words = ['apple', 'banana', 'cherry'];
let newWordsArr = words.map((e) => {
  return e.toUpperCase();
})
console.log(newWordsArr);

// Q79
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let filterNum = numbers.filter((e) => {
  return e % 2 === 0;
});
console.log(filterNum);

// Q80
let words = ["apple", "banana",
  "cherry", "date"];
let filterWord = words.filter(e => {
  return e.length > 5;
});
console.log(filterWord);

// Q81
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
  console.log(number);
});

//Q82
let words = ["apple", "banana",
"cherry", "date"];
words.forEach(function(word) {
  console.log(word.length);

});

// Q83
let numbers = [1, 2, 3, 4, 5];
let numArr = numbers.reduce((acc, currVal) => {
  return acc + currVal;
});
console.log(numArr);

// Q84
let words = ["Hello", "world", "this", "is", "JavaScript"];
let word = words.reduce((e, i) => {
  return e + ' ' + i;
});
console.log(word);

// Q85
let numbers = [1, 3, 5, 7, 8];
let someMethod = numbers.some(ele => ele % 2 === 0);
console.log(someMethod);

// Q86
let words = ["apple", "banana",
"cherry", "date"];
let somemethod = words.some(element => element.length > 5);
console.log(somemethod);

// Q87
let numbers = [2, 4, 6, 8, 10];
let OddNum = numbers.every((elements) => elements % 2 === 0);
console.log(OddNum);

// Q88
let words = ["elephant", "giraffe", "hippopotamus"];
let everymethod = words.some((element) => element.length > 5);
console.log(everymethod);

// Q89
let numbers = [1, 3, 5, 7, 8];
let findMethodOnNum = numbers.find((elements) => elements % 2 === 0);
console.log(findMethodOnNum);

// Q90
let words = ["apple", "banana",
"cherry", "date"];
let findmethodOnString = words.find(element => element.length > 5);
console.log(findmethodOnString);

// Q91
let numbers = [1, 3, 5, 7, 8];
let findindexMethodOnNum = numbers.findIndex((elements) => elements % 2 === 0);
console.log(findindexMethodOnNum);

// Q92
let words = ["apple", "banana", "cherry", "date"];
let findindexmethodOnStr = words.find((element) => element.length > 5);
console.log(findindexmethodOnStr);

// Q93
function delay(miliSec) {
    return new Promise((resolve) => {
        setTimeout(resolve, miliSec);
    });
}
let newFunc = delay(2000);
newFunc.then(() => {
    console.log('hello, world');
});

// Q95
function fetchData() {
    return new Promise((resolve) => {
        let obj = {
            name: 'john',
            institute: 'SAIMS',
        }
        resolve(obj);
    })
}
let objlog = fetchData().then((data) => {
    console.log(data)
});
console.log(objlog);

// Q96
function fetchUser
Data() {
    return new Promise((resolve, reject) => {
        const data = {
            name: "Alice",
            age: 25,
        };
        if (data.age === undefined) {
            reject("User data is missing the 'age' property");
        } else {
            resolve(data);
        }
    });
}

fetchUser
Data()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error.message);
    });

// Q97
function getWeather() {
  return new Promise((resolve, reject) => {
    let weather = {
      temperature: 72,
      condition: "Sunny",
    };
    setTimeout(() => {
      let iserror = false;
      if (iserror) {
        reject(new Error("failed to fetch weather data"));
      } else {
        resolve(weather);
      }
    }, 1000);
  });
}
getWeather()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// Q98
function delay(miliSec) {
    return new Promise((resolve) => {
        setTimeout(resolve, miliSec);
    });
}
async function sayHello() {
    await delay(2000);
    console.log('hello, world');
}
sayHello();

// Q99
function fetchUserData() {
    return new Promise((resolve, reject) => {
        const data = {
            name: "Alice",
            age: 25,
        };
        if (data.age === undefined) {
            reject("User data is missing the 'age' property");
        } else {
            resolve(data);
        }
    });
}

async function getData() {
    try {
        let user = await fetchUserData()
        console.log('recieved', user);

    } catch (error) {
        console.log(error);

    }
}
getData();

// Q100
function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "John Doe",
        age: 30,
      });
    }, 1000);
  });
}

function fetchPosts(user) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { title: "Post 1 by " + user.name, content: "This is the first post" },
        { title: "Post 2 by " + user.name, content: "This is the second post" },
        { title: "Post 3 by " + user.name, content: "This is the third post" },
      ]);
    }, 1000);
  });
}

async function getUserAndPosts() {
  try {
    const user = await fetchUser();
    const posts = await fetchPosts(user);

    console.log("User Data:", user);
    console.log("User Posts:", posts);
  } catch (error) {
    console.error("Error fetching user data or posts:", error);
  }
}
getUserAndPosts();

// Q101
function fetchUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userFound = false;

      if (userFound) {
        resolve({
          name: "John Doe",
          age: 30,
        });
      } else {
        reject(new Error("User not found!"));
      }
    }, 1000);
  });
}

async function getUserInfo() {
  try {
    const user = await fetchUser();
    console.log("User Data:", user);
  } catch (error) {
    console.error("Error fetching user data:", error.message);
  }
}
getUserInfo();

// Q102

function apiCall() {
  return new Promise((resolve, reject) => {
    const delay = Math.random() * 2000;
    setTimeout(() => {
      const RESuLT = Math.random() > 0.2;
      if (RESuLT) {
        resolve(`Data fetched after ${Math.round(delay)} ms`);
      } else {
        reject(new Error("API call failed"));
      }
    }, delay);
  });
}

async function getData() {
  try {
    const result1 = await apiCall();
    console.log("Result 1:", result1);

    const result2 = await apiCall();
    console.log("Result 2:", result2);

    const result3 = await apiCall();
    console.log("Result 3:", result3);
  } catch (error) {
    console.error("Error during API calls:", error.message);
  }
}
getData();
