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
    if(count[a] === count[b]) return b - a;
    else return count[a] - count[b];
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

