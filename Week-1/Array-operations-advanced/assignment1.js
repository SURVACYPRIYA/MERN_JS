/*ASSIGNMENT 1:
-------------
You are building a shopping cart summary for an e-commerce website.

Test Data : 
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

Tasks:
    
1.Use filter() to get only inStock products
2.Use map() to create a new array with:  { name, totalPrice }
3.Use reduce() to calculate grand total cart value
4.Use find() to get details of "Mouse"
5.Use findIndex() to find the position of "Keyboard"*/


const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

let res1=cart.filter(el=>el.inStock)
console.log(res1)

let res2=cart.map(cart=>{
    return{
        name:cart.name,
        totalPrice:cart.price
    }
})
console.log(res2)


let res3=cart.reduce((acc,cart)=>acc+cart.price,0)
console.log(res3)

let res4=cart.find(cart=>cart.name==="Mouse")
console.log(res4)

let res5=cart.findIndex(cart=>cart.name==="Keyboard")
console.log(res5)