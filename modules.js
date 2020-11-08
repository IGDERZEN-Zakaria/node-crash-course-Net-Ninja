//const xyz = require('./people');

const {people,ages} = require('./people');


//console.log(xyz.people,xyz.ages);

//console.log(people);
//ReferenceError: people is not defined


console.log(people,ages);

const os = require('os');

//console.log(os);

console.log('Plateform : '+os.platform());

console.log('Home directory : '+ os.homedir());








