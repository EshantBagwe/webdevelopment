// Arithmetic Operator
// let a =5;
// let b =3;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);

// unary Operator
//  a = a+1;
// a++;
// console.log(a);
// ++a
// console.log(a);
// b--;
// console.log(b);

//Assignment Operators
// let a=5;
// let b=2;
// a+=4;

// comparision Operators
// console.log("a == b",a!=b);
// Logical Operators
// let cond1 = a>b;
// let cond2 = a==b;
// console.log(cond1 && ! cond2);

//Conditional Statements

// let age = 25;
// let mode = "dark"
// let color;
// if(mode ==="dark"){
//     color = "Black"
// }else{
//     color = "white"
// }
// console.log(color);
// if(age>18){
// console.log("You can Vote");
// }

// if(age<18){
//     console.log("you Cannot vote");
// }

// let num = 10;
// if(num%2 === 0){
// console.log(num,"is even");
// }else{
// console.log(num,"is odd");
// }

// Ternary Operator

// let age =22;
// let result = age>=18 ?"adult":"not adult";
// console.log(result);

// prompt
// prompt("hello!");
// console.log(prompt);
//  Q1
// let num = prompt("Enter a Number:")
// if(num%5===0){
//     console.log(num,"is a multiple of 5");
// }else{
//     console.log(num,"not a multiple of 5");
// }

// Q2

// let marks = 0;
// let grade;
// if(marks>=90 && marks<=100){
//     grade="A"
// }else if(marks>=79 && marks<=89){
//     grade = "B"
// }else if(marks>=60 && marks<=69){
//     grade = "C"
// }else if(marks>=50 && marks<=59){
//     grade ="D"
// }else if(marks===0 && marks<=49){
// grade= "F"
// }
// console.log("according to entered marks",marks,"your grade is",grade);

// practice question 1

// let a = prompt("Enter no 1:");
// let b = prompt("Enter no 2:");
// if(a<=b){
//     console.log("The smallest no is : ",a);
// }
// if(a>=b){
//     console.log("The smallest no is : ",b);
// }

// practice question 2

// let year = prompt("Enter a year : ");
// console.log(year);
// if(year%4==0){
//     if(year%100==0){
//         if(year%400==0){
//             console.log(year,"is a leap year")
//         }else{
//             console.log(year,"is not a leap year");
//         }
//     }else{
//         console.log(year,"is not a leap year");
//     }
// }else{
//     console.log(year,"is not a leap year");
// }

// practice question 3
// let a = 13;
// console.log("Enter no a:",a);
// let b = 24;
// console.log("Enter no b:",b);
// a=a+b;
// b=a-b;
// a=a-b;
// console.log("a=",a);
// console.log("b=",b);

// practice question 4
// let value = prompt("enter value")
// let num = value%2;
// switch (num){
//   case 0:
//     console.log(`${value} is a even no`);
//     break;
//   case 1:
//     console.log(`${value} is a odd no`);
//     break; 
// }

// practice question 5

// let marks = prompt("Enter your marks:");
// if(marks>=80){
//     grade='A';
//     console.log("your grade is",grade);
// }else if(marks>=70 && marks<80){
//     grade='B';
//     console.log("your grade is",grade);
// }else if(marks>=60 && marks<70){
//     grade='C';
//     console.log("your grade is",grade);
// }else if(marks>=50 && marks<60){
//     grade='D';
//     console.log("your grade is",grade);
// }else if(marks>=35 && marks<50){
//     grade='E';
//     console.log("your grade is",grade);
// }else if(marks<35){
//     grade='F';
//     console.log("your grade is",grade);
// }