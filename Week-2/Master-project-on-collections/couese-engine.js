//MODULE 2: COURSE CATALOG ENGINE
import { users,courses,cart,roles } from "./Engine-project-story.js"
  //-> Get published courses
  let published=courses.filter(ele=>ele.published===true)
  console.log(published)
  //-> Sort courses by price (high → low)
    let price=courses.toSorted((a,b)=>b.price-a.price)
    console.log(price)
  //-> Extract { title, price } only
   let ex=courses.map(ele=>[ele.title,ele.price])
  console.log(ex)
  //-> Calculate total value of published courses
  let total=courses.reduce((acc,ele)=>acc+ele.price,0)
  console.log(total)
  //-> Add a new course immutably
  let newcourse={
    id:104,title:"mern",price:1699,published:true
  }
  let update=[...courses,newcourse]
  console.log(update)