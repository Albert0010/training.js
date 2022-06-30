//Regular Homework

//1. Makequestion
// const MakeQuestion = (oprd1,oprd2,opr) => {
//     return "What is " + oprd1 +  opr  + oprd2 + "?" ;
// }
// console.log(MakeQuestion(1,2,"+"));

//2.  Create an obj
// const obj = {name:'Albert'};
// Arajin exanak   const key = 'Acqeri guyn';
//                 obj[key] = 'brown';
// Erkrord exanak  obj.age = 19;
//Errord exanak    obj['Erkir'] = 'Armenia';

//3.Find Unique in Array
// First variant
// let x = ["a","a","a","j","a"];
//
// let FindUnique = (arr) => {
//
//     for (let i = 0; i < arr.length; i++) {
//         let answer = true ;
//         for (let j = 0; j < arr.length; j++) {
//             if( i === j ){
//                 continue;
//             }
//             else if (arr[i] === arr[j]){
//                 answer = false;
//                 break;
//             }
//         }
//         if(answer){
//             return arr[i];
//         }
//     }
//     return "There all elements are the same";
// }
//
// console.log(FindUnique(x));
//
// FindUnique
// Second variant
// let x = ["j","a","a","a"];
//
// let FindUnique = (arr) => {
//     let result;
//     for (let i = 0; i < arr.length; i++) {
//          result  = arr.filter(function (val) {
//             return val !== arr[i];
//         });
//     }
//     return result[0] ;
// }
//
// console.log(FindUnique(x));

//4. Max&MininArray
// let arr = [14,59,3,8,2];
// const MaxandMininArray = (arr) => {
//     let newarr = [];
//     let max = arr.reduce(function(aggr,val){
//         if(val>aggr){
//             aggr = val;
//             return aggr;
//         }
//         return aggr;
//     })
//     let min = arr.reduce(function(aggr,val){
//         if(val<aggr){
//             aggr = val;
//             return aggr;
//         }
//         return aggr;
//     })
//      newarr.push(min,max);
//     return newarr;
// }

//5.separatedArr (odd/even)
// let array = [1,2,3,4,5,6];
//
// const separatedArr = (arr) => {
//     let oddArr = [];
//     let evenArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] % 2 === 0){
//             evenArr.push(arr[i]);
//         }else{
//             oddArr.push(arr[i]);
//         }
//     }
//     return {oddArr: oddArr, evenArr: evenArr};
// }
//
// console.log(separatedArr(array));
// const f = (arr,n) => {
//     let result = [];
//     let k = 0;
//     let len = arr.length;
//     for (let i = 0; i < n; i++) {
//         result[k] = arr[len-1];
//
//         len--;
//         k++;
//     }
//     return result;
// }
// console.log(f(www,6));

//6. FindUnique
// let x = [222,1,2,3,19,3,5,4,4,4,29];
//
// let FindUnique = (arr) => {
//     let resArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         let answer  = true ;
//         for (let j = 0; j < arr.length; j++) {
//             if( i === j ){
//                 continue;
//             }
//             if (arr[i] === arr[j]){
//                 answer = false;
//                 break;
//             }
//         }
//         if(answer){
//             resArr.push(arr[i]);
//         }
//     }
//     return resArr;
// }
//
// console.log(FindUnique(x));




console.log((q));
//7. sameWord:
// let array1 = ["dog","cat","parrot"];
// let array2 = ["lizard","rat","cat","dog"];
// const sameWord = (arr1,arr2) => {
//     let result = [];
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if(arr1[i] === arr2[j]){
//                 result.push(arr1[i]);
//             }
//         }
//     }
//     return result;
// }
// console.log(sameWord(array1,array2));

//8. ContainArr
// let array1 = ["monday","tuesday","friday"];
// let array2 = ["tuesday","friday"];
//
// const ContainArr = (arr1,arr2) => {
//     let result ;
//     for (let i = 0; i < arr2.length; i++) {
//         for (let j = 0; j < arr1.length; j++) {
//             if(arr2[i] === arr1[j]){
//                 result = true;
//                 break;
//             }
//             result = false;
//         }
//     }
//     return result;
// }
// console.log(ContainArr(array1,array2));

//9. sequenceArr
// let array = ["b",6,"a","q",8,7,2];
// const sequenceArr = (arr) => {
//     let result =[];
//     for (let i = 0; i < arr.length; i++) {
//         if(typeof(arr[i]) === "number" ){
//             result.push(arr[i]);
//         }
//     }
//     for (let i = 0; i < arr.length; i++) {
//         if(typeof(arr[i]) === "string" ){
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }
// console.log(sequenceArr(array));

//10. doIndexedArr
// let array = ["mon","tue","wed","thur","fri"];
// let inArr = [1,3,0];
// const doindexedArr = (arr,indexArr) => {
//     let indexedArr = [];
//     for (let i = 0; i < indexArr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if(indexArr[i] === j){
//                 indexedArr.push(arr[j]);
//             }
//         }
//     }
//     return indexedArr;
// }
// console.log(doindexedArr(array,inArr));

//11. reverse functian
// let str = "Albert";
//  const reverse = (word) =>{
//      let arrStr = word.split("");
//      let newstr = "";
//      for (let i = arrStr.length - 1 ; i >= 0 ; i--) {
//          newstr = newstr + arrStr[i];
//      }
//      return newstr;
//  }
//
//
//  console.log(reverse(str));




//advanced homework

//MainDiaganal in matrix
// let array = [1,2,3,4,5,6,7,8,9];
// const ArrayToMatrix = (arr) => {
//        let len = Math.sqrt(arr.length);
//        let matrix = [];
//        let k = -1;
//        for (let i = 0; i < arr.length; i++) {
//            if (i % len === 0){
//                k++;
//                matrix[k] = [];
//            }
//            matrix[k].push(arr[i]);
//        }
//        return matrix;
// }
// let matrix = ArrayToMatrix(array);
// const mainDiagonal = (mat) => {
//     let sum = 0;
//     for (let i = 0; i <mat.length; i++) {
//         for (let j = 0; j < mat.length; j++) {
//             if( i === j){
//                 sum = sum + mat[i][j];
//             }
//         }
//     }
//     return sum;
// }
// console.log(mainDiagonal(matrix));

//2.
// let array = [1,2,3,4];
//
// const MaxAndMininObj = (arr) => {
//     let obj = {};
//     let max = 0;
//     let min = 0;
//     let arrMax = Math.max(...arr);
//     let arrMin = Math.min(...arr);
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] !== arrMin){
//             max = max + arr[i];
//         }
//         if(arr[i] !== arrMax){
//             min = min + arr[i];
//         }
//     }
//     obj["max"] = max;
//     obj["min"] = min;
//     return obj;
// }
// console.log(MaxAndMininObj(array));

//3.
// let array = [1,2,2,1,3,3,4,4,5];
//
// const JuxtArray = (arr) => {
//     let result;
//     let result1 ;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if( i === j ){
//                 continue;
//             }
//             if(arr[i] !== arr[j]){
//                 result1 = true;
//             }else if (arr[i] === arr[j]){
//                 result1 = false;
//                 break;
//             }
//         }
//         if(result1){
//             result = arr[i];
//         }
//     }
//     return result;
// }
//
// console.log(JuxtArray(array));

// //1. RepeatedCountArr
// let lookup = ['i','love','sadakhlo','esiminch'];
// let strings = ['i','i','sadakhlo','i','i','sadakhlo'];
//
// const RepeatedCountArr = (arr1,arr2) => {
//     let count = 0;
//     let newArr = [];
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if(arr1[i] === arr2[j]){
//                 count++;
//             }
//         }
//         newArr.push(count);
//         count = 0;
//     }
//     return newArr;
// }
//
// console.log(RepeatedCountArr(lookup,strings));






// const payments = [
//     {
//         studentId: 1, // Unique identifier for each student
//         studentName: "John Doe", // Name of the student
//         payedAmount: 1600, // Amount payed with this transaction
//         year: 2020, // The payment year
//     },
//     {
//         studentId: 1, // Unique for each student
//         studentName: "John Doe",
//         payedAmount: 1500,
//         year: 2021
//     },
//     {
//         studentId: 1, // Unique for each student
//         studentName: "John Doe",
//         payedAmount: 1400,
//         year: 2022
//     },
//     {
//         studentId: 1, // Unique for each student
//         studentName: "John Doe",
//         payedAmount: 1300,
//         year: 2023
//     },
//     {
//         studentId: 2, // Unique for each student
//         studentName: "Lu Kang",
//         payedAmount: 1500,
//         year: 2020
//     },
//     {
//         studentId: 2, // Unique for each student
//         studentName: "Lu Kang",
//         payedAmount: 1400,
//         year: 2021
//     },
//     {
//         studentId: 2, // Unique for each student
//         studentName: "Lu Kang",
//         payedAmount: 1300,
//         year: 2023
//     },
//     {
//         studentId: 2, // Unique for each student
//         studentName: "Lu Kang",
//         payedAmount: 1200,
//         year: 2023
//     }
// ];
//
//
// const MaxPayment = () => {
//     let max = payments[0].payedAmount;
//     for (let i = 0; i < payments.length; i++) {
//         if(payments[i].payedAmount > max){
//             max = payments[i].payedAmount;
//         }
//     }
//     return max;
// }
//
// console.log(MaxPayment(payments));

// const payments = [
//     {
//         studentId: 1, // Unique identifier for each student
//         studentName: "John Doe", // Name of the student
//         payedAmount: 1600, // Amount payed with this transaction
//         year: 2020, // The payment year
//     },
//     {
//         studentId: 1, // Unique for each student
//         studentName: "John Doe",
//         payedAmount: 1500,
//         year: 2021
//     },
//     {
//         studentId: 1, // Unique for each student
//         studentName: "John Doe",
//         payedAmount: 1400,
//         year: 2022
//     },
//     {
//         studentId: 1, // Unique for each student
//         studentName: "John Doe",
//         payedAmount: 1300,
//         year: 2023
//     },
//     {
//         studentId: 2, // Unique for each student
//         studentName: "Lu Kang",
//         payedAmount: 1500,
//         year: 2020
//     },
//     {
//         studentId: 2, // Unique for each student
//         studentName: "Lu Kang",
//         payedAmount: 1400,
//         year: 2021
//     },
//     {
//         studentId: 2, // Unique for each student
//         studentName: "Lu Kang",
//         payedAmount: 1300,
//         year: 2023
//     },
//     {
//         studentId: 2, // Unique for each student
//         studentName: "Lu Kang",
//         payedAmount: 1200,
//         year: 2023
//     }
// ];
// const CountPayment = () => {
//     let sum = 0;
//     for (let i = 0; i < payments.length; i++) {
//         sum = sum + payments[i].payedAmount;
//     }
//     return sum;
// }
// console.log(CountPayment(payments));

// const payments = [
//     {
//         studentId: 1, // Unique identifier for each student
//         studentName: "John Doe", // Name of the student
//         payedAmount: 1600, // Amount payed with this transaction
//         year: 2020, // The payment year
//     },
//     {
//         studentId: 1, // Unique for each student
//         studentName: "John Doe",
//         payedAmount: 1500,
//         year: 2021
//     },
//     {
//         studentId: 1, // Unique for each student
//         studentName: "John Doe",
//         payedAmount: 1400,
//         year: 2022
//     },
//     {
//         studentId: 1, // Unique for each student
//         studentName: "John Doe",
//         payedAmount: 1300,
//         year: 2023
//     },
//     {
//         studentId: 2, // Unique for each student
//         studentName: "Lu Kang",
//         payedAmount: 1500,
//         year: 2020
//     },
//     {
//         studentId: 2, // Unique for each student
//         studentName: "Lu Kang",
//         payedAmount: 1400,
//         year: 2021
//     },
//     {
//         studentId: 2, // Unique for each student
//         studentName: "Lu Kang",
//         payedAmount: 1300,
//         year: 2023
//     },
//     {
//         studentId: 2, // Unique for each student
//         studentName: "Lu Kang",
//         payedAmount: 1200,
//         year: 2023
//     }
// ];
//
// const CountPayment = () => {
//     let count = 0;
//     for (let i = 0; i < payments.length; i++) {
//         if(payments[i].payedAmount >1500){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(CountPayment(payments));

// const payments = [
//     {
//         studentId: 1, // Unique identifier for each student
//         studentName: "John Doe", // Name of the student
//         payedAmount: 1600, // Amount payed with this transaction
//         year: 2020, // The payment year
//     },
//     {
//         studentId: 1, // Unique for each student
//         studentName: "John Doe",
//         payedAmount: 1500,
//         year: 2021
//     },
//     {
//         studentId: 1, // Unique for each student
//         studentName: "John Doe",
//         payedAmount: 1400,
//         year: 2022
//     },
//     {
//         studentId: 1, // Unique for each student
//         studentName: "John Doe",
//         payedAmount: 1300,
//         year: 2023
//     },
//     {
//         studentId: 2, // Unique for each student
//         studentName: "Lu Kang",
//         payedAmount: 1500,
//         year: 2020
//     },
//     {
//         studentId: 2, // Unique for each student
//         studentName: "Lu Kang",
//         payedAmount: 1400,
//         year: 2021
//     },
//     {
//         studentId: 2, // Unique for each student
//         studentName: "Lu Kang",
//         payedAmount: 1300,
//         year: 2023
//     },
//     {
//         studentId: 2, // Unique for each student
//         studentName: "Lu Kang",
//         payedAmount: 1200,
//         year: 2023
//     }
// ];
// let newObj1 = {};
// let newObj2 = {};
// let newArr = [];
// let sum1 = 0;
// let sum2 = 0;
// for (let i = 0; i < payments.length; i++) {
//     if(payments[i].studentId === 1){
//         sum1 = sum1 + payments[i].payedAmount;
//     }
//     if(payments[i].studentId === 2){
//         sum2 = sum2 + payments[i].payedAmount;
//     }
// }
// for (let j = 0; j <= payments.length; j++) {
//     if(payments[j].studentId === 1){
//         Object.defineProperties(newObj1,{
//             "studentId": {
//                 value:1,
//                 enumerable:true,
//                 configurable:true,
//                 writable:true
//             },
//             "studentName": {
//                 value: payments[j].studentName,
//                 enumerable:true,
//                 configurable:true,
//                 writable:true
//             },
//             "GeneralPayments": {
//                 value: sum1,
//                 enumerable:true,
//                 configurable:true,
//                 writable:true
//             }
//         })
//         newArr.push(newObj1);
//         break;
//     }
//
// }
// for (let k = 0; k <= payments.length; k++) {
//     if(payments[k].studentId === 2){
//         Object.defineProperties(newObj2,{
//             "studentId": {
//                 value:2,
//                 enumerable:true,
//                 configurable:true,
//                 writable:true
//             },
//             "studentName": {
//                 value: payments[k].studentName,
//                 enumerable:true,
//                 configurable:true,
//                 writable:true
//             },
//             "GeneralPayments": {
//                 value: sum2,
//                 enumerable:true,
//                 configurable:true,
//                 writable:true
//             }
//         })
//         newArr.push(newObj2);
//         break;
//     }
//
// }


