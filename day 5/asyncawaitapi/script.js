const jokes = document.getElementById("joke")
const jokeBtn = document.getElementById("joke-btn")


const generateJokes = async () => {
    

    try{
    const setHeader = {
        headers: {
            Accept: "application/json"
        }
    }

    //Using await

    const response = await fetch("https://icanhazdadjoke.com/", setHeader)
    const data = await response.json()
    jokes.innerHTML = data["joke"]

    //instead of .then() keyword
    /*fetch("https://icanhazdadjoke.com/", setHeader)
    .then((res) => res.json()).
    then((data) => { 
        jokes.innerHTML = data["joke"]
    }) */}
    catch(err){
        console.log("The error is" + err)
    }
}


jokeBtn.addEventListener('click', generateJokes)

generateJokes()