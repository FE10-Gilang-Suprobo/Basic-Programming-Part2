 
const scoreStudent = (score) => {
    if (score >=80 && score <= 100) {
        console.log("Nilai A")
      } else if (score >=65 && score <= 79) {
        console.log("Nilai B+");
      } else if (score >=50 && score <= 64){
        console.log("Nilai B")
      } else if (score >=35 && score <= 49) {
        console.log("Nilai C")
      } else if (score >=0 && score <= 34) {
        console.log("Nilai D")
      } else {
        console.log("Invalid")
      }
}

scoreStudent(66);