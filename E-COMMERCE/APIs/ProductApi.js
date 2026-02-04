import exp from "express"
import {ProductModel} from "../Models/ProductModel.js"
export const ProductApp=exp.Router()


//read product
ProductApp.get('/products',async(req,res)=>{
    //read product from db
    let products= await ProductModel.find()
    res.status(200).json({message:"products",payload:products})
})

//create product
ProductApp.post('/products',async(req,res)=>{
   
    let newProduct=req.body;
    //create new product doc
    let newProductDoc=new ProductModel(newProduct)
    //save in db
    await newProductDoc.save()
    //send res
    res.status(201).json({message:"product created"})
})


