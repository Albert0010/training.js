//Array.reduce IMPORTANT
// let array = [1,2,3,4,5,6,7,8,9];
// const reduce = (arr , func , aggregator) => {
//     const check = (aggregator === undefined);
//     if (check){
//         aggregator = arr[0];
//     }
//     for (let i = check ? (1): (0); i < arr.length; i++) {
//         aggregator = func(aggregator,arr[i],i);
//     }
//     return aggregator;
// }
// let q = reduce(array,function (prev,val) {
//    return prev + val;
// });
// console.log(q);



//4.MainDiaganal in matrix
// let array = [
//     1,2,3,4,
//     5,6,7,8,
//     9, 10,11,12,
//     13,14,15,16];
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
// const mainDiagonal = (mxt) => {
//     let sum = 0;
//     for (let i = 0; i <mxt.length; i++) {
//         for (let j = 0; j < mxt.length; j++) {
//             if( i === j){
//                 sum += mxt[i][j];
//             }
//         }
//     }
//     return sum;
// }
// console.log(mainDiagonal(matrix));

//IMPORTANT
// const copyWithin = (arr,target,start,end) => {
//     if(target < 0){//-7 + 4 // => -3
//         target = target + arr.length;
//         if( target < 0){//-3
//             while ( target < 0){
//                 target = target + arr.length;//-3 + 4 // => 1
//             }
//         }
//     }
//     if( end === undefined){
//         end = arr.length;
//     }
//     if( end < 0){
//         end = end + arr.length;
//     }
//     if( start === undefined){
//         start = 0;
//     }
//     if( start < 0){
//         start = start + arr.length;
//     }
//     let slicedArr = arr.slice(start,end);
//
//     for (let i = 0; i < slicedArr.length; i++) {
//         arr[target] = slicedArr[i];
//         target++;
//         if( target >= arr.length){
//             break;
//         }
//     }
//     return arr;
// }
// console.log(copyWithin([2,4,6,8], 1));
//
//
// console.log([2,4,6,8].copyWithin(1))

let max = function (arr) {
    let max = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === undefined){
            continue;
        }
        if( arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

let min = function (arr) {
    let min = Infinity;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === undefined){
            continue;
        }
        if( arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}
let values = [ undefined, 4 ];
console.log(min(values));


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



// let www =  [1,2,3,4];
//
// const f = (arr,n) =>{
//     let a = [];
//     let k = 0;
//     if( n > 0){
//         for (let i = 1; i < arr.length; i++) {
//             a.push(arr[i]);
//         }
//         a[a.length] = arr[0];
//         return f(a,n-1);
//     }
//     return arr;
//
// }
// console.log(f(www,6));

//
// let f = (arr,...args) =>{
//     const obj = {};
//     for (let i = 0; i <arr.length; i++) {
//         if(Array.isArray(arr[i])){
//             obj[(arr[i][0])] = arr[i][1]
//
//         }
//     }
//     return obj;
// }



// let object = {key: 'value',key1:'value1'};
// const f = (obj) => {
//     let result = {};
//     let keys = Object.keys(obj);//['key','key1']
//     let values = Object.values((obj));
//     for (let i = 0; i < keys.length; i++) {
//         result[obj[keys[i]]] = keys[i];
//     }
//     return JSON.stringify(result,undefined,2);
// }
// console.log(f(object));


// const flatten = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         if(Array.isArray(array[i])){
//              flatten(array[i]);
//         }else{
//             resArr.push(array[i]);
//         }
//     }
//     return  resArr;
// }
// const data = [1, 2,[1,2,3,4],3, 4, [5]];
// console.log(flatten(data)); // [1, 2, 3, 4, 5]

// const chunk = (arr, size) => {
//        let matrix = [];
//        let k = -1;
//        for (let i = 0; i < arr.length; i++) {
//            if (i % size === 0){
//                k++;
//                matrix[k] = [];
//            }
//            matrix[k].push(arr[i]);
//        }
//        return matrix;
// }
// const data = [1, 2, 3, 4, 5, 6, 7];
// console.log(chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7]]
// console.log(chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7]]



// 2) write a function that accepts students array and returns another array with the following structure;
// const studentsArray = [
//     {
//         name: 'Armen',
//         age: 20,
//         gpa: 3,
//         grades: [1,50,30,55,88,100]
//     },
//     {
//         name: 'Anna',
//         age: 28,
//         gpa: 4,
//         grades: [1,3,5,7]
//     },
//     {
//         name: 'Kim',
//         age: 24,
//         gpa: 1,
//         grades: [6,88,5,99]
//     }
// ]
//
// const structureExample = {
//     name: 'Kim', // Whatever students name is
//     age: 24, // whatever age is
//     gpa: 1, // whatever gpa is
//     grades: [6,88,5,99], // whatever the grade is
//     averageGrade: 138//  calculated averageGrade for every student please use reduce method
// }
//
// const avarege = (arr) => {
//    return arr.map(function (value1) {
//        let avarage ;
//        let sum = (value1.grades).reduce(function (aggr, currentValue, currentIndex) {
//            return aggr + currentValue;
//        })
//        avarage = sum/(value1.grades).length;
//        Object.defineProperty(value1,"avarage",{
//            value: avarage,
//            writable: true,
//            enumerable: true,
//            configurable:true
//        })
//        return value1;
//    })
// }
// console.log(avarege(studentsArray));
