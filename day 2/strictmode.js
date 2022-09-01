/*Strict mode keyword retruns error when creating variables with out using let, var or const keywords and does these things:

1) Eliminates some JavaScript silent errors by changing them to throw errors.
2) Fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be 
made to run faster than identical code that's not strict mode.
3) Prohibits some syntax likely to be defined in future versions of ECMAScript.
*/

// Example 1:

"use strict"
y = 1
console.log(y) // returns an error