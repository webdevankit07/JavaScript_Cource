// Challange Time - 02...............................................
// console.log(10 + "20");
// console.log(9 - "5");
// console.log('java' + 'Script');
// console.log('' + '');
// console.log('' + 0);
// console.log('Vinod' - 'Thapa');
// console.log(true + true);
// console.log(true + false);
// console.log(false + true);
// console.log(false - true);

























// Challange Time - 03.....................................
// console.log(NaN === NaN);
// console.log(Number.NaN === NaN);
// console.log(isNaN(NaN));
// console.log(isNaN(Number.NaN));
// console.log(Number.isNaN(NaN));






















// Challange Time - 04................................
//sol 01
// console.log(3**3); // ( **, Exponatiation operator)
// console.log(3**8); // ( **, Exponatiation operator)
// console.log(9**3);


// //sol 02
// console.log(5 + " Ankit");
// console.log(5 - " Ankit"); // NaN





//sol 3 - WAP to swipe two numbers....

// var a = 5;
// var b = 10;

// var c = b;
// b = a;
// a = c;
// console.log("The value of a is : " + a);
// console.log("The value of b is : " + b);




//sol 4 - WAP to swipe two numbers without using third variables....

// var a = 5;
// var b = 10;

// a = a + b; // 15
// b = a - b; // 5
// a = a - b; // 10


// console.log("The value of a is : " + a);
// console.log("The value of b is : " + b);





















// Challange Time - 05. WAP that works out whether if a given year is a leap year or Not....................


// // My code..
// var year = 2000;

// if(( year%4 === 0 ) && (year%400 === 0  ||  year%100 != 0)){
//     console.log('Year ' + year + ' is the Leap Year');
// }else{
//     console.log('Year ' + year + ' is not the Leap Year');
// }


// // Thapa Code...
// if(year%4===0){
//     if(year%100===0){
//         if(year%400===0){
//             console.log('Year ' + year + ' is the Leap Year');
//         }
//         else{
//             console.log('Year ' + year + ' is not the Leap Year');
//         }
//     }
//     else{
//         console.log('Year ' + year + ' is the Leap Year');
//     }
// }
// else{
//     console.log('Year ' + year + ' is not the Leap Year');
// }















// Challange Time - 06. what is truthy and falsy value in JavaScript.
// We have total 5 fasly value in JavaScript ;- 
// [0, "", null, NaN,undifined False]  is falsy Value.

// if(score = 0){
//     console.log('yay, We loos The Game');
// }
// else{
//     console.log('yay, We won The Game');
// }






















// Challange Time - 07..............
// WAP to program to print table

// for(num=1; num<=10; num++){
//     var tbl = 5;
//     // console.log(tbl + ' * ' + num + ' = ' + (tbl*num));
//     console.log(`${tbl } * ${num} = ${tbl*num}`);
// }















































// ........................... String in JavaScript .........................











// Challange Time - 12..............

// Return the unicode of the last character in a string

// let str = 'HELLO WORLD';
// console.log(str.charCodeAt(str.length-1));