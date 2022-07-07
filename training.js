//Regular Homework

// 1) Make an array of numbers that are doubles of the first array
// function doubleNumbers(arr){
//     return arr.map(function (value, index) {
//         return value*2;
//     })
// }
// console.log(doubleNumbers([2, 5, 100]));

// 2) Take an array of numbers and make them strings
// function stringItUp(arr){
//     return arr.map(function (value) {
//         return value + "";
//     })
// }
// console.log(stringItUp([2, 5, 100]));

// / 3) Capitalize each of an array of names
// function capitalizeNames(arr){
//     return arr.map(function (value,) {
//         let str = value.toLowerCase();
//         const resStr = str.substring(0, 1).toUpperCase() + str.substring(1, str.length);
//         return resStr;
//     })
// }
// console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));

// 4) Make an array of strings of the names
// function namesOnly(arr){
//     return arr.map(function (value) {
//         return value.name;
//     })
// }
// console.log(namesOnly([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]));

// 5) Make an array of strings of the names saying whether or not they can go to The Matrix
// function makeStrings(arr){
//     return arr.map(function (value){
//         if( value.age >= 18){
//             return value.name + " can go to The Matrix";
//         }
//         return  value.name + " is under age!!";
//     })
// }
// console.log(makeStrings([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]));

// 6)  If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren't any positive numbers, return 0.
// const positiveSum = (arr) => {
//     if(arr.length === 0){
//         return  0;
//     }
//    let positiveNums =  arr.filter(function (value) {
//         return value > 0;
//     })
//     if (positiveNums.length === 0){
//         return 0;
//     }
//     return positiveNums.reduce(function (aggr, val) {
//         return aggr + val;
//     })
// }
// const input = [ 1, -4, 12, 0, -3, 29, -150];
// console.log(positiveSum(input));

// 7) Find the difference in age between the oldest and youngest family members, and return their respective ages and the age difference.
// const input7 = [
//     {
//         name: 'John',
//         age: 13
//     },
//     {
//         name: 'Mark',
//         age: 56,
//     },
//     {
//         name: 'Rachel',
//         age: 45,
//     },
//     {
//         name: 'Nate',
//         age: 70,
//     },
//     {
//         name: 'Jeniffer',
//         age: 65,
//     }
// ];
// const difference = (arr) => {
//     let resArr = [];
//    let filteredAge = arr.map(function (value) {
//        return value.age;
//    })
//     let max = Math.max(...filteredAge);
//     let min = Math.min(...filteredAge);
//     let difference = max - min;
//     resArr.push(min,max,difference);
//     return resArr;
// }
// console.log(difference(input7));

//   8 )
// const input8 = [
//     ['a', 'b', 'c'],
//     ['c', 'd', 'f'],
//     ['d', 'f', 'g'],
// ];
// const objCount = function (arr) {
//     let arr1 = arr.flat();
//     return arr1.reduce(function (previousValue, currentValue,currentIndex) {
//         let count = 0;
//         for (let i = 0; i < arr1.length; i++) {
//             if ( currentValue === arr1[i]){
//                 count++;
//             }
//         }
//         Object.defineProperty(previousValue,currentValue,{
//             value:count,
//             writable:true,
//             enumerable:true,
//             configurable:true
//         })
//         return previousValue;
//     },{})
// }
// console.log(objCount(input8));

// 9)
// Given an array nums of size n, return the majority element.
// const majority = (arr) => {
//     let obj = arr.reduce(function (previousValue, currentValue,currentIndex) {
//         let count = 0;
//         for (let i = 0; i < arr.length; i++) {
//             if ( currentValue === arr[i]){
//                 count++;
//             }
//         }
//         previousValue[currentValue] = count;
//         return previousValue;
//     },{})
//     let values = Object.values(obj);
//     let keys = Object.keys(obj);
//     for (let i = 0; i < values.length; i++) {
//         if(values[i] > arr.length/2){
//             return keys.find( key => obj[key] === values[i]);
//         }
//     }
// }
// console.log(majority( [3,2,3]));

// 10) gtnel trvats array i miji 3rd amenashate krknvox tive;
// let array = [1,1,1,1,2,2,2,3,0,3,11,11,11,11,11,12,1,12,12,12,12];
// const Repeted3rdElement = (arr) => {
//         let obj =  arr.reduce(function (previousValue, currentValue,currentIndex) {
//             let count = 0;
//             for (let i = 0; i < arr.length; i++) {
//             if ( currentValue === arr[i]){
//                 count++;
//             }
//         }
//         previousValue[currentValue] = count;
//         return previousValue;
//     },{})
//     let values = Object.values(obj);
//     let keys =   Object.keys(obj);
//     let max = Math.max(...values);
//     let ValuesWitoutMax = values.filter(function (value){
//         return value !== max;
//     })
//     let max1 = Math.max(...ValuesWitoutMax);
//      ValuesWitoutMax = ValuesWitoutMax.filter(function (value){
//          return value !== max1;
//      })
//      return keys.find(key => obj[key] === Math.max(...ValuesWitoutMax));
// }
// console.log(Repeted3rdElement(array));

// 11) Given a string s and an array of strings words, determine whether s is a prefix string of words.
// const prefix = (str,arr) => {
//     let result = false;
//     let next = "";
//     for (let i = 0; i < arr.length; i++) {
//         next = next + arr[i];
//         if(str === next){
//             result = true;
//             break;
//         }
//     }
//     return result;
// }
// console.log(prefix("iloveleetcode",["i","love","leetcode","apples"]));

// 12)
// const phoneCountryCodes = {
//     '+374': 'Armenia',
//     '+375': 'Somali',
//     '+376': 'Russia',
//     '+377': 'Hoktemberyan',
// }
// const arrOfObjects = [
//     {
//         name: 'sarah',
//         age: 32,
//         phoneNumber: '+374000000',
//         relation: 'nelly'
//     },
//     {
//         name: 'nelly',
//         age: 11,
//         phoneNumber: '+3750020000',
//         relation: 'sarah'
//     }
// ];
// const referancetoSarahObject = arrOfObjects[0];
// const referanceToNellyObject =  arrOfObjects[1];
// arrOfObjects[0]["relation"] = referancetoSarahObject;
// arrOfObjects[1]["relation"] = referanceToNellyObject;
// const filteredObject = (arr) => {
//     let codeskeys = Object.keys(phoneCountryCodes);
//     let  phoneCodes = arr.map(function (value) {
//         return value.phoneNumber;
//     }).map(function (value) {
//         return value.substring(0,4);
//     });
//     for (let i = 0; i < phoneCodes.length; i++) {
//         for (let j = 0; j < codeskeys.length; j++) {
//             if( phoneCodes[i] === codeskeys[j]){
//                 arr[i]["country"] = phoneCountryCodes[phoneCodes[i]];
//             }
//         }
//     }
//     return arr;
// }
// console.log(filteredObject(arrOfObjects));


//Bonus xndir
// const max = function (arr) {
//   let max = -Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     if(arr[i] === undefined){
//       continue;
//     }
//     if( arr[i] > max){
//       max = arr[i];
//     }
//   }
//   return max;
// }
// const min = function (arr) {
//   let min = Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     if(arr[i] === undefined){
//       continue;
//     }
//     if( arr[i] < min){
//       min = arr[i];
//     }
//   }
//   return min;
// }
// const students = [[1,6], [2,5], [4, 3]];
// const Hertakanutyun = (arr) => {
//   let result = [];
//   const patrastvelujamanak = arr.map(function (value, index) {
//     return value[0];
//   })// [1,2,4]
//   const patasxanelujamanak = arr.map(function (value, index) {
//     return value[1];
//   })// [6,5,3]
//   for (let i = 0; i < patrastvelujamanak.length; i++) {
//     if(patrastvelujamanak[i] === min(patrastvelujamanak)){
//       result.push(i);
//     }
//   }
//   const patasxaneluJamanakArancMax = patasxanelujamanak.map(function (value) {
//     if(value === max(patasxanelujamanak)){
//       return undefined;
//     }
//     return  value
//   })
//   const  foo = (array) => {                                               // array = patasxaneluJamanakArancMax
//     let check = array.every(function (value) {
//       return value === undefined;
//     })
//     if(check){
//       return  result;
//     }
//     for (let i = 0; i < array.length; i++) {
//       if( min(array) === array[i]){
//         result.push(i);
//       }
//     }
//     let a = array.map(function (val, index) {
//       if(  val  === min(array)){
//         return undefined;
//       }
//       return val;
//     })
//     return foo(a);
//   }
//   return  foo(patasxaneluJamanakArancMax);
// }
// console.log(Hertakanutyun(students));

