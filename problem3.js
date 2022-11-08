const primaNumber = (angka) => {
    let angkaBagi = 0;
    for (let i = 1; i <= angka; i++) {
        if (angka % i == 0) {
            angkaBagi++
        }
    }
    if (angkaBagi == 2) {
        console.log("prima")
    } else {
        console.log("bukan prima")
    }
}

primaNumber(2);
