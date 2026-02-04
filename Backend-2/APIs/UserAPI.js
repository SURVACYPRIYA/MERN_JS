import exp from 'express'
import { UserModel } from '../models/UserModel.js'
import { hash,compare} from 'bcryptjs'
import jwt from 'jsonwebtoken'
import {verifyToken} from '../middlewares/verifyToken.js' 
export const userApp=exp.Router()
let users=[]


//USER API ROUTES

//create user
userApp.post('/users',async(req,res)=>{
    //get newuser from  req
    let newUser=req.body;
    //hash the password
    let hashedPassword=await hash(newUser.password,12)
    //replace plain password with hashed password
    newUser.password=hashedPassword
    //create new user document
    let newUserDoc=new UserModel(newUser)
    //save in db
    await newUserDoc.save()
    //send res 
    res.status(201).json({message:"user created"})
})


//User authentication(login) Route
userApp.post('/auth',async(req,res)=>{
    //get user cred obj
    let userCred=req.body
    //check for username
    let userofdDB=await UserModel.findOne({username:userCred.username})
    //if user not found
    if(userofdDB===null){
        return res.status(404).json({message:"Invalid username"})
    }
    //compare passwords
    let status=await compare(userCred.password,userofdDB.password)
    //if passwords not matched
    if(status===false){
        return  res.status(404).json({message:"Invalid password"})
    }
    //create signed token
    let signedToken=jwt.sign({username:userCred.username},
        'abcdef',
        {expiresIn:30})
    //save token as httpOnly cookie
    res.cookie('token',signedToken,{
        httpOnly:true,//it is httpOnly cookie
        secure:false,
        sameSite:"lax" //lax-means relax 
    })

    //send token in res
    res.status(200).json({message:"login success"})
})




//read user
userApp.get('/users',async(req,res)=>{
    //read users from db
    let users=await UserModel.find()
    //send res
    res.status(200).json({message:"users",payload:users})
})


//read user by ObjectID
userApp.get('/users/:id',async(req,res)=>{
    //get ObjectID from url param
    let objId=req.params.id;
    //find user in DB
    let userObj=await UserModel.findById(objId)
    //send res
    res.status(200).json({message:"user",payload:userObj})
})



//update user
userApp.put('/users/:id',async(req,res)=>{
    //get ObjectID from url params
    let objId=req.params.id
    //get modified user from req
    let modifiedUser=req.body
    //make update
    let latestUser=await UserModel.findByIdAndUpdate(objId,
        {$set:{ ...modifiedUser }},
        { new:true, runValidators:true});
    //send res
    res.status(200).json({message:"user modified",payload:latestUser})
})



//delete user
userApp.delete('/users/:id',async(req,res)=>{
    //get ObjectID from url params
    let objId=req.params.id
    //delete user by id
    let deletedUser=await UserModel.findByIdAndDelete(objId)
    res.status(200).json({message:"user removed",payload:deletedUser})

})



//test route(protected)
userApp.get("/test",verifyToken,(req,res)=>{
    res.json({message:"test route"})
})