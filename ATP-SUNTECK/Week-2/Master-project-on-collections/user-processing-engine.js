//TASKS
//------
//MODULE-1 :USER PROCESSING ENGINE
import { users,courses,cart,roles } from "./Engine-project-story.js"
  //-> Get only active users
  let active=users.filter(ele=>ele.active===true)
  console.log(active)
  //-> Extract names of active users
  let name=active.map(ele=>ele.name)
  console.log(name)
  //-> Check if any admin exists
  let admin=users.find(ele=>ele.role==='admin')
  console.log(admin)
  //-> Find user by id
  let id=users.find(ele=>ele.id===1)
  console.log(id)
  //-> Deactivate a user immutably
  let Deactivate=users.map(ele=>{
    if(ele.id===1){
        return{...ele,active:false}
    }
    return ele
  })
  console.log(Deactivate)