const icon = document.getElementById("icon")
const heading = document.getElementById("heading")

const loadTemp = () => {
    icon.innerHTML = "&#xf2cb"
    icon.style.color = "white"
    heading.style.color = "white"
    setTimeout(() => {
        icon.innerHTML = "&#xf2ca"
        
    }, 1000)

    setTimeout(() => {
        icon.innerHTML = "&#xf2c9"
        icon.style.color = "yellow"
        heading.style.color = "yellow"
    }, 2000)

    setTimeout(() => {
        icon.innerHTML = "&#xf2c8"
    }, 3000)

    setTimeout(() => {
        icon.innerHTML = "&#xf2c7"
        icon.style.color = "red"
        heading.style.color = "red"
    }, 4000)
}

setInterval(loadTemp, 5000);



