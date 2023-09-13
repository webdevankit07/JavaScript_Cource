// 1. Date Methods (get and set)
// 2. Time Methods (get and set)

// JavaScript Date Objects represent a single moment in the time in a platform-indipendent format. Date object contain a number that represents milisecond since 1 january 1970 UTC.










// ............,............Creating Date Objects.....,.....................
// There are 4 ways to create a new date object:
//|
// 1 new Date()
// 2 new Date(year, month, hours, minutes, seconds, miliseconds)- 7 arguments
// 3 new Date(miliseconds)  we cannot avoid month section
// 4 new Date(date string)





// 1_new Date().....
// Date objects are created with the new Date() constructor.

// console.log((new Date()))
// console.log(new Date().toLocaleString());
// console.log(new Date().toString());

// Date.now()
// Returns the numeric value correspondingto the current time-the number of milisecond elapsed since january 1, 1970 00:00:00 UTC

// console.log(Date.now())

// setInterval(() => {
//     console.log(Date.now())
// }, 10)






// 2_new Date(year, Month,....)...........
// 7 number specify year, month, day, hour, minute, second and milisecond (in that order)

// Note: JavaScript counts months from 0 to 11.
// January is 0. December is 11.

// console.log(new Date(2023, 0, 13, 20, 33, 30, 0).toLocaleString());
// console.log(new Date(2023,0).toLocaleString());
// console.log(new Date(2023).toLocaleString());   // month code cannot avoid.





// 3_new Date(milisecond).........

// console.log(new Date(100000000000).toString());
// console.log(new Date(1000000000000).toString());
// console.log(new Date(10000000000000).toString());
// console.log(new Date(100000000000000).toString());
// console.log(new Date(1000000000000000).toString());





// 4_new Date(dateString).........
// new Date(dateString) creates a new date object from a date string.

// console.log(new Date("January 13, 2023 14:13:00"));
// console.log(new Date("January 13, 2023 14:13:00").toLocaleString());
// console.log(new Date("January 13, 2023 14:13:00").toString());
















// ............,............ Date - Methods .....,.....................

// 1_How to get the individual date?

// console.log(new Date().toLocaleString());
// console.log(new Date().getFullYear());
console.log(new Date().getMonth());
// console.log(new Date().getDay());
// console.log(new Date().getDate());





// 2_how to set the individual date?

// The setFullYear() Method can optionally set month and Day
// console.log(new Date().setFullYear(2023,0,13));


// console.log(new Date().setFullYear(2023));
// console.log(new Date().setMonth(0));
// console.log(new Date().setDate(13));
// console.log(new Date().toLocaleString());
// console.log(new Date().toLocaleDateString());










// ............,............ Time - Methods .....,.....................

// How to get indivisual time?

// console.log(new Date().getTime());
// // The getTime() method returns the number of miliseconds since January 1, 1970
// console.log(new Date().getHours());
// // The getHours() method return the hours of a date as a number (0-23)
// console.log(new Date().getMinutes());
// console.log(new Date().getSeconds());
// console.log(new Date().getMilliseconds());










// How to set the Individual time?

// console.log(new Date().setTime(1673606643930));
// console.log(new Date().setHours(16));
// console.log(new Date().setMinutes(23));
// console.log(new Date().setSeconds(21));
// console.log(new Date().setMilliseconds(485));




