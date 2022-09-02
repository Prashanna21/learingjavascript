const countryFlagImgContainer = document.getElementById('country-flag')
const countryNameContainer = document.getElementById('heading')
const captialNameContainer = document.getElementById("sub-heading")
const bottomContainer = document.getElementById('bottom')
const input = document.getElementById('input')
let data = null



input.addEventListener(('keypress'), (e) =>{
    if(e.key === "Enter"){
        const request = new XMLHttpRequest();
request.open("GET", `https://restcountries.com/v3.1/name/${input.value}`)
request.send()

request.addEventListener('load', function() {
     [data] = JSON.parse(this.responseText)
    console.log(data)

    countryFlagImgContainer.src = data["flags"]["png"]
    countryNameContainer.textContent = data["name"]["common"]
    captialNameContainer.textContent = `Capital: ${data["capital"]}`
    bottomContainer.innerHTML = `<div bottom-individual-container>
    <h3>
    ${Object.keys(data["currencies"])}
    </h3>
    <p>Currency</p>

    </div>

    <div bottom-individual-container>
    <h3>
    ${data["population"]}
    </h3>
    <p>Population</p>

    </div>

    <div bottom-individual-container>
    <h3>
    ${data["demonyms"]["eng"]["m"]}
    </h3>
    <p>Demonyms</p>

    </div>
    
    
    `
})
    }
})