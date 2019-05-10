// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

function consume (x,y,cb) {
  return console.log(cb(x,y))//4,160, Hello Marry Poppins, nice to meet you!
}


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

const add = (a,b) => {
  return (a+b)
}


const multiply = (a,b) => {
  return (a*b)
}

const greeting = (first, last) => {
  return (`Hello ${first} ${last}, nice to meet you!`)
}

/* Step 3: Check your work by un-commenting the following calls to consume(): */
 // console.logged out in consume function
consume(2,2,add); // 4
consume(10,16,multiply); // 160
consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 
/*The nested function can access the variable 'internal' because of scope. since 'internal' was declared with const, const has a block scope. Block scope is working here as the block for internal is nested in does not end until after the nestedFunction ends. 
*/


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  //const declared, has block scope
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
  //const block scope ends here, available to anything above this line
}
myFunction();