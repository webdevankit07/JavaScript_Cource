///?  1: Event Propagation (Event Bubbling and EVent Capturing)
///?  2: Higher Order Function
///?  3: Callback Function
///?  4: Function Currying (We will see after Async JS section)
///?  5: AJAX call using XMLHttps request
///?  6: BOUNS SEction JASON
///?  7: Fetch API
///?  8: Promises
///?  9: Async-Await
///?  10: Error Handling in JS

// ************************************************************************************
///!        1: Event Propagation (Event Bubbling and EVent Capturing)    ///
// ************************************************************************************

///! What is Event Bubbling?
//? With Event BUbbling, the event is first captured and handled by the innermost element and then propagated to outer elements.

///! What is Event Capturing ?
//? With Event Capturing, the event is first captured by the outermost element and propagated to the innerelements.
//? Capturing is also called "trickling", which helps remember the propagation order.

// ************************************************************************************
///!            2: Higher Order Function      ///
// ************************************************************************************

///? Function which takes anathor function as an argments is called HOF wo function jo dusre function ko as an argument accept krta hai use HOF

// ************************************************************************************
///!    3: Callback Function    ///!
// ************************************************************************************

///? function which get passed as an argument to another function is called CBF
///? A callback function is a function that is passed as an argument to anathor function, to be "called back" at a later time.
///? jis bhi function ko hum kisi or function ke under as an arguments passed krte hai then usko hum callBack fucntion bolte hain

///! We need to create Calculator.......

// const add = (a,b) =>{
//     return a+b;
// }

// const subs = (a,b) =>{
//     return a-b;
// }

// const mult = (a,b) =>{
//     return a*b;
// }

// const div = (a,b) =>{
//     return a/b;
// }

// const Calculator = (a,b,operator) =>{
//     return operator(a,b);
// }

// console.log(Calculator(5,2,add));
// console.log(Calculator(5,2,subs));
// console.log(Calculator(5,2,mult));
// console.log(Calculator(5,2,div));

// **********************************************************************************
///!   4: Function Currying  ///
// **********************************************************************************

// sum = (num1) => {
//     console.log(num1);
//     return (num2) => {
//         console.log(num1, num2);
//         return (num3) => {
//             console.log(num1, num2, num3);
//             console.log(num1 + num2 + num3);
//         };
//     };
// };
// sum(5)(3)(8);

///! Fat-Arrow Function:-

// sum = (num1) => (num2) => (num3) => console.log(num1 + num2 + num3);
// sum(5)(3)(8);

// *********************************************************************************
///! 5: Call_Back Hell !//
// *********************************************************************************
// setTimeout(() => {
//     console.log(`1: Works is Done.`);
//     setTimeout(() => {
//         console.log(`2: Works is Done.`);
//         setTimeout(() => {
//             console.log(`3: Works is Done.`);
//             setTimeout(() => {
//                 console.log(`4: Works is Done.`);
//                 setTimeout(() => {
//                     console.log(`5: Works is Done.`);
//                     setTimeout(() => {
//                         console.log(`6: Works is Done.`);
//                     }, 1000);
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

// **********************************************************************************
//!    6: JSON ( Bonus Section ) !   /
// **********************************************************************************

///? JSON.stringify turns a JavaScript object into JSON text and stores that JSON text in a string,eg:
// var my_object = {key_1:"some text", key_2:true, key_3:5};
// console.log(my_object);

// var object_as_string = JSON.stringify(my_object);
// // "{key_1:"some text", key_2:true, key_3:5}"

// console.log("JSON.stringify");
// console.log(object_as_string);
// console.log(typeof(object_as_string));

///? JSON.parse turns a string of JSON text into a JavaScript object,eg:

// var object_as_string_as_object = JSON.parse(object_as_string);

// console.log("JSON.parse");
// console.log(object_as_string_as_object);
// console.log(typeof(object_as_string_as_object));
