//Error Handling In Javascript

//we have try, catch and finally


//Example 1
try{
    console.log(userName)
}
catch(errorName){
    console.log(`The error is:  ${errorName}`) // The error is:  ReferenceError: Cannot access 'userName' before initialization
}

finally{
    console.log("I will run at last no matter if error occurs or not")
}


const userName = "Prashanna"


