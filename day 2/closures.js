/* Closures is the combination of a function bundled together(enclosed) with references
to its sourrounding state (lexical environnment) */

//Example 1:

const greetings = (userName) => {
    greeting = "Namaste, "
    return () => {
        console.log(greeting + userName)
    }
}

const greetingFunc = greetings("Prashanna")
greetingFunc() //Console: Namaste, Prashanna


//Example 2:

const counter = (() => {
    let counter = 0;
    return () => {
        counter += 1
        return counter
    }
}) ()

counter()
console.log(counter()) //console: 2
