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

