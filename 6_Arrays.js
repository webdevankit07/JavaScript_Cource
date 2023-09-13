// Arrays in JavaScript......
// When we use var, we can stored only one values at a time. when we feel like storing multiple values in one variable then instead of var, we will use an Array.
// In JavaAcript, we have an Array class, and arrays are the prototype of this class.

// example....

//INDEX Number:  [  0        1        2         3         4  ]
// let myFriends = ['Ankit', 'Kumar', 'Yadav', 9304661037, true]; // Array....
// console.log(myFriends);










//// ********************************************************************************
////  ............ 1_traversal in array( Navigate through an Array ............. ////
//// ********************************************************************************

//if we want to get the single data at a time and also if we want to change the data....
//|
// let myFriends = ['Ankit', 'Kumar', 'Yadav', 9304661037, true];
// console.log(myFriends[0]);  // variable_name[Index Number]..
// console.log(myFriends[1]);
// console.log(myFriends[2]);
// console.log(myFriends[3]);
// console.log(myFriends[4]);



//if we want to check the length of elements of an array.........
// |
// let myFriends = ['Ankit', 'Kumar', 'Yadav', 9304661037, true];
// console.log(myFriends.length);
// console.log(myFriends[myFriends.length - 1]);





//// ....................... we use loop to navigate...................... ////

// ......... for loop ............ //
//|
// let myFriends = ['Ankit', 'Kumar', 'Yadav', 9304661037, true] 
// for(i=0; i<myFriends.length; i++){
//     console.log(myFriends[i]);
// }
    
    
    
// ...... for-in loop ...... //
// let myFriends = ['Ankit', 'Kumar', 'Yadav', 9304661037, true] 
// for( let elements in myFriends ){
//     console.log(elements);
// }


// ......... for-of loop .......... //
// let myFriends = ['Ankit', 'Kumar', 'Yadav', 9304661037, true] 
// for( let elements of myFriends ){
//     console.log(elements);
// }


// ....... forEach() Loop ........... //
// Calls a function for each elements in the array.

// let myFriends = ['Ankit', 'Kumar', 'Yadav', 9304661037, true] 
// myFriends.forEach(function (element, index, array){        //Normal Function
//     console.log(`${element} ->   index no : ${index} ->    Array - [${array}]`);
// })
// |

// Fat-Arrow Function...
// let myFriends = ['Ankit', 'Kumar', 'Yadav', 9304661037, true] 
// myFriends.forEach((element, index, array) => {
//     console.log(`${element} ->   index no : ${index} ->    Array - [${array}]`);
// })


































//// ********************************************************************************
////  ................... 2. Searching and Filter in Array .................... ////
//// ********************************************************************************



////  ................... 1: Searching an array .................... ////


// ..... 1: Array.prototype.indexOf() ....... //
//
// returns the first (least) index of an element within the array equal to an element,  or -1 if none is found. It search the element from the 0th index number.

// let myFriends = ['Ankit', 'Kumar', 'Yadav', 9304661037, true];
// console.log(myFriends.indexOf('Yadav'));
// console.log(myFriends.indexOf('yadav'));  // case_sensitive
// console.log(myFriends.indexOf('Yadav', 1));
// console.log(myFriends.indexOf('Yadav', 3));



// ..... 2: Array.prototype.lastindexOf() ....... //
// 
// Return the last (greatest) index of an element eithin the array equal to an element, or -1 if none is found. It search the element last to first.

// let myFriends = ["Ankit", "Kumar", "Yadav", 9304661037, true];
// console.log(myFriends.lastIndexOf('Yadav'));
// console.log(myFriends.lastIndexOf(true , 3));
// console.log(myFriends.lastIndexOf('Yadav', 1));
// console.log(myFriends.lastIndexOf('Yadav', 3));



// ..... 3: Array.prototype.includes() ....... //
//
// Determins whether the array contains a value, returning true or false as appropriate.

// let myFriends = ['Ankit', 'Kumar', 'Yadav', 9304661037, true];
// console.log(myFriends.includes("Ankit"));
// console.log(myFriends.includes("ankit"));  // case_sensitive...
// console.log(myFriends.includes("Ankit",2));
// console.log(myFriends.includes("Amit"));
// console.log(myFriends.includes("Kumar"));
// console.log(myFriends.includes("Yadav"));
// console.log(myFriends.includes("yadav"));  // case_sensitive...
// console.log(myFriends.includes(9304661037));
// console.log(myFriends.includes(9304661037, myFriends.length -1));










////  ................... 2: Filtration in an array .................... ////

// ..... 1_Array.prototype.find() ....... //
//
// arr.find(callback(element[, index[, array]])[, thisArg])
// Returns the found element in the array, if some element in the array satisfies the testing function, or undefined if not found. Only problems is that it returns only one element.

// const prices = [100,200,300,400,500,600];
// // price < 400
// console.log(prices.find((currVal,index,arr) => {
//     return currVal < 500;
// }));
// // shortV
// console.log(prices.find((currVal,index,arr) => currVal < 500));
// console.log(prices.find((currVal,index,arr) => currVal > 1000));



// ..... 2_Array.prototype.findIndex() ....... //
//
// Returns the found index in the array, if an element in the array satisfies the testing function, or -1 if not found.

// const prices = [700,600,100,200,300,400,500];
// console.log(prices.findIndex((currVal) => currVal < 400 )); 
// console.log(prices.findIndex((currVal) => currVal > 1000));




// ..... 3_Array.prototype.filter() ....... //
// 
// Returns a new array containing all currVal of the calling array for which the provided filtering function returns true.

// const prices = [100,200,300,400,500];
// // price < 500
// console.log(prices.filter((currVal,index,arr) => currVal < 500));
// console.log(prices.filter((currVal,index,arr) => currVal > 500));











































//// ********************************************************************************
////  ..................... 3. Sort and compare in Array ...................... ////
//// ********************************************************************************

// ..... 1_Array.prototype.sort() ....... //
// 
// The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequence of UTF-16 code units values.

// let month = ['Mach', 'Jan', 'April', 'Feb', 'Dec', 'Nov'];
// console.log(month.sort());


// let array1 = [1, 30, 4, 21, 100000, 99];
// console.log(array1.sort());



































//// ********************************************************************************
////  ............................ 4. Perform CRUD ............................. ////
//// ********************************************************************************

// ........... 1_Array.prototype.push() ........... //
// 
// The push() method adds one or more elements to the end of an array and returns the new length of the array.

// const names = ['Ankit', 'Kumar', 'Yadav'];
// console.log(names);
// console.log(names.length);

// names.push('Yaduvansi', 'Amit', 'kumar', 'Yadav')
// console.log(names);
// console.log(names.length);



// ........... 2_Array.prototype.unshift() ........... //
// 
// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

// const names = ['Ankit', 'Kumar', 'Yadav'];
// console.log(names);
// console.log(names.length);
// //|
// names.unshift('Yaduvansi', 'Amit', 'kumar', 'Yadav');
// console.log(names);
// console.log(names.length);


// 2nd_Example........
// const num = [1,2,3,5];
// console.log(num);
// console.log(num.length);
// // |
// num.unshift(4,6);
// console.log(num);
// console.log(num.length);




// ........... 3_Array.prototype.pop() ........... //
// 
// The pop() method removes the last element from an array and returns that element. This method change the length of the array.

// const plants = ['brocoli', 'cauliflower', 'kale', 'tomato', 'cabbage'];
// console.log(plants);
// console.log(plants.length);
// //|
// console.log(plants.pop()) // Eleminate the last element from array.
// console.log(plants);
// console.log(plants.length);




// ........... 4_Array.prototype.shift() ........... //
// 
// The shift() method removes the first element from an array and returns that element. This method change the length of the array.

// const plants = ['brocoli', 'cauliflower', 'kale', 'tomato', 'cabbage'];
// console.log(plants);
// console.log(plants.length);
// //|
// console.log(plants.shift()) // Eleminate the first element from array.
// console.log(plants);
// console.log(plants.length);









// 1: Add Dec at the end of an array?
// 2: What is the return Value of Splice method?
// 3: Update march to March (Update)?
// 4: Delete June from an array?


// ********************** Most Important ****************************** //
// ........... 5_Array.prototype.splice() ........... //
// 
// Adds and/or removes elements from an array.


// sol1:-
// const months = ['Jan', 'march', 'April', 'June', 'july'];
// console.log(months);
// months.splice(months.length,0,'Dec');
// console.log(months);

// var march = months.indexOf('march');  // Deleting march
// months.splice(march,1);
// console.log(months);



// // sol2:-
// const months = ['Jan', 'march', 'April', 'June', 'july'];
// console.log(months);
// console.log(months.splice(months.length-1,1,'Dec')); // return Value....
// console.log(months);



// sol3:-
// const months = ['Jan', 'march', 'April', 'June', 'july'];
// console.log(months);
// const indexOfMonth = months.indexOf('march');

// if(indexOfMonth != -1){
//     const updateMonth = months.splice(indexOfMonth,1,'March');
//     console.log(months);
//     console.log(updateMonth);
// }else{
//     console.log('No Such Data Found');
// }



// sol4:-
// const months = ['Jan', 'march', 'April', 'June', 'july'];
// console.log(months);
// const indexOfMonth = months.indexOf('June');

// if(indexOfMonth != -1){
//     const udateMonth = months.splice(indexOfMonth,1);
//     console.log(months);
//     console.log(udateMonth);
// }else{
//     console.log('No Such Data Found');
// }


// Another Question :-  Find April And delete All forword data with april.

// const months = ['Jan', 'march', 'April', 'June', 'july'];
// console.log(months);
// const indexOfMonth = months.indexOf('April');

// if(indexOfMonth != -1){
//     const udateMonth = months.splice(indexOfMonth,Infinity);
//     console.log(months);
//     console.log(udateMonth);
// }else{
//     console.log('No Such Data Found');
// }



































//// ********************************************************************************
////  .......................... 5.Map() - Reduce() ........................... ////
//// ********************************************************************************


// ........... 1_Array.prtotype.map() ........... //
//  
//  let newArray = arr.map(callback(currenValue[, index[, array]])){
// return element for newArray, after executing something} [, thisArg]);
// 
// Returns a new array containing the results of calling a function on every element in this array.

// const array = [1,4,9,16,25];
// // num > 9
// let newArr = array.map((element,index,arr) => {
//     return element > 9;
// })
// console.log(array);
// console.log(newArr);

// console.log(array.map((elem,index,arr) => {
//     return `Index no = ${index} and the value is ${elem} belongs to  [${arr}]`
// }));













/////  *************************  Challange Time - 09 ************************** /////

// 1: Find the square root of each element in an array.
// sol1:- 
// let arr = [25, 36, 49, 64, 81];

// let seqroot = arr.map((elem) => Math.sqrt(elem));
// console.log(seqroot);



// 2: Multiply each element by 2 and return only those elements which are greater than 10?
// |
// let arr = [2, 3, 4, 6, 8];
// let arr2 = arr.map((elem) => elem * 2).filter((elem) => elem > 10).reduce((accumulator,index) => accumulator + index);
// console.log(arr2);
///// **************************************************************************** /////
















// ........... 2_Array.prtotype.reduce() ........... //
// 
// flatten an array means to convert the 3d or 2d array into a single dimentional array.
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.
// The reducer function takes four arguments:
//|
// Accumulator
// current Value
// Current Index
// Source  Array


let arr = [5, 6, 2];
let sum = arr.reduce((Accum, elem, index, arr) => Accum + elem , 7);
console.log(sum);




// How to flatten an array 
// converting 2d and 3d array into one dimention array.

// const arr = [
//     ['zone_1', 'zone_2'],
//     ['zone_3', 'zone_4'],
//     ['zone_5', 'zone_6'],
//     ['zone_7', 'zone_8']
// ];

// let flatArr = arr.reduce((accum,elem) => accum.concat(elem));
// console.log(flatArr);






















