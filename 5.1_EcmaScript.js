// ***********************************************************************************
////////////////////////////////////// ES6(2015) /////////////////////////////////////
// ***********************************************************************************

//// 1. Let and Const............ [Block Scope]
//// 2. Template Literals .......
//// 3. Default Parameters.......
//// 4. Arrow Function...........
//// 5: Destructuring............
//// 6: Object Properties........
//// 7: Spread Operators.........









//// ................ 1.Let and Const-[Block Scope]  ................... ////

// var => Global Scope
// let and const => Block Scope







//// .................... 2. Template Literals  ........................ ////

// for(num=1; num<=10; num++){
//     let tbl = 5;
//     console.log(`${tbl } * ${num} = ${tbl*num}`); // Template literals
// }










//// .................... 3. Default Parameters ......................... ////

// Default parameters allow named parameters to be initialized with default values if no value or undefined is passed.

// function mult(a,b=4){
//     return a*b;
// }
// console.log(mult(5));
// console.log(mult(5,10));
























//// ...................... 4. Arrow Function ........................... ////


// => 1: Normal.......

// function sum(){
//     let a=5, b=10;
//     const  add=a+b;
//     return `The sum of two number is ${add}`
// }
 
// console.log(sum());


// => 2: Arrow function......

// const sum = () => `Total Number ${(a=26)+(b=20)}`;
// const sum1 = (a,b) => `Total Number ${a+b}`;

// console.log(sum(20,25));
// console.log(sum1(20,25));
























//// ...................... 5: Destructuring in ES6 .......................... ////


// => 1: Array Destructuring...........
//|
// const myBioData = ['Ankit', 'Yadav', 22];

// let myFName = myBioData[0];
// let myLName = myBioData[1];
// let myAge = myBioData[2];

// let [myFName, myLName, myAge] = myBioData;

// console.log(myFName);
// console.log(myLName);
// console.log(myAge);

// we can add value too....

// let [myFName, myLName, myAge, myDegree="B.sc"] = myBioData;

// console.log(myFName);
// console.log(myLName);
// console.log(myAge);
// console.log(myDegree);





// => 2: Object Destructuring..........

// const myBioData = {
//     myFname : "Ankit",
//     myLname : "Yadav",
//     myAge : 22,
// }

// // let myFname = myBioData.myFname;
// // let myLname = myBioData.myLname;
// // let myAge = myBioData.myAge;

// let {myFname, myLname, myAge, myDegree = "B.sc"} = myBioData;

// console.log(myFname);
// console.log(myLname);
// console.log(myAge);
// console.log(myDegree);
























//// ......................6: Object Properties in ES6........................////

// => 1: We can now use Dynamic Properties.....

// let myName = "Ankit";
// const myBioData = {
//     [myName] : "Hello how are You",
//     [20+2] : "This is my Age"
// }
// console.log(myBioData);





// => 2: No need to write key and value, if both are same.

// let myName = "Ankit Yadav";
// let myAge = 22;

// // const myBioData = {
// //     myName : myName,
// //     myAge : myAge
// // }
// //|
// const myBioData = {myName,myAge}

// console.log(myBioData);
























//// ......................7:Spread Operators in ES6..........................

// const colors = ['red', 'green', 'blue'];
// // const myColors = ['red', 'green', 'blue','yellow','black'];

// // // using spread operator.....

// const myFavColors = [...colors,'yellow','black'];
// console.log(myFavColors);































































// ***********************************************************************************
////////////////////////////////////// ES7(2016) /////////////////////////////////////
// ***********************************************************************************

//// 1: Array.prototype.include
//// 2: EXponential Operator

//// ......................1: Array.prototype.include in ES7..........................

// const myColors = ['red', 'green', 'blue','yellow','black'];
// console.log(myColors.includes('red'));
// console.log(myColors.includes('green'));
// console.log(myColors.includes('Pink'));
// console.log(myColors.includes('blue'));
// console.log(myColors.includes('Purple'));
// console.log(myColors.includes('yellow'));
// console.log(myColors.includes('black'));










//// .....................2: EXponential(**) Operator in ES7..........................

// console.log(2**3);  // power Operator...
// console.log(5**3);
// console.log(7**2);
// console.log(7**3);







































// ***********************************************************************************
////////////////////////////////////// ES8(2017) /////////////////////////////////////
// ***********************************************************************************

//// 1: String Padding
//// 2: Object.values()
//// 2: Object.entries()




//// ..........................1: String Padding in ES8..............................

// const fName = "Ankit";
// console.log(fName);
// console.log(fName.padEnd(10));
// console.log(fName.padStart(10));










//// ..........................2/3: Object.values/entries() in ES8........................

// const person = {name: "Ankit", age:22};
// console.log(Object.values(person));
// console.log(Object.entries(person));






































// ***********************************************************************************
////////////////////////////////////// ES9(2018) /////////////////////////////////////
// ***********************************************************************************

//// 1: rest/spread Opeartor....................

// const person = {name: "Ankit", age:22};
// const sPerson = {...person, lname : "Yadav"};
// console.log(person);
// console.log(sPerson);





































// ***********************************************************************************
////////////////////////////////////// ES10(2019) ////////////////////////////////////
// ***********************************************************************************

//// 1: flatten Array
//// 2: Object.formEntries()




//// ..........................1: flatten Array) in ES10..............................

// const arr = [
//     ['zone_1', 'zone_2'],
//     ['zone_3', 'zone_4'],
//     ['zone_5', 'zone_6'],
//     ['zone_7', 'zone_8'],
//     ['zone_9', ['zone_10','zone_20','zone_30', ['zone_1', 'zone_2'],
//     ['zone_3', 'zone_4'],
//     ['zone_5', 'zone_6'],
//     ['zone_7', 'zone_8'],
//     ['zone_9', ['zone_10','zone_20','zone_30']]]]
// ]
// console.log(arr.flat(Infinity));










//// ..........................2: Object.fromEntries() in ES10..............................

// const person = {name: "Ankit", age:22};
// console.log(Object.entries(person));
// console.log(Object.fromEntries(Object.entries(person)));
// console.log(person);




































// ***********************************************************************************
////////////////////////////////////// ES11(2020) ////////////////////////////////////
// ***********************************************************************************

//// 1: Bigint......

// let oldNum = Number.MAX_SAFE_INTEGER;
// console.log(oldNum);
// console.log(9007199254740991n + 49n);

// let newNumber = 9007199254740991n + 49n;
// console.log(newNumber);
// console.log(typeof newNumber);
  

