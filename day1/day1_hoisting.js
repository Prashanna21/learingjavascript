/*Hoisting in Javascript is a mechanism where variables and functions declarations are moved to 
the top of their scope before the code executes.*/



//Hoisting Example 1

console.log(myName) //Here the variable 'myName' is declared before it is even initialized
var myName; //After it is called it is initialized
myName = "Prashanna"

/* Console:  undefined 
Logically it should return an error because a program runs step by step from top to bottom but due to hoisting the veriable are moved to the top
of the execution.
*/

//Note: It doesn't work with new Es6 Variable keywords like let and const it returns and error "Cannot access 'myName' before initialization"


//Hoisting Example 2
console.log(returnMyName()) //here a function 'returnMyName' is called before it is even initialized
function returnMyName(){ //Now it is initialized
    return "Prashanna"
}

/*Console: Prashanna
Here also the function is called before initialized and its performing the function it is said to do because of the keyword function it is 
moved to the top of the execution.*/

//Note : It doesn't work with new Es6 arrow functions

