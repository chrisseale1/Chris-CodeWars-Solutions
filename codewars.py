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




#4  Remove String Spaces
#Simple, remove the spaces from the string, then return the resultant string
def no_space(x):
    listX = x.split() 
    return ''.join(listX)


#5 Well of ideas
#In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.
def well(x):
    good = x.count('good')
    print (good)
    if good == 0:
        return 'Fail!'
    elif good > 2:
        return 'I smell a series!'
    else:
        return 'Publish!'