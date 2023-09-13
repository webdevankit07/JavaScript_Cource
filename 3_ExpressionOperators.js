// Arithmetic Operators in JavaScript.........

// There are 6 Types of Operators........
// 1. Asignment Operators  ( = )
// 2. Arithmetic Operators ( +,-,*,/,%,x++,x--,--x,++x )
// 3. Comparison Operators ( ==, !=, >, >=, <, <= )
// 4. Logical Operators  ( &&, ||, !)
// 5. String Operators 
// 6. Conditional(Ternary)  Opeartors




// 1. Asignment Operators  ( = ).......
// An assignment operator assigns a value to its left operand based on the value of its right operand.




// 2. Arithmetic Operators ( +,-,*,/,%,x++,x--,--x,++x )........
// An arithmetic operator takes numerical values (either literals or variables) as their operands and returns a single numerical value.

// console.log(3+3);
// console.log(10-5);
// console.log(20/5);
// console.log(5*6);

// console.log("Remainder Operator " + 27%4);

// Increment and Decrement operator...    
// Operator: x++ or ++x or x-- or --x

// If used postfix, with operator after operand ( for example, x++), the increment operator increments and return the value before incrementing.

// var num = 5;
// var newnum = num++ + 5;
// console.log(num);
// console.log(newnum);

// If used Prefix, with operator before operand ( for example, ++x), the increment operator increments and return the value after incrementing.

// var num = 5;
// var newnum = ++num + 5;
// console.log(num);
// console.log(newnum);














// 3. Comparison Operators ( ==, ===, !=, >, >=, <, <= )
// A comparison operator compares its operands and returns a logical value based on whether the cmparison is true or false.

// var a = 30;
// var b = 25;
// var c = "30";

// console.log(a == b);  // Equal ( == )
// console.log(a == c);  // Equal ( == )
// console.log(a === c); // Equal with Equal_Datatype ( === )
// console.log(a != b);  // Not Equal ( != )
// console.log(a > b);   // Greater Than  ( > )
// console.log(a >= b);  // Greater Than or  Equal ( >= )
// console.log(a < b);   // Less Than ( < )
// console.log(a <= b);  // Less Than or  Equal ( <= )












// 4. Logical Operators ..........
//LOgical operators are typically used with boolean (logical) values; when they are, they return a boolean value.

var a = 30;
var b = -20;

// Logical AND (&&).....
// The Logical AND (&&) operator ( Logical Conjuction ) for a set of expressions is true if and only if all of its expression is true.

// console.log(a>b && a!=b && b<0);


// Logical OR (||).....
// The Logical OR(||) operator ( Logical Disjunction ) for a set of operands is true if and only if one or more its expression is true.

// console.log( a>b || a<b || b<0 );
// console.log( a<b || a==b || b<0 );


// Logical NOT (!)....
// The Logical NOT(!) operator (Logical complement, negation) takes truth to false to flasity and vice versa.

// console.log(!false);
// console.log(!true);
// console.log(!(a>b || a<b));
// console.log(!(a<b || a==b));















// 5. String Concatination (Operators)....
// The concatination operator (+) concatenates two string values together, returnning another string that is the union of two operand strings.

// console.log("Hello world " + "Ankit Kumar " + "Yadav");

// var name = "Ankit "

// console.log(name + "Kumar");
// console.log(name + "Yadav");