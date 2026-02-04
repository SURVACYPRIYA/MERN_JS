import { Schema,model } from "mongoose";
//create cart schema
/*const cartSchema =new Schema({
    product:{
        type:Schema.Types.ObjectId,
        ref:"product" //name of the product model
    }
})*/
const cartSchema =new Schema({
    product:{
        type:Schema.Types.ObjectId,
        ref:"product" //name of the product model
    },
    quantity:{
        type:Number,
        default:1
    }
})

//create user schema 
const userSchema=new Schema({
    username:{
        type:String,
        required:[true,"user name is required"]
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:true //it is not a validator but action, add to index
    },
    password:{
        type:String,
        required:[true,"password is required"]
    },
    cart:{
        type:[cartSchema],
        default:[]
    }
},{
    strict:"throw",
    timestamps:true,
    versionkey:false
});

//create user model with that schema
export const UserModel=model("user",userSchema)