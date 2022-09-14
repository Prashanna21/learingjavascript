const numbers = document.getElementsByClassName("numbers")


Object.keys(numbers).forEach((number) => {
    let targetCount = parseInt(numbers[number].innerText) 
    numbers[number].innerHTML = 0;

    const incrementAnimation = () => {
        const incr = targetCount / 23
        const startingCount = Number(numbers[number].innerHTML)

        if(startingCount < targetCount){
            numbers[number].innerHTML = Math.round(startingCount + incr)
            setTimeout(incrementAnimation, 50)
        }

        else{
            numbers[number].innerHTML = targetCount + "+"
        }

    }

    incrementAnimation()
});