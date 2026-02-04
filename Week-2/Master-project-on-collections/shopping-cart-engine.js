//MODULE 3: SHOPPING CART ENGINE 
import {users,courses,cart,roles} from "./Engine-project-story.js"
  //-> Merge cart with courses to get full course info
  let Merge=cart.map(item=>{
    let course=courses.find(c=>c.id===item.courseId)
      return{...course, 
        qty:item.qty
      }
  })
  console.log(Merge)
  //-> Calculate total cart amount
  let total=Merge.reduce((acc,item)=>acc+item.price*item.qty,0)
  console.log(total)
  //-> Increase quantity of a course (immutably)
  let quantity=cart.map(item=>{
    return item.courseId===103?{...item,
      qty:item.qty+1}:item
  })
  console.log(quantity)
  //-> Remove a course from cart
  let remove=cart.filter(item=>item.courseId!==103)
  console.log(remove)
  //-> Check if all cart items are paid courses
  let check=Merge.find(item=>item.price>0 && item.published===true)
  console.log(check)

