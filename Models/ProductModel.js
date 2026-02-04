import { Schema,model } from "mongoose";
const productSchema=new Schema({

    productName:{
        type:String,
        required:[true,"product name is required"]
    },
    productPrice:{
        type:Number,
        required:[true,"price is required"]
    },
    productBrand:{
        type:String,
        required:[true,"product Brand is required"]
    }
},{
    strict:"throw",
    timestamps:true,
    version:false
});
export const ProductModel=model("product",productSchema)

