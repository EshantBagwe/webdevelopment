// function --> to add two no

// function sum(a,b){
// parameter are -->  local varibles --> scope
//     add = a+b;
//     return add;
// after return statement nothing can be returned
// }
// let val = sum(12,13);
// console.log(val);

// function sum(a,b){
//     return a+b;
// }
// function mul(a,b){

// }

// arrowFunctions-->part of modern js

// let sum = (a,b)=>{
// console.log(a+b);
// }
// sum(3,4);

// let arrowMul = (x,y)=>{
// return x*y;
// }

// pq 1

// function countVowels(str) {
//   let count = 0;
//   for (let char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   console.log(count);
// }
// countVowels("Eshant");

// pq2 - using arrow fucntion

// const countVow = (str)=>{
//     let count = 0;
//     for(let char of str){
//         if(char ==="a"||
//         char==="e"||
//         char==="i"||
//         char==="o"||
//         char==="u"){
//             count++;
//         }
//     }
//     console.log(count);
// }
// countVow("Bagwe");


// forEach loop --> method 
// let arr =["pune","Mumbai","Delhi"];
// arr.forEach((str,idx,arr)=>{  /*call back*/
//     console.log(str.toUpperCase(), idx,arr);
//     }
// )

// pq3
// let arr = [1,2,3,4,52,6];
// arr.forEach((num)=>{
// console.log(num**2);
// })

// another way to use arrow funciton way to pass call back
// let nums = [34,335,56];
// let calcSquar = (num)=>{
//     console.log(num*num);
// };
// nums.forEach(calcSquar);

// map
// let arr = [1,2,34,5];
// let newArr = arr.map((val)=>{
//    return val**2;
// });
// console.log(newArr);


// Filter

// let arr = [12,14,57,2828,889,67];
// let newArr = arr.filter((val)=>{
//     return val%2===0;
// });
// console.log(newArr,"Even Elements");

// Reduce
// let arr = [1,2,4,5,5];
// const output = arr.reduce((res,curr)=>{
//     return res+curr;
// });
// console.log(output)

//  pq - 6

// q1
// let studentMarks = [56,78,98,56,69,96,90];
// let Merit = studentMarks.filter((marks)=>{
//     return marks>90;
// });
// console.log(Merit);

// q2
let n = prompt("Enter Number : ");
let arr = [];
for(let i=1;i<n;i++){
    arr[i-1]=i;
}
let sum = arr.reduce((res ,curr)=>{
return res+curr;
});
console.log("sum = ",sum);
let fact = arr.reduce((res ,curr)=>{
    return res*curr;
    });
console.log("Fact =",fact);