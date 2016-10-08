// console.log('es6');
// //const
// const a = 8; 
// console.log('a', a); 
// a=12;
// console.log('a', a); 
//const outputDiv = $('#output');

//let
// let b=8; 
// console.log('b', b);
// b=12; 
// console.log('b2', b); 

//difference between 'var' and 'let'
// function varTest(){
//   var x = 1; 
//   if(true) {
//     var x=2;
//     console.log('inside if',x);
//   }
//   console.log('outsided if', x); 
// }

// varTest(); 

// function letTest(){
//   let y = 31; 
//   if(true) {
//     let y = 68;
//     console.log('inside if',y);
//   }
//   console.log('outsided if', y); 
// }

// letTest(); 

//arrow functions
var sum = function(){
  let a=1,b=2;
  return a+b; 
}
console.log("hardcoded sum in ES5", sum());

var sum2 = () => {
  let a=1,b=2;
  return a+b; 
}
console.log("hardcoded sum in ES5", sum2());

var reflect = function(value) {
  return value;
}
console.log("reflect in ES5", reflect('Es5 is so yesterday'));

var reflect2 = (value) => value; 
console.log("reflect in ES6", reflect2('Es6 is so today'));

var realSum = function(num1, num2) {
  return num1+num2;
}
console.log("realsum ES5", realSum(2,3))

var realSum2 = (num1, num2) => {
  return num1 + num2;
}
console.log("realsum ES6", realSum2(5,4))

//string templates
let m="bite me";
console.log('m',m); 
let r = `hello my name is ${m}`;
console.log('r', r); 

//object literal property shorthand
let wow='Hi there', es6="ES6", numNum = ()=>{console.log('howdy')}

let myOldObject = {
  wow:wow,
  es6:es6, 
  numNum:numNum
}
console.log("myOldObject", myOldObject); 

let myNewObject = {
  wow, es6, numNum
}
console.log('myOldObject', myNewObject); 
//method properties

var e5Obj = {
  foo: function(){console.log('foo')},
  bar: function(){console.log('bar')}
}
console.log("e5Obj", e5Obj); 

var es6Obj = {
  foo() {console.log('foo')}, 
  bar() {console.log('bar')}
}
console.log("es6Obj", es6Obj);












