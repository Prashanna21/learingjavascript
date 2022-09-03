const jokes = document.getElementById("joke")
const jokeBtn = document.getElementById("joke-btn")


const generateJokes = () => {
    
    const setHeader = {
        headers: {
            Accept: "application/json"
        }
    }
    fetch("https://icanhazdadjoke.com/", setHeader)
    .then((res) => res.json()).
    then((data) => { 
        jokes.innerHTML = data["joke"]
    })
}


jokeBtn.addEventListener('click', generateJokes)

generateJokes()