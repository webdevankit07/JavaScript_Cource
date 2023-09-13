console.log('This is my fetch-API tutorial');

// fetch("https://goweather.herokuapp.com/weather/india")
// .then(response => response.json())
// .then((result) => {
// console.log(result);
//     document.getElementById('apifetch').innerHTML = `Tempreature of  india is : ${result.temperature} and the wind speed is : ${result.wind}. Day is clear actually it's a ${result.description} day.`;

// }).catch(error =>  console.log(error) );

//////?  **************** Yahoo Baba ****************  /////

////! 1: First practical..............

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response => response.json())
// .then((result) => {

//     console.log(result);

//     for(var i in result){
// console.log(i);
// document.write(i);

// console.log(`Name :- ${result[i].name}      Email-Id :- ${result[i].email}      city name:- ${result[i].address.city}`);
//         document.write(` ${result[i].name}  - ${result[i].email} - ${result[i].address.city}  <br>`);
//     }

// })
// .catch(error => console.log("can't fetch data..."));

////! 2: Second practical..............

// fetch("content/student_data.json")   ////  file error showed PROBLEMM
// .then( response => response.json())
// .then((result) => {
//     console.log(result);
// })
// .catch( error => console.log("can't fetch data...."));

//// 3: INSERT_DATA on Server...........

// var obj = {
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }

// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify(obj),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

////! 3: UPDATE_DATA on Server...........

// var obj = {
//     id: 1,
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
// }

// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'PUT',
//     body: JSON.stringify(obj),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then((response) => response.json())
//     .then((json) => console.log(json));

////! 4: DELETE_DATA on Server...........

// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'DELETE',
// })
// .then(response => response.json())
// .then((result) => {
//     console.log(result);
// })
// .catch(error => console.log(error));
