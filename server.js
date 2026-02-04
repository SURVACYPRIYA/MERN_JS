import exp from "express"
import {connect} from "mongoose"
import {ProductApp} from "./APIs/ProductApi.js"
import {UserApp} from "./APIs/UserApi.js"
const app=exp();
const port=4000;

async function connectDB(){
    try{
        await connect('mongodb://localhost:27017/ecomdb');
        console.log("Db is connected")
        app.listen(port,()=>console.log('HTTP server listening on port 4000....'))
    }
    catch(err)
    {
        console.log("error in connectivity",err)
    }
        
}

connectDB()

//body patser middleware
app.use(exp.json())

//if path starts with /user-api , forward req to userApp
app.use('/user-api',UserApp)
app.use('/product-api',ProductApp)

//error handling middleware(placed at end of this file always)
app.use((err,req,res,next)=>{
    res.status(500).json({message:"error",reason:err.message})
})