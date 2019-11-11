// // ==== Callbacks ====  

// /* Step 1: Create a higher-order function
//   * Create a higher-order function named consume with 3 parameters: a, b and cb
//   * The first two parameters can take any argument (we can pass any value as argument)
//   * The last parameter accepts a callback
//   * The consume function should return the invocation of cb, passing a and b into cb as arguments
// */
function consume (a, b, cb) {
    return cb (a,b);
    }
   // /* Step 2: Create several functions to callback with consume();
   //   * Create a function named add that returns the sum of two numbers
   //   * Create a function named multiply that returns the product of two numbers 
   //   * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
   // */
   function add (num1, num2) {
   return num1 + num2;
   }
   
   
   function multiply (x,y) {
   return x * y;
   }
   
   
   function greeting (firstName, lastName) {
   return `Hello ${firstName} ${lastName}, nice to meet you!`;
   }
   
   // /* Step 3: Check your work by un-commenting the following calls to consume(): */
   //consume(2,2, add); // 4
   //consume(10,16, multiply);// 160
   //consume("Mary", "Poppins", greeting);// Hello Mary Poppins, nice to meet you!
   
   
   // // ==== Closures ==== 
   
   // Question 1: Explain in your own words why the example below is a closure.
  

// Answer: The example below is a closure because of the Inner Function is able to access the variables inside of the function even though it is outside of the inner function. 

// Question 2: Given the example below, what scope is the external variable in? Global Scope  

let outside = "I'm A Boss!";

function myFunction() {
let inside = "Hello! I'm A Bose of this function";
console.log(outside);
function nestedFunction() {
 console.log(inside);
};
 nestedFunction();
  }
 myFunction();