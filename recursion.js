const recursion = (num) => {
  if (num === 1) {                    // base case
   return num;
  } else  {
    return num * recursion(num - 1);                // recursive case
  }
};

// every recursive function will has 2 cases 
// one recursive case where the function returns itself
// and one base case which will not return the function
// but a value


// CALL STACK

// - represents the order which our function gots called
// and what variables there being called with

// Example with function call recursion(4)

//num = 1
//return 1
//
//num = 2
//return 2 *  this => factorial(1) gets to 1
//
//num = 3
//return 3 * this => factorial(2) gets to 2
//
//num = 4       
//return 4 * this => factorial(3) gets to 6 (because over us => 3 * 2 === 6)

