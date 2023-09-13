// Types of Statments And LOOPS.....
// 1. If..Else
// Conditional Ternary operator
// 2. Switch Statement
// 3. While Loop
// 4. Do-While Loop
// 5. For Loop
// 6. For in Loop
// 7. For of Loop










// 1. If..Else Statments.......

// var tomr = 'sunny';

//  if(tomr == 'rain'){
//     console.log("Umbrella");
//  }
//  else{
//     console.log('No Umbrella');
//  }

 // Challange Time - WAP that works out whether if a given year is a leap year or Not....................

//  var year = 2400;

// // My code..

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


// // Ternary Operator........

// var leap_year = (( year%4 === 0 ) && (year%400 === 0  ||  year%100 != 0)) ? (`Year ${year} is the Leap Year`) : (`Year ${year} is not the Leap Year`);

// console.log(leap_year);









//1.2... Conditional (ternary) Operator
// The conditional (ternary) operator is the only JavaScript Operator that takes three operands.

// var age = 18;
// var vote = (age >= 18) ? 'vote': 'cant vote';
// console.log(vote);
























// 2. Switch_case Statements..........
// Evaluates an expresion, matching the expression's value to a case clause, and executes statements associates with that case.


// 1st without break statement
// Find the Area of circle, triangle and rectangle?
   

//   (If_Else_Statments)......
// var area = 'rectangle';
// var PI=3.142, l=5, b=4, r=3;
// if(area == 'circle'){
//    console.log('The area of circle is : ' + (PI*r*r));
// }else if(area=='triangle'){
//    console.log('The area of Triangle is : ' +(0.5*l*b));
// }else if(area=='rectangle'){
//    console.log('The area of Rectangle is : ' + (l*b));
// }else{
//    console.log('Enter Valid data');
// }


   // Switch case statements...........
// var area = 'triangle';
// var PI=3.142, l=5, b=4, r=3;

// switch(area){
//    case 'circle':
//       console.log('The area of circle is : ' + (PI*r*r));
//    break;

//    case 'triangle':
//       console.log('The area of Triangle is : ' + (0.5*l*b));
//    break;

//    case 'rectangle':
//       console.log('The area of Rectangle is : ' + (l*b));
//    break;

//    default:
//       console.log('Enter Valid data')
// }























// 3. While Loop Statements...............
// The while statement creates a loop that executes a specified statement as long as the test condition evaluate to true.

// var num =0;
// while(num <= 10){        //block scope
//    console.log(num);
//    num++
// }






// 4. DO-While Loop Statements...............

// var num = 0;
// var num =20;
// do{
//    console.log(num);
//    num++
// }while(num <= 10);















// 5. For-Loop Statements...............

// var num = 0;
// for(num=0; num<=10; num++){
//    console.log(num);
// }















// Challange Time - 07..............
// WAP to program to print table

// var tbl = 5;
// for(num=1; num<=10; num++){
//     console.log(`${tbl } * ${num} = ${tbl*num}`);
// }





