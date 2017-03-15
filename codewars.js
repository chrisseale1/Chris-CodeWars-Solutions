//#1   Convert boolean values to strings 'Yes' or 'No'.
/*Complete the bool_to_word (Javascript: boolToWord ) method.

Given: a boolean value

Return: a 'Yes' string for true and a 'No' string for false */

function boolToWord( bool ){
  if(bool){
    return "Yes";
  } else {
    return "No";
  } 
}

//or
function boolToWord(bool){
    return bool ? "Yes" : "No";
}



//#2     EVEN OR ODD
/* Instructions
Output
Past Solutions
Create a function that takes an integer as an argument and
 returns "Even" for even numbers or "Odd" for odd numbers. */

function even_or_odd(number) {
  if(number % 2 !== 0){
    return "Odd";
  } else {
    return "Even";
  }
}
//or
function even_or_odd(number){
    return (number % 2 !== 0) ? "Odd" : "Even";
}



//#3    Remove exclamation marks
//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
  return s.replace(/["!"]/gi, "");
}


//#4    Push a hash/an object into array
/*You are trying to put an object into an array, but it always returns error, 
solve it and keep it as simple as possible! */
/* Given problem: 
items = [] 
items.push {a: "b", c: "d"}  */

let items = [];
items.push ({a: "b", c: "d"});



//#5   Remove String Spaces
//Simple, remove the spaces from the string, then return the resultant string.
/* given problem: 
function noSpace(x){

}  */
function noSpace(x){
    return x.split(" ").join("");
}



//#6  JS function and print "Helloworld!"
/* mission 1:
use keyword function to define your function, function name should be helloWorld(don't forget the () and {})

mission 2:
use keyword var to define a variable str, value of str should be a string: "Hello World!"(don't forget the =).

mission 3:
type the console.log() in the next line(don't forget to put the str in the brackets).
When you have finished the work, click "Run Tests" to see if your code is working properly.
In the end, click "Submit" to submit your code pass this kata.  */
function helloWorld(){
  const str="Hello World!";
  console.log(str);
}


//#7  Data Types - NUMBERS
/*I've written five function equal1,equal2,equal3,equal4,equal5,
defines six global variables v1 v2 v3 v4 v5 v6, every function has two local
variables a,b, please set the appropriate value for the two variables(select from v1--v6), 
making these function return value equal to 100. the function equal1 is completed, please 
refer to this example to complete the following functions.

When you have finished the work, click "Run Tests" to see if your code is working properly.

In the end, click "Submit" to submit your code pass this kata.*/

var v1=50;v2=100,v3=150,v4=200,v5=2,v6=250
function equal1(){
  var a=v1   
  var b=v1   
  return a+b;
}
//Please refer to the example above to complete the following functions
function equal2(){
  var a = v4
  var b=v2   //set number value to b
  
  return a-b;
}
function equal3(){
  var a= v1  //set number value to a
  var b= v5  //set number value to b
  return a*b;
}
function equal4(){
  var a= v4  //set number value to a
  var b=  v5 //set number value to b
  return a/b;
}
function equal5(){
  var a=  v6 //set number value to a
  var b=  v3 //set number value to b
  return a%b;
}




//#8  Data Types: strings
/*misson 1: I've create three function, and defined some global variables, please select some variables that can make up the name of the function, and return them(Please note the uppercase and lowercase letters are different).

When you have finished the work, click "Run Tests" to see if your code is working properly.

misson 2: After misson 1 finished. you should click "Submit" to see my three questions, and write the answer in function answer1, answer2,answer3

If everything is right, click "Submit" again to submit your code pass this kata.*/
var a1="A",a2="a",b1="B",b2="b",c1="C",c2="c",d1="D",d2="d",e1="E",e2="e",n1="N",n2="n";
function Dad(){
  //select some variable to combine "Dad"
  return d1+a2+d2;
}
function Bee(){
  //select some variable to combine "Bee"
  return b1+e2+e2;
}
function banana(){
  //select some variable to combine "banana"
  return b2+a2+n2+a2+n2+a2;
}

//answer some questions if you finished works above
function answer1(){
  //the answer should be "yes" or "no"
  return "no";
}
function answer2(){
  //the answer should be "yes" or "no"
  return "no";
}
function answer3(){
  //the answer should be "yes" or "no"
  return "yes";
}




//#9  Basic Data Types ARRAYS
// five basic functions
  //1. getLength(arr)    should return length of arr
function getLength(arr){
  return arr.length;
}
//2. getFirst(arr)     should return the first element of arr
function getFirst(arr){
  return arr[0];
}
//3. getLast(arr)      should return the last element of arr
function getLast(arr){
  return arr[(arr.length - 1)];
}
//4. pushElement(arr)  should push an element to arr, and then return arr
let el = 1;
function pushElement(arr){
  var el = 1;
  arr.push(el);
  return arr;
}
//5. popElement(arr)   should pop an element from arr, and then return arr 
function popElement(arr){
  arr.pop();
  return arr;
}






//#10  Basic Data Types OBJECTS
/*Give you a function animal, accept 1 parameter:obj like this:

  {name:"dog",legs:4,color:"white"}

and return a string like this:

  "This white dog has 4 legs." */
function animal(obj){
  return "This " + obj.color + " " + obj.name + " has " + obj.legs + " legs.";
}


//#11  Basic Data Types: Boolean and Conditional If/else
/*Coding in function trueOrFalse, function accept 1 parameters:val, try to use the conditional
statement if...else, if val value is false (val==false or it can convert to false),
should return a string "false", if not, return a string "true". */
function trueOrFalse(val){
  if (val === false || val === undefined || val === "" || val === 0 || val === null){
    return "false";
  } else {     
    return "true";
  }
}
//or
function trueOrFalse(val){
  return (val === false || val === undefined || val === "" || val === 0 || val === null) ? "false" : "true";
}




//#12    if...else ternary operators
/*Complete function saleHotdogs, function accept 1 parameters:n, n is the number of customers to buy hotdogs, different numbers have different prices (refer to the following table), return a number that the customer need to pay how much money.

+---------------+-------------+
|  numbers n    | price(cents)|
+---------------+-------------+
|n<5            |    100      |
+---------------+-------------+
|n>=5 and n<10  |     95      |
+---------------+-------------+
|n>=10          |     90      |
+---------------+-------------+ */
function saleHotdogs(n){
  if(n < 5){
    return n*100;
  } else if (n >= 5 && n < 10) {
    return n*95;
  } else {
    return n*90;
  }
}
//or
function saleHotdogs(n){
  return (n < 5) ? n*100 : (n >=5 && n < 10) ? n*95 : n*90;
}