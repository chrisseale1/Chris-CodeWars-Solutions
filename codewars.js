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



//#5   