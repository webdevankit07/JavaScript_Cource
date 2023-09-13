class employee{
    constructor(name){
        console.log('constructor : ' + name);
    }
}
class manager extends employee{
    constructor(name){
        super();
        console.log('Manager : ' + name);
    }
}

// let f = new employee();
let v = new manager('Ankit Yadav');


