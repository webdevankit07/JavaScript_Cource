///?  1: Hoisting in JavaScript
///?  2: Scope Chain
///?  3: Lexical Scoping
///?  4: Use Strict Mode
///?  5: This Keyword
///?  6: Closures in JavaScript
///?  7: What is Asynchronous JavaScript Programming?
///?  8: What is Event Loop?

///!  Hoisting in JavaScript
///? we have a creation phase and execution phase.
///? Hoisting in JavaScrit is a mechanism where variable and functions declaration are moved to the top of their scope before the code execute.

//! for Example:-
// console.log(myName);
// var myName;
// myName = "Ankit Yadav";

//! How it will be in output during creation phase....

// 1: var myName;
// 2: console.log(myName);
// 3: myName = "Ankit Yadav";

///? In ES2015 (a.k.a ES6), hoisting is avoided by using the let keyword instead of var (The other diffrence is that variable declared with let are local to the surrounding block, not the entire function)

///! what is Scope Chain and Lexical Scoping in JavaScript?

///? The Scope chain is used to resolve the value of variable names in JS.
///? scope chain in JS is lexically defined, which means that we can see what the scope chain will be by looking at code.
///? At the top, we have the Global scope, which is the window Object in Browser.
///? Lexical Scoping means Now, the inner function can get access to their parent function variables But the Vice-versa in not true.

// for example :-

// let a = 'Hlww guys.\n';  // global Scope....

// const first = () =>{
//     let b = 'How are you?\n';

//     const second = () =>{
//         let c = 'I am Fine, Thank you.'
//         console.log(a+b+c);
//     }
//     second();
// console.log(a+b+c);   // can't use C.
// }
// first();

///!   Closures in JavaScript   ///
///? A clousre is the combination of a function bundled together (enclosed) with refrences to its surrounding state (the lexial enviroment).
///?  In other words, a clousre gives you access to an outer function's scope from an inner function.
///? In JavaScript, clousre are created every time a function is created, at function creation time.

//*  For examaple....

// const outerFun = (a) =>{
//     let b = 10;
//     const innerFun = () =>{
//         let sum = a+b;
//         console.log(`The Sum of two Number is: ${sum}`);
//     }
//     innerFun();
// }
// outerFun(5);
//* It is same Like Lexical_scoping...

//!  One More Example......

// const outerFun = (a) =>{
//     let b = 10;
//     const innerFun = () =>{
//         let sum = a+b;
//         console.log(`The Sum of two Number is: ${sum}`);
//     }
//     return innerFun;
// }
// let chekclouser = outerFun(5);
// chekclouser();

//////////////!   Synchronous And Asynchronous JavaSCript //////////////////

//! Synchronous JavaScript Program....

// const fun2 = () =>{
//     console.log(`Function 2 is Called`);
// }

// const fun1 = () =>{
//     console.log(`Function 1 is Called`);
//     fun2();
//     console.log(`Function 1 is Called Again`);
// }
// fun1();

///! Asynchronous JavaScript Program....

// const fun2 = () =>{
//     setTimeout(()=>{
//         console.log(`Function 2 is Called`);
//     }, 1000)
// }

// const fun1 = () =>{
//     console.log(`Function 1 is Called`);
//     fun2();
//     console.log(`Function 1 is Called Again`);
// }
// fun1();
