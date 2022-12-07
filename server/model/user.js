import mongoose from "mongoose";
const Schema = mongoose.Schema


const userSchema = new Schema({
    username: String,
    password: String,
    createdAt: {
        type: Date,
        default: new Date(),
      },
})

const User  = mongoose.model("user", userSchema, "user" )


const myUserSchema = { "User" : User}

export default myUserSchema