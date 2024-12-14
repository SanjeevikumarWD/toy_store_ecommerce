import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unnique:true,
    },
    password:{
        type:String,
        required:true,
    },
    lastLogin:{
        type:Date,
        default:Date.now,
    },
    isVerified:{
        type:Boolean,
        default:false,
    },
    resetPasswordToken:String,
    resetPasswordExpiresAt:Date,
    verificationToken:String,
    verificationTokenExpiresAt:Date,
},{
    timestamps:true,
})


const User = new mongoose.model("User",userSchema);


export default User;