import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    colour: {
        type: String,
        required: true,
        trim: true
    },
    size: {
        type: String,
        required: true,
        trim: true
    },
    Stock: {
        type: Boolean,
        default: true
    },
    Quantity: {
        type: Number,
        required: true
    },
    createdAt :{
        type: Date,
        default: Date.now,
        immutable: true
    },
    updatedAt :{
        type: Date,
        default: Date.now,
    }
})

export default mongoose.model("product", productSchema);