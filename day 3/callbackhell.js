//callBackHell

//The solution for the callback is Promises

const timer = () => {
    setTimeout(() => {
        console.log(1) //1 //After 1 Second
        setTimeout(() => {
            console.log(2)  //2 //After 1 Second
            setTimeout(() => {
                console.log(3)
                setTimeout(() => {
                    console.log(4)
                    setTimeout(() => {
                        console.log(5)
                        setTimeout(() => {
                            console.log(6)
                            setTimeout(() => {
                                console.log(7)
                                setTimeout(() => {
                                    console.log(8)
                                    setTimeout(() => {
                                        console.log(9)
                                        setTimeout(() => {
                                            console.log(10)
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);

        }, 1000);
    }, 1000);
}

timer()