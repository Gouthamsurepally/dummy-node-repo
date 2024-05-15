 // every file by default is a module


// const names=require('./1-names');
// const sayHi=require('./1-utiles')

// // sayHi('susan');
// sayHi(names.goutham);
// sayHi(names.naveen);

const names=require('./1-names');
const {sayHi}= require('./1-utiles');
const data= require('./1-alter-export');

console.log(data);

sayHi('susan');
sayHi(names.goutham);
sayHi(names.naveen);
