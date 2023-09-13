// const DelhiWhether = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('27 deg');
//     }, 2000)
// });

// const BangaloreWhether = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('21 deg');
//     }, 5000)
// });

// let harry = async () => {

// DelhiWhether.then(alert);
// BengloreWhether.then(alert);

//     console.log('fetching Delhi wheather pleasee wait....');
//     let delhiW = await DelhiWhether
//     console.log('fetched Delhi wheather ' + delhiW);

//     console.log('fetching Bangalore wheather pleasee wait....');
//     let BangaloreW = await BangaloreWhether
//     console.log('fetched Delhi wheather ' + BangaloreW);

//     return [delhiW, BangaloreW]
// }

// console.log('Welcome to wheather control room.');
// harry();
// harry().then((value) => {value});

///! .............. Thapa Technical .............. ////
// const prom = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         let rollno = [1,2,3,4,5,6];
//         resolve(rollno);
//         reject('Error while comunicating..')
//     }, 2000);
// });

// const getbioData = (indexdata) => {
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

//! ..Promise Consume.....
// prom.then((rollno) => {
//     console.log(rollno);
//     return getbioData(rollno[5]);
// }).then((result) =>{
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// });

// let getData = async ()=> {
//     try{
//         let rollno_data = await prom;
//         console.log(rollno_data);

//         let bioData = await getbioData(rollno_data[0]);
//         console.log(bioData);
// console.log(bioDwdsata); /// for Error handling
//     }
//     catch(error){
//         console.log(`The Error: ${error}`);
//     }
// }

// getData();
// console.log(getData());
