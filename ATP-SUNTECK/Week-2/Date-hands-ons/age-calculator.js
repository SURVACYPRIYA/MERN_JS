//Assignment 3: Age Calculator (Intermediate)
//-------------------------------------------
//Input:
    let dob = new Date("2000-05-15")
    let dob1=new Date()

//Tasks:
        //1. Calculate exact age in years
        let yr = dob1.getFullYear()-dob.getFullYear()
        let month=dob1.getMonth()-dob.getMonth()
        let day=dob1.getDate()-dob.getDate()

        if (month<0){
            yr--;
            month=month+12
        }
        console.log(yr + " years" )