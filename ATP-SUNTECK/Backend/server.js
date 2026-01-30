//create HTTP server
//import express module
import exp from 'express'
import { userApp }  from './API/user-api.js';
import { productApp }  from './API/product-api.js';
//create server
const app=exp()
//port number
app.listen(3000,()=>console.log('HTTP server listening on port 3000....'))

//body parsing middleware
app.use(exp.json());

// //create a custom middleware
// function middleware1(req,res,next){

//     console.log("middleware-1 executed")
//     //send res
//     //res.json({message:"res from middleware1"})
//     //forward req to next middleware or route
//     next()
// }
// function middleware2(req,res,next){

//     console.log("middleware-2 executed")
//     //send res
//     //res.json({message:"res from middleware1"})
//     //forward req to next middleware or route
//     next()
// }


//forward req to userApp when path starts with 
app.use('/user-api',userApp)
app.use('/product-api',productApp)