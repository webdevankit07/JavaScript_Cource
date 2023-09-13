///// **************************************************************************** /////
//// ************************ Object-Oriented Programming ************************ ////
///// **************************************************************************** /////













///// **************************************************************************** /////
//// ........................... how to creat Object ? ........................... ////
///// **************************************************************************** /////



//// ................................ 1: First way ............................... ////

// let bioData = {
//     myName : "Ankit Kumar Yadav",
//     myAge : 22,
//     getData : () => {
//         console.log(`My name is ${bioData.myName} and my age is just ${bioData.myAge}.`);
//     }
// }
// console.log(bioData);
// console.log(bioData.myName);
// console.log(bioData.myAge);
// bioData.getData();




















//// .......... 2: 2nd way [No need to write function as well after es6] ......... ////

// let bioData = {
//     myName : "Ankit Kumar Yadav",
//     myAge : 22,
//     getData(){
//         console.log(`My name is ${bioData.myName} and my age is just ${bioData.myAge}`);
//     }
// }
// console.log(bioData.myName);
// console.log(bioData.myAge);
// bioData.getData();

















//// ....... 3: 3rd way [What if we want object as a value inside an object] ...... ////


// let bioData = {
//     myName : {
//         mName : "Ankit Kumar Yadav",
//         cName : "Factorious World",
//     },
//     myAge : 22,
//     getData(){
//         console.log(`My name is ${bioData.myName.mName} and my age is just ${bioData.myAge}`);
//     }
// }
// console.log(bioData.myName.mName);
// console.log(bioData.myName.cName);
// console.log(bioData.myAge);
// console.log(bioData.getData());
// // console.log(bioData);





















// What is This Object?.............


// 1: Example 1....
// console.log(this.alert("Ankit Kumar"));



// 2: Example 2....
// myName = () =>{
//     console.log(this);
// }
// myName();




// Example 3....

// var myNames = 'Ankit';
// myName = () =>{
//     console.log(this.myNames);
// }
// myName();




// // Example 4......

// const obj = {
//     myAge : 22,
//     myName(){
//         console.log(this.myAge);
//     }
// }
// obj.myName();




// // Example 5......
// this object will not work with arrow function......
// const obj = {
//     myAge : 22,
//     myName : () => {
//         console.log(this);
//     }
// }
// obj.myName();





























//// Interview Questions.........

let bioData = {
    myName : {
        rName : "Ankit Kumar Yadav",
        cName : "Factorious World"
    },
    myAge : 22,
    getData(){
        console.log(`My name is ${this.myName.rName} and my channel name is ${this.myName.cName}. Now I am just ${this.myAge}.`);
    }
}
bioData.getData();
