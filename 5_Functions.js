// *********************
// Functions Defination.
// *********************

// Before we use a function , we need to define it.
// A function definition (also called a function declaration, or function statement) consist of the function keyword, followed by:












//// ************************* 1.The name of the function *************************

// A list of parameters to the function, enclosed in parantheses and separated by commas, The JavaScript statements that define the function, enclosed in curly brackrts,{.....}.


















//// ************************* 2. Calling Function *************************

// Defining afunction does not execute it. A JavaScript function is executed when "Something" invokes it (calls it).
// |
// |
// |
// function sum(){
//     var a = 10, b = 20;
//     var total = a+b;
//     console.log(total);
// }
// sum();





















//// ****************** 3. Function Parameters vs Function Arguments ******************

// Function parameters are the names listed in the function's definition.
// Function arguments are the real values passed to the function.
// |
// |
// |
// function sum(a,b){
//     var total = a+b;
//     console.log(total);
// }
// sum();
// sum(20,30);
// sum(50,60);























//// ************************* 4. Function Expressions *************************
//// ************************* 5. Return KeyWord *************************

// " Function Expression simply means create a function and put it into a variable"

// function sum(a,b){
//    return total = a+b;
// }   
// var funExp = sum(10,50);   
// console.log(`Total number is ${funExp}`);

   
   
   





















//// ************************* 6. Anonymous Function *************************

// A function expression is similar to and has the same syntax as a function declaration One can define "names"
// function expresion (where the name of the expression might be used in the call stack for examole) or "anonymous" function expressions.


// var funExp = function(a,b){
//    return total = a+b;
// }
// var sum = funExp(5,15);
// console.log("Total Number is " + sum);
