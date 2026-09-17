import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true
    },
    password:{
        type: String, 
        required: true,
        trim: true
    }
})

export default mongoose.model("user", userSchema)