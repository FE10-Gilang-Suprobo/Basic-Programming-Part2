const factorNumb = (num) => {
    for(let i = 1; i <= num; i++) {
    
        // check if number is a factor
        if(num % i == 0) {
            console.log(i);
        }
    }
}

factorNumb(12);