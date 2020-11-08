// global object

console.log(global);

global.setTimeout(() => {
  console.log("In the Timeout !!!");
  clearInterval(int);
}, 5000);

const int = setInterval(() => {
  console.log("In the Interval !!");
}, 1000);





const intT = setTimeout(() => {
  console.log("In the Timeout of 0 !!!");

}, 0);

 setImmediate (() => {
  console.log("In the Immediate !!!");
}, 0);

process.nextTick(() => {
  console.log("In the process nextTick !!!");
}, 0);

console.log(__dirname);
console.log(__filename);

//DOM methodes are innacssible in global
//console.log(document.querySelector);
//==>
//ReferenceError: document is not defined




