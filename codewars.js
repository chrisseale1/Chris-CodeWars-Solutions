//1.   Convert boolean values to strings 'Yes' or 'No'.
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