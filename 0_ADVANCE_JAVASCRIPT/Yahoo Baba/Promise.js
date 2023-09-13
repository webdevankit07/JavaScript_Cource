// const prom = (complete) =>{
//     return  new Promise((resolve,reject) =>{
//         console.log('fetching data please Wait..');
//         setTimeout(() => {
//             if(complete){
//                 resolve('I am successfull');
//             }
//             else{
//                 reject('I am failed');
//             }
//         }, 2000);
//     });
// }

// let onFulfilment = (result) => {
//     console.log(result);
// }

// let onRejection = (error) => {
//     console.log(error);
// }

// prom(false).then(onFulfilment).catch(onRejection);









// Example 1...

// const prom = (a,b) =>{
//     return new Promise((resolve,reject) =>{
//         console.log('Serching data please wait..');
//         var c = a/b;
//         setTimeout(() =>{
//             if(a,b){
//                 resolve(`Your answer : ${c}`);
//             }
//             else{
//                 reject(`Failed to calculate`);
//             }
//         }, 2000);
//     })
// }

// prom(10,6).then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// });









































// Example 1(Thapa Techinical)....

// // ..Promise Produce......
// const prom = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         let rollno = [1,2,3,4,5,6];
//         resolve(rollno);
//         reject('Error while comunicating..')
//     }, 2000);
// });

// const getData = (indexdata) => {
//     return new Promise((resolve,reject) => {
//         setTimeout((indexdata) => {
//             let biodata = {
//                 name : 'Ankit Kumar',
//                 age : 22
//             }
//             resolve(` My Roll no is ${indexdata}. My name is ${biodata.name} and i am ${biodata.age} years old.`);
//             reject('Error while comunicating..');
//         }, 2000, indexdata);
//     });
// }

// // ..Promise Consume.....
// prom.then((value) => {
//     console.log(value);
//     return getData(value[5]);
// }).then((result) =>{
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// });


































// // Promise.all().....

// const  promiseCall = (returnData,message) => {
//     return (resolve,reject) => {
//         setTimeout(() => {
//             console.log(`The ${message} promise has resolved`);
//             resolve(returnData);
//         }, returnData * 100);
//     }
// }

// let p1 = new Promise(promiseCall(10,'first'));
// let p2 = new Promise(promiseCall(20,'second'));
// let p3 = new Promise(promiseCall(30,'third'));
// // let p4 = new Promise((resolve,reject) =>{
// //     reject('Anonymous Error while communicating');
// // });

// Promise.all([p1,p2,p3]).then((result) => {
// // Promise.all([p1,p2,p3,p4]).then((result) => {
//     console.log(result);

//     let total = 0;
//     // for(i in result){ total += result[i]}
//     for(elem  of result){ total += elem}

//     console.log(total);
// }).catch((error) => {
//     console.log(error);
// });











































// Code with harry..............

// tut_56...............................................

var i = 1;
var interval = setInterval(() => {
    console.log(`${i} second`);
    i++;
}, 1000)

const p1 = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve('Promise 1 Resolved.');
    }, 2000)
})

p1.then((value) =>{
    console.log(value);
    const p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise 2 Resolved.');
        }, 2000);
    })
    return p2
}).then((value) => {
    console.log(value);
    console.log('we are done');
    clearInterval(interval);
}).catch((error) => {
    console.log(error);
})
















// tut_57(Multiple Handlers)..........

// const p1 = new Promise((resolve, reject) => {
//     alert('Hey i am resolved')
//     setTimeout(() => {
//         resolve(1);
//     }, 2000) 
// })

// p1.then((value) => {
//     console.log('congratulation this promise is now resolve');
// })

// p1.then((value) => {
//     alert('Hurray');
// })






// tut_58(Promise ApI)..........

// 1: Promise.all()....

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Value 1');
//     }, 4000)
// });

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve('Value 2');
//         reject(new Error('error'));
//     }, 2000)
// });

// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Value 3');
//     }, 3000)
// });



// Promise.all([p1,p2,p3]).then((value) => {
//     console.log(value);
// })


// Promise.allSettled([p1,p2,p3]).then((value) => {
//     console.log(value);
// })


// Promise.race([p1,p2,p3]).then((value) => {
//     console.log(value);
// })


// Promise.any([p1,p2,p3]).then((value) => {
//     console.log(value);
// })


// Promise.resolve(6).then((value) => {
//     console.log(value);
// })


// Promise.reject(new Error('Hey This is error')).then((value) => {
//     console.log(value);
// })