import mongoose, { isValidObjectId } from "mongoose";
//first always import mongoose

// always make schema which require
const userSchema=new mongoose.Schema(
    {
        // username: String,      //we can aslo write in object for more function and special purpose
        // email:String,
        // isActive:Boolean

        // we can also pass custon validators

        username: {
            type: String,     //which type 
            required: true,   // check ye field hona hi chahiye
            unique: true,      //for uniqueness username
            lowercase: true  //sare small letters me ho
        },
        email: {
            type: true,
            required: true,
            unique:true,
            lowercase:true

        },
        password:{
            type: String,
            required:true,
        }
        // required:[true,"password is required"]
        // we can pass array in required field and pass msg if not field pass
        
    },{timestamps: true}
    //It tells Mongoose to automatically add two fields to every document in this schema:
    // createdAt
    // updatedAt


)
// first object is for which field or data we want and secondary is for kya kya timestamps lere ho

export const User = mongoose.model("User",userSchema)
//always export like this bcs we can use this in more files also.

//DB me model doge to model ka naam plural kr deta hai(+s) and convert in small letters ex User - users