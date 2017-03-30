//#1     Even or Odd
/*Create a function that takes an integer as an argument and returns 
"Even" for even numbers or "Odd" for odd numbers. */

using System;

namespace Solution
{
  public class SolutionClass
  {
    public static string EvenOrOdd(int number)
    {
      if(number % 2 == 0)
      {
        return "Even";
      } 
      else
      {
        return "Odd";
      }
    }
  }
}


//#2   Multiply
//This code does not execute properly. Repair.
// public class CustomMath {
//     public static int multiply(int a, string b) {
//         return a * b;
//     }
// }
public class CustomMath {
    public static int multiply(int a, intb)
    {
        return a * b;
    }
}