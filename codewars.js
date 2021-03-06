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
/*Complete function saleHotdogs, function accept 1 parameters:n,
 n is the number of customers to buy hotdogs, different numbers have different
prices (refer to the following table), return a number that the customer need 
to pay how much money.

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



//#13      Conditional statement--switch
/*Complete function howManydays, function accept 1 parameters:month, means the month of year, different month has different days (refer to the following table), return a number that how many days in this month(month is always greater than 0, less than or equal to 12).

+---------------+-------------+
|    month      |    days     |
+---------------+-------------+
|1,3,5,7,8,10,12|     31      |
+---------------+-------------+
|4,6,9,11       |     30      |
+---------------+-------------+
|2              |     28      |  (Do not consider the leap year)
+---------------+-------------+
little tips: Use default for most of the cases can reduce your work.*/

function howManydays(month) {
  switch (month) {
    case 4:
    case 6:
    case 9: 
    case 11:
      return 30
    case 2:
      return 28
    default:
      return 31
  }
}





//#14   loop statement --while and do..while
/* Coding in function padIt, function accept 2 parameters:

1.str, it's a string representing the string to pad, we need pad some "*" at leftside or rightside of str

2.n, it's a number, how many times to pad the string.
Behaviour

You need to write a loop statement within the function that loops n times.
Each time through the loop it will add one * to str, alternating on which side it 
is padded: the first time will add a * to the left side of str, the second time will 
add a * to the right side, and so on.

Finally, return the padded string.*/
function padIt(str,n){
  let count = 0;
  let ast = "*";
  let padStr = str;
  while(count < n){
    if(count % 2 !== 0){
      padStr = padStr + ast;
      count += 1;
    } else {
      padStr = ast + padStr; 
      count += 1;
    }
  }
  return padStr;
}



//#15    loop statement --for
/*Coding in function pickIt, function accept 1 parameter:arr, it's a number array, 
we need traverse arr by using for loop, if element is odd number, push it to array odd, 
if it's a even number, push it to array even.

I've defined two array odd and even in the function, and also wrote the return statement. 
your work is write a for loop.*/
function pickIt(arr){
  var odd=[];
  var even=[];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 !== 0){
      odd.push(arr[i]);
    } else {
      even.push(arr[i]);
    }
  }
  return [odd,even];
}
//or
function pickIt(arr){
  var odd=[];
  var even=[];
  for(let i = 0; i < arr.length; i++){
    (arr[i] % 2 !== 0) ? odd.push(arr[i]) : even.push(arr[i]);
  }
  return [odd,even];
}




//#16     loop statement --break,continue
/*Coding in function grabDoll. function accept 1 parameter:dolls. it's a string array, a list of some dolls.
You need traverse dolls by using for loop. If element is "Hello Kitty" or "Barbie doll", you should push it to a bag(bag is an array, I've defined in the function); 
if it's other strings, we should use continue skip it.
When the bag has three element, bag is full. You should use break jump out the loop; If bag is not full, you should traverse dolls until the last element.
Return the bag after for loop finished.
You should use for, break and continue in your code. otherwise, your solution may not pass this kata.*/
function grabDoll(dolls){
  var bag=[];
  for(let i = 0; i < dolls.length; i++){
    if(dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll"){
      bag.push(dolls[i]);
      if(bag.length === 3){
        break;
      }
    } else {
      continue;
    }
  }
  return bag;
}




//#17   loop statement --for..in and for..of
/*
Coding in function giveMeFive, function accept 1 parameter:obj, it's an object.
You need to the traverse the obj, if the length of the object key equals to 5, 
then push the key value to the array (you need to define the array by yourself, 
this time I won't help you). Additionally push the value to the array as well, 
if the length of the value is equal to 5.
Return the five after works finished.
You should use for..in in your code, otherwise, your solution may not pass this
kata. Don't learn bad habits from those lazy guys ;-)*/

function giveMeFive(obj){
  let newArr = [];
  for(key in obj){
    if(key.length === 5){
      newArr.push(key);
    }
    if(obj[key].length === 5){
      newArr.push(obj[key]);
    }
  }
  return newArr;
}



//#18    Number object and its properties
/*Coding in function whatNumberIsIt. function accept 1 parameter:n. it's a number.

To judge the number n. If n is one of the above five constants, return one of these string:

  "Input number is Number.MAX_VALUE"
  "Input number is Number.MIN_VALUE"
  "Input number is Number.NaN"
  "Input number is Number.NEGATIVE_INFINITY"
  "Input number is Number.POSITIVE_INFINITY"
Other values should return "Input number is xxx". xxx means this number.

For example:

  whatNumberIsIt(1/0) should return "Input number is Number.POSITIVE_INFINITY"
  whatNumberIsIt(100) should return "Input number is 100"
What you need to think about is how to judge it correctly and effectively and don't forget isNaN().*/

function whatNumberIsIt(n){
  switch(n){
    case Number.MAX_VALUE: return ("Input number is Number.MAX_VALUE"); 
    case Number.MIN_VALUE: return  ("Input number is Number.MIN_VALUE");
    case Number.POSITIVE_INFINITY: return ("Input number is Number.POSITIVE_INFINITY");
    case Number.NEGATIVE_INFINITY: return ("Input number is Number.NEGATIVE_INFINITY");
    case Number(n) : return "Input number is " + n;
    default: return "Input number is Number.NaN";
  }
}



//#19    Methods of Number object--toString() and toLocaleString()
/*Coding in function colorOf. function accept 3 parameter:r g b. It means value of color red green and blue. the value range is 0-255.

Use toString(16) Convert numbers r g b to hex string form. at last, combine them to a web color code and return it.

the color code should starting with "#". and then use 2 characters per color.

for example:

  colorOf(255,0,0) should return "#ff0000"
  colorOf(0,111,0) should return "#006f00"
  colorOf(1, 2 ,3) should return "#010203"*/

const result = function ToHex(num){
  return (num==0) ? '00' :(num<=9) ? `0${num}` : (num<=15) ? `0${num.toString(16)}` : num.toString(16);
}
function colorOf(r,g,b){
  return '#'+ result(r) + result(g)+ result(b);
}




//20#  Methods of Number object--toFixed(), toExponential() and toPrecision()
/*Coding in function howManySmaller, function accept 2 parameter:arr and
 n. arr is a decimal array. n is a decimal.

The first mission: let all elements in the array keep two decimal 
places(No need to convert number n).

The second mission: Traversal arr, count the number of the element which 
smaller than n and return it.

for example:

  howManySmaller([1.234,1.235,1.228],1.24) should return 2
  howManySmaller([1.1888,1.1868,1.1838],1.19) should return 1
  howManySmaller([3.1288,3.1212,3.1205],3.1212) should return 2*/

function howManySmaller(arr,n){
  total = 0;
  for (i = 0; i < arr.length; i++){  
    if (arr[i].toFixed(2) < n){
      total++;
    } 
  }
  return total;
}




//21#  Methods of String object--slice(), substring() and substr()
/*Coding in function cutIt, function accept 1 parameter:arr. arr is a string array.

The first mission: Traversing arr, find the shortest string length.

The second mission: Traversing arr again, intercept all strings to the shortest string 
length(Start from index0). you can use one of slice() substring() or substr() do it.
return the result after finished the work.

for example:

  cutIt(["ab","cde","fgh"]) should return ["ab","cd","fg"]
  cutIt(["abc","defgh","ijklmn"]) should return ["abc","def","ijk"]
  cutIt(["codewars","javascript","java"]) should return ["code","java","java"]*/
function cutIt(arr){
  let finalArr = [];
  let shrstStr = "";
  for(let i = 0; i < arr.length; i++){
    if(shrstStr.length === 0){
      shrstStr = arr[i];
    } else if (arr[i].length < shrstStr.length){
      shrstStr = arr[i];
    }
  }
  for(let i = 0; i < arr.length; i++){
    finalArr.push(arr[i].substr(0, shrstStr.length));
  }
  return finalArr;
}




//22#    Methods of String object--indexOf(), lastIndexOf() and search()
/*Coding in function firstToLast, function accept 2 parameters:str and c. 
str is a string. c is a char.

Please return the gap between the first position of c and the last position of c.

If there are a lot of c in the str, should return a positive integer; 
If there is only one c in str, should return 0; If there is no c in the str, 
should return -1. Retrieval should not ignored the case.

for example:

  firstToLast("ababc","a") should return 2(2-0)
  firstToLast("ababc","c") should return 0(4-4)
  firstToLast("ababc","d") should return -1*/

function firstToLast(str,c){
  let countC = 0;
  for(let i = 0; i < str.length; i++){
    if(str[i] === c){
      countC += 1;
    } 
  }
  return (countC > 0) ? str.lastIndexOf(c) - str.indexOf(c) : -1;
}





//#23    Methods of String object--concat() split() and its good friend join()
/*Coding in function splitAndMerge, function accept 2 parameters:str and sp. 
str is a sentence. sp is a char as separator.

First we need to divide the sentence into words(Use separator space); and then 
divide each word into characters(Use separator empty string); and then merge each 
characters with the specified sp; at last merge all the words(Use separator space) and 
return it.

for example:

  splitAndMerge("My name is John"," ") should return "M y n a m e i s J o h n"
  splitAndMerge("My name is John","-") should return "M-y n-a-m-e i-s J-o-h-n"
  splitAndMerge("Hello World!",".") should return "H.e.l.l.o W.o.r.l.d.!"
  splitAndMerge("Hello World!",",") should return "H,e,l,l,o W,o,r,l,d,!"*/

function splitAndMerge(str,sp){
  return str.split(" ").map(word => word.split("").join(sp)).join(" ");
}   // oh yeah, that's right, I used the map function. I did that.




//#24  Methods of String object--toUpperCase() toLowerCase() and replace()
/*Coding in function alienLanguage, function accept 1 parameter:str. str is a sentence.

We translate the sentence into an alien language according to the following rules:

Each word in the sentence is separated by spaces. The last letter of each word in the 
sentence turns to lowercase, and the other letters are capitalized. Looks very strange? 
Because this is the form of alien language ;-)

for example:

  alienLanguage("My name is John") should return "My NAMe Is JOHn"
  alienLanguage("this is an example") should return "THIs Is An EXAMPLe"
  alienLanguage("Hello World") should return "HELLo WORLd"
A small hint: The first conversion of the entire string will make the code easier*/
function alienLanguage(str){
  let words = str.toUpperCase().split(" ");
  for (var i = 0; i < words.length; i++) {
    let precedingChars = words[i].slice(0, -1);
    let lastChar = words[i].slice(-1).toLowerCase();  
    words[i] = precedingChars + lastChar;
  }
  return words.join(" ");
}



//#25    Methods of String object--charAt() charCodeAt() and fromCharCode()
/*Coding in function topSecret, function accept 1 parameter:file. file is an encrypted 
string.

Encryption using the right shift 3. Your job is to decrypt the file and read the contents 
of the file, and then answer my three questions. If the answer is correct, you will pass 
the test. Note: the decryption should be left shift; Shift is only for uppercase and 
lowercase letters, other characters will remain the same; The shift mode is a cyclic 
shift, for example:

  character "A" after decryption should be "X" instead of ">"
  character "B" after decryption should be "Y" instead of "?"
  character "C" after decryption should be "Z" instead of "@"
  character "a" after decryption should be "x" instead of "^"
  character "b" after decryption should be "y" instead of "_"
  character "c" after decryption should be "z" instead of "`"*/
function topSecret(str){
  let chars = str.split("");
  for(i =0; i < chars.length; i++){
    let tmp = chars[i].charCodeAt();
    if(tmp > 67 && tmp < 91 || tmp > 99 && tmp < 123){
      tmp -= 3;
    } else if(tmp < 68 && tmp > 64 || tmp < 100 && tmp > 96){
          tmp += 23;
    }
    chars[i]=String.fromCharCode(tmp);
  }
  return chars.join("");
}
//question1: The top secret file number is...
answer1="3796";
//question2: Super agent's name is...
answer2="VLwrtK";
//question3: He stole the treasure is...
answer3="Smelly socks";




//#26        Methods of String object--trim() and the string template
/*This is the last lesson about the string object, we will learn the two knowledge used to format the string.
The first is a simple method: trim(). Usage is very simple:
Coding in function fiveLine, function accept 1 parameter:s. s is a string.

Please return a string of 5 lines(newline symbol is \n). The first line has one s; Second line have two s; and so on..Fifth line have five s;

Note1: The two sides of the parameter s may contain some whitespace, please clear them before using s.

Note2: Using a string template can make your job easier.*/
function fiveLine(s){
  let sT = s.trim();
  return(`${sT}\n${sT}${sT}\n${sT}${sT}${sT}\n${sT}${sT}${sT}${sT}\n${sT}${sT}${sT}${sT}${sT}`);
}



//#27       Arrow function,spread operator and deconstruction
/*Create a function shuffleIt. The function accepts two or more parameters.
 The first parameter arr is an array of numbers, followed by an arbitrary number 
 of numeric arrays. Each numeric array contains two numbers, which are indices for 
 elements in arr (the numbers will always be within bounds). For every such array, 
 swap the elements. Try to use all your new skills: arrow functions, the spread operator, 
 destructuring, and rest parameters.

Example:

  shuffleIt([1,2,3,4,5],[1,2]) should return [1,3,2,4,5]
  shuffleIt([1,2,3,4,5],[1,2],[3,4]) should return [1,3,2,5,4]
  shuffleIt([1,2,3,4,5],[1,2],[3,4],[2,3]) should return [1,3,5,2,4]*/

const shuffleIt=(arr,...numarr)=>{
  for ([a,b] of numarr){
    [arr[a],arr[b]]=[arr[b],arr[a]];
  }
  return arr;
}




//#30       methods of arrayObject---push(), pop(), shift() and unshift()
/*Coding in function infiniteLoop. function accept 3 parameters. The 1st parameter 
is arr, it's a 2D array, it contains three 1D array. The 2nd parameter is d ，
it's a string. The 3rd parameter is n, it's a number.

You can think of arr as a moat, the elements of arr like water constantly flow in. 
The direction of flow is controlled by the parameter d. The value of d can be "left" or 
"right". "left" means the "river" moves to the left. All elements in the 1D array are to 
the left moving n position, if beyond the bounds of the array and the element is moved to 
the tail on the left side of the array; if it exceeds the left boundary element would be 
moved to the tail of 3rd array(like a circle). Right is also similar to the operation, but 
it is moving to the right.

Finally, return arr.

Example:

  infiniteLoop( [[1,2,3],[4,5,6],[7,8,9]],"left",1) 
  should return [[2,3,4],[5,6,7],[8,9,1]]
  infiniteLoop( [[1,2,3],[4,5,6],[7,8,9]],"right",1) 
  should return [[9,1,2],[3,4,5],[6,7,8]]
  infiniteLoop( [[1,2],[3,4,5,6],[7,8,9,10]],"left",2) 
  should return [[3,4],[5,6,7,8],[9,10,1,2]]   */
function infiniteLoop(arr,d,n){
  for (var i = 1; i <= n; i++){
    if (d === "left"){
        arr[2].push(arr[0].shift());
        arr[1].push(arr[2].shift());
        arr[0].push(arr[1].shift());
    }
    if (d === "right"){
        arr[0].unshift(arr[2].pop());
        arr[1].unshift(arr[0].pop());
        arr[2].unshift(arr[1].pop());
    }
  }
  return arr;
}



//#31    methods of arrayObject---splice() and slice()
/*  Coding in function threeInOne. function accept 1 parameters arr, 
it's a 1D number array. Your task is to merge each of the 3 elements 
into 1 elements (sum value) and return the result.

Note1: You should not modify the original array.

Note2: Because this is a beginner Kata, and due to the author's mercy ;-), 
so you do not have to verify the validity of the parameter, and do not worry 
about the number of elements of the array is not a multiple of 3.

Example:

  threeInOne( [1,2,3]) should return [6]
  threeInOne( [1,2,3,4,5,6]) should return [6,15]
  threeInOne( [1,2,3,4,5,6,7,8,9]) should return [6,15,24]
  threeInOne( [1,3,5,2,4,6,7,7,7]) should return [9,12,21]   */
  
function threeInOne(arr){
  let subArr = arr.slice();
  let finalArr = [];
  for(let i = 0; i < subArr.length; i+=3){
    finalArr.push(subArr[i] + subArr[i+1] + subArr[i+2]);
  }
  return finalArr;
};



//#32   objects....reverse()....sort()
/*Coding in function sortIt. function accept 1 parameters arr, 
it's a number array. Your task is to sort the array according to the specified 
conditions, and returns a new array(should not modify the original array).

conditions1: according to the number of elements(in ascending order) for example:

sortIt([1,1,1,2,2,3]) should return [3,2,2,1,1,1]
because [1,1,1,2,2,3] has one 3, two 2 and three 1

conditions2: If the same number of elements, according to the number values(in 
descending order) for example:

sortIt([1,1,1,2,2,2,3,3,3]) should return [3,3,3,2,2,2,1,1,1]
because number of 3,2 and 1 both are three, then according to 3>2>1
Comprehensive two conditions should be like this:

sortIt([1,2,3,4,4,5,5,6,6]) should return [3,2,1,6,6,5,5,4,4]     */

function sortIt(arr){
  let out = arr.slice();
  let count = {};
  for(let n of out){
    if (n in count){
      count[n] = count[n]+1;
    } else{
      count[n] = 1;
    }
  }
  out.sort((a,b) => {
    if(count[a] === count[b]){
     return b - a;
    } else {
        return count[a] - count[b];
    }
  })
  return out;
}




//#33   methods of objects       map()
/*Coding in function isolateIt. function accept 1 parameters arr, it's a string array. 
Your task is to put a character "|" into the middle of each element.

If the string length is an even number, use the insert method. 
for example: "abcd" should became "ab|cd". "|" should be inserted between ab and cd.

If the string length is an odd number, use the replacement method. 
for example: "abcde" should became "ab|de". Character c will be replaced by |.

The original array should not be changed, you need to return a new 
array(if you use the map method, you do not need to worry about this).

Some example:

  isolateIt(["abcd","efgh"]) should return ["ab|cd","ef|gh"]
  isolateIt(["abcde","fghij"]) should return ["ab|de","fg|ij"]
  isolateIt(["1234","56789"]) should return ["12|34","56|89"]

a little hint: Flexible use of slice() Will make the work more simple.    */

function isolateIt(arr){
  return arr.map(item => {
    if(item.length % 2 === 0){
      return item.slice(0, item.length / 2) + '|' + item.slice(item.length / 2);
    } else {
      return item.slice(0, item.length / 2) + '|' + item.slice(item.length / 2 + 1);
    }
  })
}





//#34        Methods of Objects:  filter();
/*Coding in function countGrade. function accept 1 parameters scores, 
it's a number array. Your task is to count the grade distribution of the scores, 
to return an object like this:

  {S:888, A:888, B:888, C:888, D:888, X:888}
Grading rules:

  Grade S: Full marks(score=100)
  Grade A: score<100 and score>=90
  Grade B: score<90 and score>=80
  Grade C: score<80 and score>=60
  Grade D: score<60 and score>=0
  Grade X: score=-1(The cheating guy gets a score like that)
Some example:

  countGrade([50,60,70,80,90,100]) should return {S:1, A:1, B:1, C:2, D:1, X:0}
  countGrade([65,75,,85,85,95,100,100]) should return {S:2, A:1, B:2, C:2, D:0, X:0}
  countGrade([-1,-1,-1,-1,-1,-1]) should return {S:0, A:0, B:0, C:0, D:0, X:6}     */
function countGrade(scores){
  let S = scores.filter(score => score === 100);
  let A = scores.filter(score => score < 100 && score >= 90);
  let B = scores.filter(score => score < 90 && score >= 80);
  let C = scores.filter(score => score < 80 && score >= 60);
  let D = scores.filter(score => score < 60 && score >= 0);
  let X = scores.filter(score => score === -1);
  let gradeDistribution = {S: S.length, A: A.length, B: B.length, C: C.length, D: D.length, X: X.length};
  return gradeDistribution;
}




//#35      Methods of Objects: Every and Some;
/*  Coding in function mirrorImage. function accept 1 parameter arr, it's a number array. Your task is find the first pair of mirror-image number and return as an array. The two number must be adjacent, and the returned array is in accordance with the order from left to right.

What's the mirror-image number? for example:123 and 321 is a pair of mirror-image number. Two the same number of palindromes can also be seen as a pair of mirror-image number, such as 121 and 121.

If no such number is found, return[-1,-1]

Some example:

  mirrorImage([11,22,33,33,22,11]) should return [33,33]
  mirrorImage([454,86,57,75,16,88]) should return [57,75]
  mirrorImage([454,0,57,0,16,88]) should return [-1,-1]    */
function mirrorImage(arr){
  var a = 0;
  let b = 0;
  let mirrorNumbers = [];
  arr.some((x,i)=>{ 
    a = arr[i];
    b = arr[i+1];
    if (b === undefined) { 
        return a=-1,b=-1;
    } else {
        return (a === b || Number(a.toString().split('').reverse().join('')) == b) && a.toString().length === b.toString().length;
    }
 });
  mirrorNumbers.push(a,b);
  return mirrorNumbers; 
}




//#36       methods of arrayObject---concat() and join()
/*Coding in function bigToSmall. function accept 1 parameter arr(2D number array).

Your task is: First to all, refer to the example above, 
flat output arr to a one-dimensional array.

And then sort array in descending order.

Finally, use the separator ">" to connect the elements into a string.

Don't complain about the situation like 1>1 is not reasonable, it is just a separator.

Some example:

  bigToSmall([[1,2],[3,4],[5,6]]) should return "6>5>4>3>2>1"
  bigToSmall([[1,3,5],[2,4,6]]) should return "6>5>4>3>2>1"
  bigToSmall([[1,1],[1],[1,1]]) should return "1>1>1>1>1"    */
function bigToSmall(arr){
  let result = [];
  for(let i = 0; i < arr.length; i++){
    result = result.concat(arr[i]);
  }
  return result.sort((a,b) => {
    return b-a;
  }).join(">");
}



//#37          methods of arrayObject---reduce() and reduceRight()
/*  Coding in function tailAndHead. function accept 1 parameter arr(a number array).

We use an example to explain this task:

You got an array [123,456,789,12,34,56,78].

First, from left to right, the tail of an element and the head of the next 
element are added together. The results are put into an array. like this:

  [123,456,789,1 2,3 4,5 6,78]
     3+4 6+7 9+1 2+3 4+5 6+7  
      |   |   |   |   |   |
     [7 ,13 ,10 , 5 , 9 ,13]
And then, Calculate their product and return it(7x13x10x5x9x13=532350)

So, tailAndHead([123,456,789,12,34,56,78]) should return 532350

All elements of arr are positive integer. If a number is less than 10, its head and 
tail are the same. Please try to use reduce() solve this kata.

Some example:

  tailAndHead([1,2,3,4,5]) should return 945
  tailAndHead([111,2345,66,78,900]) should return 7293
  tailAndHead([35456,782,569,2454,875]) should return 12012  */

function tailAndHead(arr){
  return arr.reduce((a,b,i)=>a*(+((arr[i]+"")[0])+(arr[i-1]%10)))/arr[0];
}




//#38     methods of arrayObject --- indexOf(), toString(), and isArray()
/*Coding in function blackAndWhite. function accept 1 parameter arr(a number array).

If arr is not an array, we should return:
  "It's a fake array"
If arr contains elements 5 and 13, we should return:
  "It's a black array"
If arr does not contain 5 or 13, we should return:
  "It's a white array"
Some example:
  blackAndWhite(5,13) should return "It's a fake array"
  blackAndWhite([5,13]) should return "It's a black array"
  blackAndWhite([5,12]) should return "It's a white array"
Using string template and ternary operator can make your work easier.  */
function blackAndWhite(arr){
    if(Array.isArray(arr)!==true){
        return "It's a fake array";
    } else if(arr.indexOf(5)===-1||arr.indexOf(13)===-1) {
        return "It's a white array";
    }else{ 
        return "It's a black array";
    }
}
//or
function blackAndWhite(arr){
   return (Array.isArray(arr) !== true) ? "It's a fake array" : (arr.indexOf(5)===-1||arr.indexOf(13)===-1) ? "It's a white array" : "It's a black array";
}



//#39          methods of Math---round() ceil() and floor()
/*Coding in function roundIt. function accept 1 parameter n. It's a number with a decimal point. Please use different methods based on the location of the decimal point, turn the number into an integer.

If the decimal point is on the left side of the number (that is, the number on the left of the decimal point is less than that on the right), Using ceil() method.
  roundIt(3.45) should return 4
If the decimal point is on the right side of the number (that is, the number on the left of the decimal point is more than that on the right), Using floor() method.
  roundIt(34.5) should return 34
If the decimal point is on the middle of the number (that is, the number on the left of the decimal point is equals that on the right), Using round() method.
  roundIt(34.56) should return 35    */

function roundIt(n){
    let[l, r] = n.toString().split('.');
    let L = l.length;
    let R = r.length;
    if (L < R){ 
        return Math.ceil(n);
    } else if (R < L){ 
        return Math.floor(n); 
    } else{ 
        return Math.round(n);
    }
};
//or
function roundIt(n){
    let [l, r] = n.toString().split('.');
    let L = l.length;
    let R = r.length;
    return (L < R) ? Math.ceil(n) : (R < L) ? Math.floor(n) : Math.round(n);
}



//#40         methods of Math---max() min() and abs()
/*Coding in function maxMin. function accept 2 parameter arr1 and arr2. 
They are two number array and have the same number of elements.

First, calculate the difference of the same index of the arr1 and arr2. Like this:

  [1,3,5]
   | | |   --->  8, 5, 2
  [9,8,7]
Please note that the difference is positive. Such as the above 1 and 9, 
the difference should be 8, not -8. I think abs() can help you get the correct result ;-)

Then find the maximum and minimum values of them, and return the results in the 
form of an array. Like this:

    maxvalue , minvalue
  [    8     ,    2     ]
Some examples:

  maxMin([1,3,5],[9,8,7])               should return [8,2]
  maxMin([1,10,100,1000],[0,0,0,0])     should return [1000,1]
  maxMin([10,20,30,40],[111,11,1,-111]) should return [151,9]   */

function maxMin(arr1,arr2){
  let newArray = [];
  for(let i = 0; i < arr1.length; i++){
      newArray.push(Math.abs(arr1[i] - arr2[i]));
  }
  let max = Math.max(...newArray);
  let min = Math.min(...newArray);
  return [max, min];
};



//#41    methods of Math---pow() sqrt() and cbrt()
/*Coding in function cutCube. function accept 2 parameter: volume and n. 
volume is the volume of a cube. If we cut the cube into n block. 
please determine whether the length of the cube is an integer. return true or false.

For exmaple:

volume=27, it can be divided into 27 blocks, each small cube side length is 1

  cutCube(27,27) should return true
volume=512, it can be divided into 8 blocks, each small cube side length is 4

  cutCube(512,8) should return true
volume=512, it can be divided into 64 blocks, each small cube side length is 2

  cutCube(512,64) should return true
If the side length of small cube is not a integer, should return false.

  cutCube(256,8) should return false
  cutCube(27,3) should return false
  cutCube(123,456) should return false
If it can't be divided evenly into n small cubes, should return false too.

  cutCube(50000,50) should return false
  cutCube(256,4) should return false
The two examples above seems to meet our requirements, but
please note: a cube is unable to evenly divided into 50 pieces or 4 pieces. 
Only cubic numbers(such as 8,27,64,125,216...) can be used to divide the cube evenly.  */
function cutCube(volume,n){
  if (Math.cbrt(n)%1==0) {
    let blockSide = volume/n;
    if (Math.cbrt(blockSide)%1==0){ 
        return true;
    } else { 
        return false;
    } 
  } else { 
    return false; 
  }  
}



//#42           methods of Math---log() and its family
/*Coding in function thinkingAndTesting.

This time I won't explain to you how to do it. You need to look at the test 
cases. Thinking and testing. solve this kata by yourself ;-)

The only hint is: it is related to power.

If you are interested in this form of kata, I recommend to you my Thinking and 
Testing Series */
function thinkingAndTesting(number,base){
  return Math.abs(number - Math.pow(base, Math.floor( Math.log(number)/Math.log(base))));
}



//#43     methods of Math---kata author's lover:random()
/* Coding in function rndCode. Your task is to generate a random verification code. 
In accordance with the following rules:

1) the code length should be 8;

2) The 1st and 2nd characters should be two uppercase letters. The range is "ABCDEFGHIJKLM".

3) The 3rd-6th characters should be four numbers.

4) the 7th and 8th characters should be two symbols. The range is "~!@#$%^&*".

5) If Your code runs 100 times, It should generate 100 non duplicate verification codes.

Some valid verification code examples:

  AB1234#$ MG6145$@ KJ2249@&
  CD5678%^ IG7593~% FH8638@&
  EF9012!@ GB7047%$ KD7604^%     */
function rndCode(){
  let firstTwo = [];
  let nextThree = [];
  let lastTwo = [];
  let arr1 = "ABCDEFGHIJKLM";
  let arr2 = "~!@#$%^&*";
  for(let i= 0; i < 2; i++){
    firstTwo.push(arr1[~~(arr1.length*Math.random())]);
  }
  for(let i = 0; i < 4; i++){
   nextThree.push(~~(10*Math.random()));
  }
  for(let i= 0; i < 2; i++){
    lastTwo.push(arr2[~~(arr2.length*Math.random())]);
  }
  return firstTwo.join("") + nextThree.join("") + lastTwo.join("");
}




//#43         RegEx Objects
/*Coding in function countAnimals. function accept two parameters: animals, 
a string contains some animals; count, an array list of which animals we should 
count. The result should be a number array.

Some examples:

  countAnimals("dog,cat",["dog","cat"]) should return [1,1]
  countAnimals("dog,cat",["dog","cat","pig"]) should return [1,1,0]
  countAnimals("dog,dog,cat",["dog","cat"]) should return [2,1]
  countAnimals("dog,dog,cat",["pig","cow"]) should return [0,0] */

function countAnimals(animals,count){
  let finalArr=[];
  for(let item of count){ 
    finalArr.push((animals.match(new RegExp(item,"g"))||[]).length);
  }
  return finalArr;
}


//#44      Regular Expression--"^","$", "." and test()
/*Coding in function findSimilarity. function accept two parameters: str, a sentence contains some words, separated by spaces; word, a sample word.

Your task is to keep the words that are similar to the sample word, and to remove the other words.

The similarity is defined as: the same length as the sample; the letter at the beginning and the end of word are same as the sample too.

If there are no similar words in the sentence, should return an empty string.

Some examples:

  findSimilarity("bag dog dig dot doog dogs","dog") should return "dog dig"
  findSimilarity("bag dog dig dot doog dogs","dig") should return "dog dig"
  findSimilarity("bag dog dig dot doog dogs","dot") should return "dot"
  findSimilarity("bag dog dig dot doog dogs","god") should return ""   */
function findSimilarity(str,word){
  let strArr = str.split(" ");
  let wordArr = word.split("");
  let finalArr = [];
  for(item of strArr){
    if(item.length === wordArr.length && item[0] === wordArr[0] && item[-1]=== word[-1]){
         finalArr.push(item);
    }
  }
  return finalArr.join();
};

//or with the above reg's

function findSimilarity(str,word){
  var reg=new RegExp("^"+word.replace(/\B.\B/g,".")+"$");  
  return str.split(/ /).filter(x=>reg.test(x)).join(" ");
};


//#45       Regular Expression--"?", "*", "+" and "{}"
/*This time you do not need coding in function. You just need to write a
 regular expression that matches the specified numeric string. I've given 
 the regular expression name: "regex", please don't modify the name.

According to the following rules:

1) The numeric string first digit should be "9".
2) At the end of the number string there are at least four "0".
3) It can also be a negative number(This means that the string may be 
started by "-", maybe not)

Some examples:

  regex.test("90000") should return true
  regex.test("-90000") should return true
  regex.test("900000000") should return true
  regex.test("91230000") should return true
  regex.test("-91230000") should return true

  regex.test("90001") should return false
  regex.test("9000") should return false
  regex.test("91230") should return false
  regex.test("1-90000") should return false
  regex.test("-90000123") should return false  */
let regex=/^-?9\d*0{4}$/;



//#46    Regular Expression--"|", "[]" and "()""
/*This time you need to write a regular expression that matches all URL contained in the string.

The rules:

1) URL start with http:// or https://

2) URL end with .com or .net

3) The middle part of URL can use letters, numbers and dots

4) Need to ignore case, and a string may contain multiple URLs

5) Your regular expression name should be regex and your result should be a string array.

Some examples:

  "http://codewars.com".match(regex)
  should return [ 'http://codewars.com' ]    
  "http://www.codewars.com".match(regex)
  should return [ 'http://www.codewars.com' ]
  "HTTP://CODEWARS.COM".match(regex)
  should return [ 'HTTP://CODEWARS.COM' ]
  "https://www.codewars.com".match(regex)
  should return [ 'https://www.codewars.com' ]
  "http://www.codewars.net".match(regex)
  should return [ 'http://www.codewars.net' ]
  "1234http://www.codewars.comabcd".match(regex)
  should return [ 'http://www.codewars.com' ]
  "http://www.codewars1.com!@#$%http://www.codewars2.net".match(regex)
  should return [ 'http://www.codewars1.com', 'http://www.codewars2.net' ]
  "http://www.codewars.com.net".match(regex)
  should return [ 'http://www.codewars.com.net' ]
  "http://www.codewars.com.fak".match(regex)
  should return [ 'http://www.codewars.com' ]

  These examples should return null:
  "ftp://www.codewars.com".match(regex)
  "http://www.code#wars.com".match(regex)
  "http://wwwcodewarscom".match(regex)
  "http://www.codewars.org".match(regex)
  "http://www . codewars . com".match(regex)
  "http://mail@codewars.com".match(regex)   */


  let regex= /https?:\/\/[a-z0-9.]+\.(?:com|net)/gi;




//#47      Regular Expression--"\"
/*You might have guessed the task. Yes, This time your task is to write a 
  regular expressions matching all palindrome substring of a string.

The rules:

1) The string contains letters, numbers, underscores and spaces. space is the 
separator. the substring means the whole of a substring that separated by spaces. 
For example:
  "aaa bcccd" should match a substring "aaa" , 
  should not match "ccc", "ccc" is a part of substring "bcccd"
2) Palindrome substring length range is 2-7. It means don't match the substring which 
length=1 or length>7.
3) A string may contain multiple palindrome substring.
4) You should not ignore case.
5) Your regular expression name should be regex and your result should be a string array.

Some examples:

  "aa bbb cccc".match(regex)             should return [ 'aa', 'bbb', 'cccc' ]
  "aaa bcccd".match(regex)               should return [ 'aaa' ]
  "_x_x_ --- ~~|~~".match(regex)         should return [ '_x_x_' ]
  "ABCDCBA ABABABA".match(regex)         should return [ 'ABCDCBA', 'ABABABA' ]
  "121 1221 13577531 11211".match(regex) should return [ '121', '1221', '11211' ]
  "aabbbcccc d".match(regex)             should return null
  "1    1".match(regex)                  should return null 
  "abbA CdDc".match(regex)               should return null  */

let regex=/\b(\w)(\w)?(\w)?\w?\3\2\1\b/g;




//#48         Regular Expression--(?:), (?=) and (?!)
/*Your task is coding in function addCommas. Function accepts 2 parameters: money and 
reg. money is a string, it only contains "$" and numbers. To avoid someone being lazy, 
so you should defined a regular expression outside function, its name should be regex. It 
will passed to the function as parameter reg. You can write code that uses this regular 
expression in the function, such as using replace() or other methods.

Some examples:

  addCommas("$123",regex) should return "$123"
  addCommas("$1234",regex) should return "$1,234"
  addCommas("$12345",regex) should return "$12,345"
  addCommas("$1234567",regex) should return "$1,234,567"
  addCommas("$123456789",regex) should return "$123,456,789"   */

let regex=/\d(?=(\d{3})+$)/g;

function addCommas(money,reg){
  return money.replace(reg,x=>x+",");
}



//#49    Dollars and cents
/*The company you work for has just been awarded a contract to build a payment 
gateway. In order to help move things along, you have volunteered to create a 
function that will take a float and return the amount formatting in dollars 
and cents.

39.99 becomes $39.99

The rest of your team will make sure that the argument is sanitized before being 
passed to your function although you will need to account for adding trailing zeros 
if they are missing (though you won't have to worry about a dangling period).

Examples:

3 needs to become $3.00

3.1 needs to become $3.10  */

function formatMoney(amount){
  return '$' + amount.toFixed(2);
}




//#50    Number of people on the bus
/*There is a bus moving in the city, and it takes and drop some people in each bus stop.

You are provided a list (or array in JS) of integer array. Each integer array has two 
items which represent number of people get into bus (The first item) and number of people 
get off the bus (The second item).

The first integer array has 0 number in the second item, since the bus is empty in the 
first bus stop.

Your task is to return number of people who are still in the bus after the last bus 
station. Even though it is the last stop, some people don't get off the bus, and they 
are probably sleeping there :D

Take a look on the test cases.

Please keep in mind that the test cases ensure that the number of people in the bus is 
always >= 0. So the return integer can't be negative.  */
const number = function(busStops){
  let numOnBus = busStops[0][0];
  for (let i = 1; i < busStops.length; i++){
    numOnBus = (numOnBus + busStops[i][0]) - busStops[i][1];
  }
  return numOnBus;
}


//#51     Count of positives / sum of negatives
/*Given an array of integers.

Return an array, where the first element is the count of positives numbers and the 
second element is sum of negative numbers.

If the input array is empty or null, return an empty array.   */

function countPositivesSumNegatives(input) {
  let countOfPos = 0;
  let sumOfNeg = 0;
  if(input === null || input.length === 0){ 
    return [];
  }
  for(let i = 0; i < input.length; i++){
    if(input[i] < 0){
      sumOfNeg += input[i];
    } else if(input[i] > 0) {
      countOfPos += 1;
    }
  }
    return [countOfPos, sumOfNeg];
}



//#52 They say that only the name is long enough to attract attention. 
//They also said that only a simple Kata will have someone to solve it. 
//This is a sadly story #1: Are they opposite?
/*return true; otherwise, return false. Note: The result should be a boolean value, 
instead of a string.
The opposite means: All letters of the two strings are the same, but the case is opposite. 
you can assume that the string only contains letters or it's a empty string */

function isOpposite(s1,s2){
  if(s1 === s2 || s1.toLowerCase() !== s2.toLowerCase()) return false;
  
  for(var i = 0; i < s1.length; i++) {
    if(s1.charAt(i) === s2.charAt(i)) return false;
  }
  return true;
}



//#53         Find the position!
/*When provided with a letter, return its position in the alphabet.
Input :: "a"
Ouput :: "Position of alphabet: 1"    */

function position(letter){
  let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  return "Position of alphabet: " + (alphabet.indexOf(letter) + 1);
}



//#54     What's up next?
/*Given a sequence of items and a specific item in that sequence, return the item 
immediately following the item specified. If the item occurs more than once in a 
sequence, return the item after the first occurence. This should work for a sequence 
of any type.

When the item isn't present or nothing follows it, the function should return nil in 
Clojure and Elixir, Nothing in Haskell, undefined in JavaScript.      */

function nextItem(xs, item) {
  let found = false;
  for (var x of xs) {
    if (found) return x;
    if (x === item) found = true;
  }
  return undefined;
}



//#55      Sum of positive
/*You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20  */

function positiveSum(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    if (arr[i] > 0){
      sum += arr[i];
    }
  }
  return sum;
}


//#56   Beginner - Reduce but Grow
/*Given and array of integers (x), 
return the result of multiplying the values together in order. Example:*/

function grow(x){
  return x.reduce((a,b)=> a*b);
}




//#57    Keep Hydrated
/* Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres 
of water per hour of cycling.

You get given the time and you need to return the number of litres Nathan will 
drink, rounded to the smallest value.

For example:

time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5  */

function litres(time) {
  return Math.floor(time / 2);
}



//#58  Exclamation marks series #6: 
//Remove n exclamation marks in the sentence from left to right
/* Remove n exclamation marks in the sentence from left to right. 
n is positive integer. */

function remove(s,n){
  for (let i = 0;i < n; i++) {
    s = s.replace("!","");
  } 
  return s;
}




//#59   DNA to RNA Conversion
/*Deoxyribonucleic acid, DNA is the primary information storage molecule in 
biological systems. It is composed of four nucleic acid bases Guanine ('G'), 
Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells.
RNA differs slightly from DNA its chemical structure and contains no 
Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a funciton which translates a given DNA string into RNA.

For example:

DNAtoRNA("GCAT") returns ("GCAU") */
function DNAtoRNA(dna) {
  let dnaArray = dna.split("");
  let rnaArray = [];
  for(let i = 0; i < dnaArray.length; i++){
    if(dnaArray[i] === "T"){
      rnaArray.push("U");
    } else {
      rnaArray.push(dnaArray[i]);
    }
  }
  let rna = rnaArray.join("");
  return rna;
}
//or more quickly
function DNAtoRNA(dna) {
  return dna.split("T").join("U");
}



//#60  Beginner - Lost Without a Map
/*Given and array of integers (x), return the array with each value doubled. Example:

[1, 2, 3] --> [2, 4, 6]

For the beginner, try to use the map method - it comes in very handy quite a lot 
so is a good one to know.   */

function maps(x){
  return x.map(function(num){
    return num*2;
  });
}
//or
function maps(x){
  return x.map((num) => num * 2);
}




//61  Well of Ideas
/*In this kata you need to check the provided array (x) for good ideas 'good' and 
bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there 
are more than 2 return 'I smell a series!'. If there are no good ideas, as is often 
the case, return 'Fail!'.  */

function well(x){
  let goodCount = 0;
  let badCount = 0;
  for(let i = 0; i < x.length; i++){
    if(x[i]==="good"){
      goodCount += 1;
    } else {
      badCount += 1;
    }
  }
  if(goodCount <= 2 && goodCount > 0){
    return "Publish!";
  } else if(goodCount > 2){
    return "I smell a series!";
  } else {
    return "Fail!"
  }
}



//62    Calculate BMI
/*Write function bmi that calculates body mass index (bmi = weight / height ^ 2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese" */
function bmi(weight, height) {
  const bmi = weight/(height*height);
  return (bmi <= 18.5) ? "Underweight": 
         (bmi <= 25.0) ? "Normal": 
         (bmi <= 30.0) ? "Overweight": "Obese";
}



//#63      Filling an array (part 1)
/*We want an array, but not just any old array, an array with contents!

Write a function that produces an array with the numbers 0 to N-1 in it.

For example, the following code will result in an array containing the numbers 0 to 4: */
function arr(N){
 let newArray = [];
 let count = 0;
 while(count < N){
   newArray.push(count);
   count += 1;
 }
 return newArray;
};



//#64     Remove duplicates from list
/*Write function distinct that removes duplicate from list of numbers.

The order of the sequence needs to stay the same. */
function distinct(a) {
  return Array.from(new Set(a));
}



//#65   Plurals
/*We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).
All values will be positive integers or floats, or zero.*/
function plural(n) {
  if(n === 1){
    return false;
  } else {
    return true;
  }
}



//#67   Opposites Attract
/*Timmy & Sarah think they are in love, but around where they live, they will only know 
once they pick a flower each. If one of the flowers has an even number of petals and the 
other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if 
they are in love and false if they aren't.  */
function lovefunc(flower1, flower2){
  if(flower1 % 2 === 0 && flower2 % 2 !== 0 || flower2 % 2 === 0 && flower1 % 2 !== 0){
    return true;
  } else {
    return false;
  }
}



//68   String Cleaning
/*seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text. For example:

stringClean('! !') == '! !'
stringClean('123456789') == ''
stringClean('This looks5 grea8t!') == 'This looks great!'
Your harried co-workers are looking to you for a solution to take this 
garbled text and remove all of the numbers. Your program will take in a 
string and clean out all numeric characters, and return a string with 
spacing and special characters ~#$%^&!@*():;"'.,? all intact.*/

function stringClean(s){
  return s.replace(/[0-9]/g, '');
}


//69  My head is at the wrong end
/*You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone 
has gone and switched their heads and tails around!

Save the animals by switching them back. You will be given an array which will have three values 
(tail, body, head). It is your job to re-arrange the array so that the animal is the right way 
round (head, body, tail).

Same goes for all the other arrays/lists that you will get in the tests: you have to change the 
element positions with the same exact logics - simples!*/

function fixTheMeerkat(arr) {
  return [arr[2], arr[1], arr[0]];
}


//70  Finish Guess the Number Game
/*Imagine you are creating a game where the user has to guess the correct number. But there is a limit of how many guesses the user can do.

If the user tries to guess more than the limit the function show throw an error
If the user guess wrong it should lose a life and return false (if you guess correctly you shouldn't remove a life)
If the user guess right it should return true
Can you finish the game so all the rules are met?*/

class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }
  
  guess(n) {
    if (this.lives <= 0) {
      throw 'Expect error already dead';
      }
      
    if (this.number === n) {
      return true;
    } else {
      this.lives--; 
      return false;
    }
  
    // return false;
  }
  
}


//71  Find the first non-consecutive number 
/*Your task is to find the first element of an array that is not consecutive.

E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 
is not, so that's the first non consecutive number.

If the whole array is consecutive then return null

The array will always have at least 2 elements and all the elements will be numbers. The numbers 
will also all be unique and in ascending order. The numbers could be positive or negetive and 
the first non-consecutive could be either too!*/

function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; ++i) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return arr[i + 1]
    }
  }
  return null
}