// Currying Technique

/* Currying is a technique of  evaluating function with mutiple arguments, into sequence
of function with single argument. 

In other words, when a function, instead of taking all arguments at one time, takes the first one and 
return a new function that takes the second one and returns a new function which takes the third one, 
and so forth until all arguments have been fulfilled.

*/

//Challenge or interview question: How to solve sum(5)(6)(9)

//Solved in Traditional Way:

function sum(num1){
    console.log(num1) // 5
    return function(num2) {
        console.log(num1, num2) // 5 6  // can access parent's variable due to lexical scope
        return function(num3){
            console.log(num1,num2,num3) // 5 6 9
            console.log(num1 + num2+ num3) // 20
        }
        
    }

}

sum(5)(6)(9)


//Solved with new Es6 arrow function
let sum = (numFirst) => (numSecond) => (numThrid) => {
    console.log(numFirst + numSecond + numThrid) // 20
}

sum(5)(6)(9)