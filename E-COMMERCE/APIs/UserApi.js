
import exp from 'express'
import { UserModel } from '../Models/UserModel.js'
import { ProductModel } from '../Models/ProductModel.js'
import {hash} from 'bcryptjs'
export const UserApp=exp.Router()
let users=[]

//route to create user
UserApp.post("/users",async(req,res)=>{
    //get user from req
    let userObj=req.body;
    //run validator 
    await new UserModel(userObj).validate();
    //hash password
    let hashedPassword=await hash(userObj.password,10)
    //replace plain password with hashed password
    userObj.password=hashedPassword
    //create user document
    let userDocument=new UserModel(userObj)
    //save
    await userDocument.save({validateBeforeSave:false})
    //res
    res.status(201).json({Message:"user created"})
})


/*UserApp.put("/user-cart/user-id/:uid/product-id/:pid",async(req,res)=>{

    //read uid and pid from url parameters
    let {uid,pid}=req.params;   //{uid:"",pid:""}
    console.log("uid",uid)
    console.log("pid",pid)
    //check user
    let user=await UserModel.findById(uid)
    if(!user){
        return res.status(401).json({message:"user not found"})
    }
    //check product
    let product=await ProductModel.findById(pid)
    if(!product){
        return res.status(401).json({message:"product not found"})
    }
    //perform update
    let modifiedUser=await UserModel.findByIdAndUpdate(
        uid,
        {$push:{cart:{product:pid}}},
        {new:true}).populate("cart.product")
    //res
    res.status(200).json({message:"product added to cart",payload:modifiedUser})
})*/



//read user by id
UserApp.get("/users/:uid",async(req,res)=>{
    let {uid}=req.params
    //find user
    let userObj=await UserModel.findById(uid).populate("cart.product","productName productPrice")
    //res
    res.status(200).json({message:"user",payload:userObj})
})




UserApp.put("/user-cart/user-id/:uid/product-id/:pid", async (req, res) => {
  const { uid, pid } = req.params;

  const user = await UserModel.findById(uid);
  if (!user){
     return res.status(404).json({ message: "User not found" });
    }

  //check if product exists or not
    let cartItem = user.cart.find(item => item.product.toString() === pid)
  if(cartItem){
   cartItem.quantity += 1
  }
  if(!cartItem){
   user.cart.push({
      product:pid,
      quantity:1
   })
  }

  await user.save()
   //res
   res.status(200).json({message:"product added",payloader:user.cart})
})