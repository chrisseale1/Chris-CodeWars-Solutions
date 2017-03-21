#1      Convert boolean values to strings 'Yes' or 'No'.
#Complete the bool_to_word (Javascript: boolToWord ) method.

#Given: a boolean value

#Return: a 'Yes' string for true and a 'No' string for false 

def bool_to_word(bool):
   if(bool == True):
       return "Yes"
   else:
      return "No"



#2    Even or Odd
#Create a function that takes an integer 
# as an argument and returns "Even"for even numbers or "Odd" for odd numbers.
def even_or_odd(number):
    if(number % 2 == 0):
        return "Even"
    else:
        return "Odd"



#3  Multiply
#The code does not execute properly. Try to figure out why.
def multiply(a, b):
  return a * b