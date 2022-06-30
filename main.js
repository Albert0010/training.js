//Array.reduce IMPORTANT
// let array = [1,2,3,4,5,6,7,8,9];
// const reduce = (arr,func,aggregator) => {
//     for (let i = 0; i < arr.length; i++) {
//         if ( aggregator === undefined){
//             aggregator = arr[0];
//             i++;
//         }
//         aggregator = func(aggregator,arr[i]);
//     }
//     return aggregator;
// }
//
// let q = reduce(array,function (prev,val) {
//    return prev + val;
// },);
//
// console.log(q);



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

//Array.filter
// let array = [1,2,3,4,5,6,7,8,9];
// const filter = (arr,func) => {
//     let res = [];
//     for (let i = 0; i < arr.length; i++) {
//         if(func(arr[i])){
//             res.push(arr[i]);
//         }
//     }
//     return res;
// }
//
// console.log(filter(array,function (val) {
//     return val % 2 === 0;
// }))


//Array.reduce IMPORTANT
// let array = [1,2,3,4,5,6,7,8,9];
// const reduce = (arr,func,aggregator) => {
//     for (let i = 0; i < arr.length; i++) {
//         if ( aggregator === undefined){
//             aggregator = arr[0];
//             i++;
//         }
//         aggregator = func(aggregator,arr[i]);
//     }
//     return aggregator;
// }
//
// let q = reduce(array,function (prev,val) {
//    return prev + val;
// },);
//
// console.log(q);