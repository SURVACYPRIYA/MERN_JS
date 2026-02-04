//Assignment 2: Date Comparison & Validation (Beginner → Intermediate)
//--------------------------------------------------------------------

 //Given:
      let enrollmentDeadline = new Date("2026-01-20");
      let date=new Date() 
//Tasks:
  //1.Check if:
      //* Today is before deadline → "Enrollment Open"
      if(date<enrollmentDeadline){
        console.log("Enrollment open")
      }
      //* Today is after deadline → "Enrollment Closed"
      else{
        console.log("Enrollment Closed")
      }

  //2. Validate user input date:
      //* Input: "2026-02-30"
      let input="2026-02-30"
      let date1=new Date(input)
      //* Detect whether the date is valid or invalid
      let [year, month, day] = input.split("-").map(Number);
      let isvalid=date1.getFullYear()===year && date1.getMonth()+1===month && date1.getDate()===day
      if(isvalid){
        console.log("valid") 
      }      
      else{
        console.log("invalid")
      }
      