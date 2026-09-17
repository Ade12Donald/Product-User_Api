import express from 'express'
import mongoose from 'mongoose'
import userRouter from './routes/userRoutes.js'
import productRouter from './routes/productRoutes.js'
import 'dotenv/config'

const MONGO_URL = process.env.COMPASS_URL;
const PORT = process.env.PORT

const app = express()

app.use(express.json())
app.use('/users', userRouter)
app.use('/product', productRouter)

mongoose.connect(MONGO_URL).then(()=>{
    console.log("MongoDB connected successfully")
}).catch(error=>{
    console.error("Error: " + error.message)
})

app.listen(PORT, ()=>{
    console.log(`Server is up and live at port ${PORT}! `)
})