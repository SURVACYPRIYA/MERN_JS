//Assignment 1: Date Creation & Extraction (Beginner)
//---------------------------------------------------
//Tasks:
       //1. Create a Date object for current date & time.
       let date=new Date(Date.now())
       //2. Extract and display:
                    //* Year
                    console.log(date.getFullYear())
                    //* Month (human readable)
                    let arr=['jan','feb','mar','apr','may','june','july','aug','sep','oct','nov','dec']
                    console.log(arr[date.getMonth()])
                    //* Date
                    console.log(date.getDate())
                    //* Day of week
                    console.log(date.getDay())
                    //* Hours, minutes, seconds
                    console.log(date.getHours(),date.getMinutes(),date.getSeconds())

      //3. Display the date in this format:
                   // DD-MM-YYYY HH:mm:ss
                   let DD=date.getDate()
                   let MM=date.getMonth()
                   let YYYY=date.getFullYear()
                   let HH=date.getHours()
                   let mm=date.getMinutes()
                   let ss=date.getSeconds()
                   console.log(DD + "-" + MM + "-" + YYYY + " " + HH + ":" + mm + ":" + ss)
