// String in JavaScript......

// 1_Escape Character
// 2_Finding A string in a string
// 3_Searching for a string in a string
// 4_Extracting  string parts
// 5_Replacing strig content
// 6_Extracting string Characters
// 7_Other useful methods

///// ****************************************************************************  //////////// *************************** What is String ? *************************** ///////
///// ****************************************************************************  /////

// A JavaScript string is zero or more characters Written inside Quotes.
// You can use single or double quotes
// string can be created as primitives,from string literals, or as objects, using the string() constructor.

// let myName = "Ankit Yadav";
// console.log(myName);
// let myName2 = 'Ankit Yadav';
// console.log(myName2);

// let myName3 = new String("Ankit YAdav"); // not for use.....
// console.log(myName3);





// How to find the length of a string [ String.prototype.length  ]

// let myName = "Ankit Yadav";
// console.log(myName.length);




























///// ***************************************************************************** /////
// ............................... 1_Escape Character ............................... //
///// ***************************************************************************** /////

// let sentence = "we are the so-called "vikings" from the north." // wrong method..
// let sentence = "we are the so-called \"vikings\" from the north." 
// console.log(sentence);


// // if you dont want to mess, simply use alternate Quotes..
// let sentence = 'we are the so-called "vikings" from the north.' //using Quotes...
// console.log(sentence);

// let sentence = 'we are the so-called \'vikings\' from the north.' //using Quotes...
// console.log(sentence);


// let sentence = "we are the so-called 'vikings' from the north."
// console.log(sentence);


// let sentence = "we are the so-called \"vikings\" from the north." //using Quotes...
// console.log(sentence);



























///// ***************************************************************************** /////
// ......................... 2_Finding A string in a stringe ......................... //
///// ***************************************************************************** /////


// ************** 1_String.prototype.indexOf(searcValue [, fromIndex])  ************** //
//|
// indexOf() method returns the index of (the position of) the first occurance of a specified text in a string.

// const myBioData = 'I am the Ankit Yadav';
// console.log(myBioData.indexOf('Ankit'));
// console.log(myBioData.indexOf('am'));
// console.log(myBioData.indexOf('am', 5));
// console.log(myBioData.indexOf('a', 5));






// ************* 2_String.prototype.lastIndexOf(searcValue [, fromIndex]) ************* //
//|
// lastIndexOf() method returns the index of (the position of) the last occurance of a specified text in a string, or -1 if not found

// const myBioData = 'I am the Ankit Yadav';
// console.log(myBioData.lastIndexOf('am', 5));
// console.log(myBioData.lastIndexOf('am', 1));
// console.log(myBioData.lastIndexOf('Ankit'));
// console.log(myBioData.lastIndexOf('Ankit', 5));
// console.log(myBioData.lastIndexOf('ankit')); // case_senstivie....



































///// ***************************************************************************** /////
// ....................... 3_Searching for a string in a string ....................... //
///// ***************************************************************************** /////

// *********************** String.prototype.search(regexp) *********************** //
// 
// The search() method search a string for a specified value and returns the position of the match
// Search() method cannot take a second start position argument.

// const myBioData = 'I am the Ankit Yadav';
// console.log(myBioData.search("Ankit"));
// console.log(myBioData.search("Ankit"));
// console.log(myBioData.search("ankit")); // case_senstive...



































///// ***************************************************************************** /////
// ........................... 4_Extracting  string parts ........................... //
///// ***************************************************************************** /////

//There are 3 methods for extracting a part of a string:
// 1_Slice(strat, end)
// 2_substring(strat, end)
// 3_substr(strat, length)



// ******************** 1_Slice(strat, end).....The slice() Method ******************** //

// slice() extracts a part of a string and returns the extracted part in a new string.
//|
// The method takes 2 parameters: the start position,
// and the end position (end not included.)
// The slice() method selects the elements starting at the given start argument, and end at, but does not include, the given and argument.
//|
// Note: The orignal array will not be changed


// let str = 'Ankit Kumar yadav'; 
// console.log(str.slice(4));
// console.log(str.slice(5, 10));
// console.log(str.slice(5, -3));
// console.log(str.substring(-5));





// Challange Time - 10..............
// |
// Display only 280 characters of a string like the one used in twitter?


// let myTweets = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aut, eveniet minima rerum dicta, voluptate similique repudiandae, omnis eaque minus ex vel blanditiis. Dolorum modi, iste vel corporis fuga blanditiis optio repellat nulla voluptas beatae. Sunt error iste reprehenderit adipisci vero sapiente,'
// console.log(myTweets.slice(0, 280));
// console.log(myTweets.slice(0, 280).length);
// console.log(myTweets.length);






// **************** 2_substring(strat, end).....The substring() Method **************** //

// substring is simililar to slice().
// The difference is that substring() cannot accept negative inexes.
// If we give negative value then the character are counted from 0th position.

// let str = 'My name is Ankit Kumar Yadav';

// console.log(str.substring(2));
// console.log(str.substring(2, 5));
// console.log(str.substring(2, -5));     // - Value considerd as 0 / Nothing..
// console.log(str.substring(10, -5));    // - Value considerd as 0 / Nothing..
// console.log(str.substring(-5));        // - Value considerd as 0 / Nothing..
// console.log(str.substring());    






// 3_substr(strat, length).....The substr() Method.......
// substr() is similar to slice().

// The difference is that the second parameter specifies the length of the extracted part.
  
// let str = 'My name is Ankit Kumar Yadav';

// console.log(str.substr(2, 5));
// console.log(str.substr(2, -5));
// console.log(str.substr(2));
// console.log(str.substr(-5));  
// console.log(str.substr(-10));  




























///// ***************************************************************************** /////
// ........................... 5_Replacing String Content ........................... //
///// ***************************************************************************** /////

// **************** string.prototype.replace(searchFor, replaceWith) **************** //

// The replace() method replaces a specified value with anathor value ina string.

// let myBioData = 'I am Ankit Kumar Yadav.';
// console.log(myBioData.replace('Ankit', 'Amit'));
// console.log(myBioData.replace('Yadav', 'Yaduvansi'));
// console.log(myBioData.replace('yadav', 'Yaduvansi')); // No_change Case_sensitive.

// Points to remember:-
// 1: The replace() method does not change change the string it is called on. It returns a new string.
// 2: By default, the replace() method replaces only the first match
// 3: By default, the replace() method is case sensitive.





























///// ***************************************************************************** /////
// ......................... 6_Extracting string Characters ......................... //
///// ***************************************************************************** /////

// There are 3 method  for extracting string characters: 
// 1_charAt(position)
// 2_charCodeAt(position)
// 3_Property access [ ]





// **************** 1_The charAt() Method **************** //
// The charAt Method returns the character at a specified index (position) in a string.

// let str = "HELLO WORLD";

// console.log(str.charAt(0));
// console.log(str.charAt(1));
// console.log(str.charAt(2));
// console.log(str.charAt(3));
// console.log(str.charAt(4));
// console.log(str.charAt(5));
// console.log(str.charAt(6));
// console.log(str.charAt(7));
// console.log(str.charAt(8));
// console.log(str.charAt(9));
// console.log(str.charAt(10));





// ****************  2_The charCodeAt() Method **************** //
// The charCodeAt() method Returns the unicode of the character at a specified index in a string: 
// The method returns a UTF-16 code (an integer between 0 and 65535).

// The unicode standard provides a unique number for every character, no matter the platform, devices, application, or language. UTF-16 is a popular unicode encoding which has 88-bit code units.


// let str = "HELLO WORLD";
// console.log(str.charCodeAt(0));
// console.log(str.charCodeAt(1));
// console.log(str.charCodeAt(2));
// console.log(str.charCodeAt(3));
// console.log(str.charCodeAt(4));
// console.log(str.charCodeAt(5));
// console.log(str.charCodeAt(6));
// console.log(str.charCodeAt(7));
// console.log(str.charCodeAt(8));
// console.log(str.charCodeAt(9));
// console.log(str.charCodeAt(10));






// ****************  3_Property access [ ] **************** //

// // ECMAScript 5 (2009) allows property access [ ] on strings.

// let str = "HELLO WORLD";
// console.log(str[0]);
// console.log(str[1]);
// console.log(str[2]);
// console.log(str[3]);
// console.log(str[4]);
// console.log(str[5]);
// console.log(str[6]);
// console.log(str[7]);
// console.log(str[8]);
// console.log(str[9]);
// console.log(str[1]);































///// ***************************************************************************** /////
// ............///............. 7_ Other Useful Methods .............///............ //
///// ***************************************************************************** /////


// 1_ toUpperCase and toLowerCase........
// |
// let str = "Ankit Yadav";
// console.log(str.toLocaleUpperCase());
// console.log(str.toLocaleLowerCase());





// 2_The Concat() method....
// |
// let fname = 'Ankit';
// let lname = 'Yadav';
// console.log(fname.concat(lname));
// console.log(fname.concat(" ", lname));





// 3_The string.trim() method....
// The trim() method removes whitespace from both side of string..

// let str = "          Hello       World           ";
// console.log(str.trim());





// 4_Convrting string to an Array.
// A string can be converted to an array with the split() method.

// let txt = "a,|b, c,|d, |e, 5";  //string....
// console.log(txt.split(","));    // split on commas
// console.log(txt.split(" "));    // split on spaces
// console.log(txt.split("|"));    // split on pipe
