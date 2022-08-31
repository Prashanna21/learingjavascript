/*In simple words, Lexical scope is the ability for a child function scope to access variables from the parent scope
but parent function cannot access variables from child scope.
*/

let globalVar = "Global" //initializing a global variable


function parent(){
    let parentVar = "Parent" //declaring a parent variable 

    child()

    function child(){
        let childVar = "Child"
        console.log(`${globalVar} and ${parentVar} and ${childVar}`)//Console: Global and Parent and Child
        //child function scope can accces parent funcitons variable and global variable
    }

    console.log(childVar) // Thorws an error "childVar is not defined"
}

parent()